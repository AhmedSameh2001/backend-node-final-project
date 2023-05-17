const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
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
  fails:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "File1"
  }
});

const Folder = mongoose.model('Folder1', folderSchema);

module.exports = Folder;
