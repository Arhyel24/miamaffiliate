const mongoose = require('mongoose');

const muxDataSchema = new mongoose.Schema({
  assetId: { type: String, required: true },
  playbackId: { type: String, default: null },
  chapterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter', unique: true, required: true },
}, {
  timestamps: true,
});

const MuxData = mongoose.models.MuxData || mongoose.model('MuxData', muxDataSchema);

export default MuxData;