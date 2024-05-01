// routes/files.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const fileController = require('../controllers/fileController');
const upload = multer({ dest: 'uploads/' });

// Upload a file
router.post('/', upload.single('file'), fileController.uploadFile);

// Get a file
router.get('/:fileId', fileController.getFile);

// Delete a file
router.delete('/:fileId', fileController.deleteFile);

module.exports = router;
