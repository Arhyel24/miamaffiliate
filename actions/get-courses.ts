import { Course } from '@/models/Course'; // Adjust the import based on your file structure
import { Category } from '@/models/Category';
import { Purchase } from '@/models/Purchase';
import { getProgress } from './get-progress';

export type CourseWithProgressAndCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

type GetCoursesArgs = {
  userId: string;
  title?: string;
  categoryId?: string;
};

export async function getCourses({
  userId,
  title,
  categoryId,
}: GetCoursesArgs): Promise<CourseWithProgressAndCategory[]> {
  try {
    const courses = await Course.find({
      isPublished: true,
      ...(title ? { title: { $regex: title, $options: 'i' } } : {}), // Case-insensitive search
      ...(categoryId ? { categoryId } : {}),
    })
      .populate({
        path: 'category',
        model: 'Category',
      })
      .populate({
        path: 'chapters',
        match: { isPublished: true },
        select: { id: true },
      })
      .populate({
        path: 'purchases',
        match: { userId },
      })
      .sort({ createdAt: -1 }) // Sort by createdAt descending
      .exec();

    const coursesWithProgress: CourseWithProgressAndCategory[] = await Promise.all(
      courses.map(async (course) => {
        if (!course.purchases || course.purchases.length === 0) {
          return { ...course.toObject(), progress: null }; // Use toObject() to convert Mongoose document to plain object
        }

        const progressPercentage = await getProgress(userId, course._id);
        return {
          ...course.toObject(),
          progress: progressPercentage,
        };
      }),
    );

    return coursesWithProgress;
  } catch (error) {
    console.error(error); // Log the error for debugging
    return [];
  }
}