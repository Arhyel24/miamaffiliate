const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
}, {
  timestamps: true,
});

categorySchema.virtual('courses', {
  ref: 'Course',
  localField: '_id',
  foreignField: 'categoryId',
});

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;