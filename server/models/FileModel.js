const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  data: {
    type: Buffer,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  smartId: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
});

const File = mongoose.model('files', fileSchema);

module.exports = File;
