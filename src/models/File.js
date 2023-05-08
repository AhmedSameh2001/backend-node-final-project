const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  id:{
    type: Number,
    unique: true
  },
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
    type: mongoose.Schema.Types,
    ref: "Folder"
  }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
