import { Purchase } from '@/models/Purchase'; // Adjust the import based on your file structure
import { Course } from '@/models/Course';
import { Chapter } from '@/models/Chapter';
import { Attachment } from '@/models/Attachment';
import { UserProgress } from '@/models/UserProgress';

type GetChapterArgs = {
  userId: string;
  courseId: string;
  chapterId: string;
};

export async function getChapter({ userId, courseId, chapterId }: GetChapterArgs) {
  try {
    const purchase = await Purchase.findOne({ userId, courseId }).exec();
    const course = await Course.findOne({ _id: courseId, isPublished: true }, { price: true }).exec();
    const chapter = await Chapter.findOne({ _id: chapterId, isPublished: true }).exec();

    if (!chapter || !course) {
      throw new Error('Chapter or course not found!');
    }

    let muxData = null;
    let attachments = [];
    let nextChapter = null;

    if (purchase) {
      attachments = await Attachment.find({ courseId }).exec();
    }

    if (chapter.isFree || purchase) {
      muxData = await MuxData.findOne({ chapterId }).exec(); // Assuming MuxData is defined as a Mongoose model

      nextChapter = await Chapter.findOne({
        courseId,
        isPublished: true,
        position: { $gt: chapter.position },
      }).sort({ position: 1 }).exec();
    }

    const userProgress = await UserProgress.findOne({ userId, chapterId }).exec();

    return {
      chapter,
      course,
      muxData,
      attachments,
      nextChapter,
      userProgress,
      purchase,
    };
  } catch (error) {
    console.error(error); // Log the error for debugging
    return {
      chapter: null,
      course: null,
      muxData: null,
      attachments: null,
      nextChapter: null,
      userProgress: null,
      purchase: null,
    };
  }
}