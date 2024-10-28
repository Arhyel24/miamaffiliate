const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  chapterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter', required: true },
  isCompleted: { type: Boolean, default: false },
}, {
  timestamps: true,
});

userProgressSchema.index({ userId: 1, chapterId: 1 }, { unique: true });

const UserProgress = mongoose.models.UserProgress || mongoose.model('User Progress', userProgressSchema);

export default UserProgress;