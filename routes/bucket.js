// routes/buckets.js
const express = require('express');
const router = express.Router();
const bucketController = require('../controllers/bucketController');

// Create a bucket
router.post('/', bucketController.createBucket);

// Get all buckets
router.get('/', bucketController.getAllBuckets);

// Get a bucket by ID
router.get('/:bucketId', bucketController.getBucketById);

// Delete a bucket
router.delete('/:bucketId', bucketController.deleteBucket);

module.exports = router;
