// controllers/fileController.js
const File = require('../models/files');

exports.uploadFile = async (req, res) => {
  try {
    const { originalname, path, mimetype, size } = req.file;
    const file = new File({
      name: originalname,
      bucket: req.body.bucketId,
      path: path,
      contentType: mimetype,
      size: size,
    });
    await file.save();
    res.status(201).json({ success: true, data: file });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    res.setHeader('Content-Type', file.contentType);
    res.sendFile(file.path);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    await file.remove();
    res.json({ success: true, message: 'File deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
