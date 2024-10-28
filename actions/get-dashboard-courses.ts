import { Purchase } from '@/models/Purchase'; // Adjust the import based on your file structure
import { Course } from '@/models/Course';
import { getProgress } from './get-progress';

type CourseWithProgressAndCategory = Course & {
  progress: number;
};

type DashboardCourses = {
  completedCourses: CourseWithProgressAndCategory[];
  coursesInProgress: CourseWithProgressAndCategory[];
};

export async function getDashboardCourses(userId: string): Promise<DashboardCourses> {
  try {
    const purchasedCourses = await Purchase.find({ userId })
      .populate({
        path: 'course',
        populate: [
          {
            path: 'category',
          },
          {
            path: 'chapters',
            match: { isPublished: true },
          },
        ],
      })
      .exec();

    const courses = purchasedCourses.map((purchase) => purchase.course) as CourseWithProgressAndCategory[];

    for (const course of courses) {
      const progress = await getProgress(userId, course._id); // Use _id for Mongoose documents
      course.progress = progress;
    }

    const completedCourses = courses.filter((course) => course.progress === 100);
    const coursesInProgress = courses.filter((course) => (course.progress ?? 0) < 100);

    return {
      completedCourses,
      coursesInProgress,
    };
  } catch (error) {
    console.error(error); // Log the error for debugging
    return {
      completedCourses: [],
      coursesInProgress: [],
    };
  }
}