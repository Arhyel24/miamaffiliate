const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  createdById: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: null },
  imageUrl: { type: String, default: null },
  price: { type: Number, default: null },
  isPublished: { type: Boolean, default: false },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

courseSchema.virtual('attachments', {
  ref: 'Attachment',
  localField: '_id',
  foreignField: 'courseId',
});

courseSchema.virtual('chapters', {
  ref: 'Chapter',
  localField: '_id',
  foreignField: 'courseId',
});

courseSchema.virtual('purchases', {
  ref: 'Purchase',
  localField: '_id',
  foreignField: 'courseId',
});

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

export default Course;