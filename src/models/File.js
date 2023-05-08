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
  }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
