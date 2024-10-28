import { Purchase } from '@/models/Purchase' // Adjust the import based on your file structure

type PurchaseWithCourse = {
  course: {
    title: string;
    price: number;
  };
};

function groupByCourse(purchases: PurchaseWithCourse[]) {
  const grouped: { [courseTitle: string]: number } = {};

  purchases.forEach((purchase) => {
    const courseTitle = purchase.course.title;
    if (!grouped[courseTitle]) {
      grouped[courseTitle] = 0;
    }

    grouped[courseTitle] += purchase.course.price;
  });

  return grouped;
}

export async function getAnalytics(userId: string) {
  try {
    const purchases = await Purchase.find({ 'course.createdById': userId })
      .populate('course') // Populate the course details
      .exec();

    const groupedEarnings = groupByCourse(purchases);
    const data = Object.entries(groupedEarnings).map(([courseTitle, total]) => ({
      name: courseTitle,
      total,
    }));

    const totalRevenue = data.reduce((acc, curr) => acc + curr.total, 0);
    const totalSales = purchases.length;

    return {
      data,
      totalRevenue,
      totalSales,
    };
  } catch (error) {
    console.error(error); // Log the error for debugging
    return {
      data: [],
      totalRevenue: 0,
      totalSales: 0,
    };
  }
}