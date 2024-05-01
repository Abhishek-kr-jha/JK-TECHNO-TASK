// models/File.js
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: String,
  bucket: { type: mongoose.Schema.Types.ObjectId, ref: 'Bucket' },
  path: String,
  contentType: String,
  size: Number,
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('File', fileSchema);
