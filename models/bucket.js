// models/Bucket.js
const mongoose = require('mongoose');

const bucketSchema = new mongoose.Schema({
  name: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bucket', bucketSchema);
