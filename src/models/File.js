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
    ref: "Folder"
  }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
