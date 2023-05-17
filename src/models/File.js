const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  folder:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Folder1"
  }
});

const File = mongoose.model('File1', fileSchema);

module.exports = File;
