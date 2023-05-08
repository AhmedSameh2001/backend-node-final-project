const mongoose = require('mongoose');
const File = require("./File")
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
    ref: "File"
  }
});

const Folder = mongoose.model('Folder', folderSchema);

module.exports = Folder;
