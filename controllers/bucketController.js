// controllers/bucketController.js
const Bucket = require('../models/bucket');

exports.createBucket = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const bucket = new Bucket({ name, user: userId });
    await bucket.save();
    res.status(201).json({ success: true, data: bucket });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getAllBuckets = async (req, res) => {
  try {
    const buckets = await Bucket.find();
    res.json({ success: true, data: buckets });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getBucketById = async (req, res) => {
  try {
    const bucket = await Bucket.findById(req.params.bucketId);
    res.json({ success: true, data: bucket });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.deleteBucket = async (req, res) => {
  try {
    const bucket = await Bucket.findById(req.params.bucketId);
    await bucket.remove();
    res.json({ success: true, message: 'Bucket deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
