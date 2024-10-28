const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: null },
  videoUrl: { type: String, default: null },
  position: { type: Number, required: true },
  isPublished: { type: Boolean, default: false },
  isFree: { type: Boolean, default: false },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
}, {
  timestamps: true,
});

chapterSchema.virtual('muxData', {
  ref: 'MuxData',
  localField: '_id',
  foreignField: 'chapterId',
});

chapterSchema.virtual('userProgress', {
  ref: 'User Progress',
  localField: '_id',
  foreignField: 'chapterId',
});

const Chapter = mongoose.models.Chapter || mongoose.model('Chapter', chapterSchema);

export default Chapter;