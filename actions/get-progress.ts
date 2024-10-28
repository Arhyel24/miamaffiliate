import { Chapter } from '@/models/Chapter'; // Adjust the import based on your file structure
import { UserProgress } from '@/models/UserProgress';

export async function getProgress(userId: string, courseId: string): Promise<number> {
  try {
    // Find all published chapters for the given course
    const publishedChapters = await Chapter.find({ courseId, isPublished: true })
      .select({ _id: true }) // Select only the _id field
      .exec();

    const publishedChapterIds = publishedChapters.map((chapter) => chapter._id); // Use _id for Mongoose documents

    // Count the number of completed chapters for the user
    const validCompletedChapters = await UserProgress.countDocuments({
      userId,
      chapterId: { $in: publishedChapterIds },
      isCompleted: true,
    }).exec();

    // Calculate progress percentage
    const progressPercentage = publishedChapterIds.length > 0 
      ? (validCompletedChapters / publishedChapterIds.length) * 100 
      : 0; // Avoid division by zero

    return progressPercentage;
  } catch (error) {
    console.error(error); // Log the error for debugging
    return 0;
  }
}