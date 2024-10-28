const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
}, {
  timestamps: true,
});

purchaseSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const Purchase = mongoose.models.Purchase || mongoose.model('Purchase', purchaseSchema);

export default Purchase;