const File = require('../models/File');

const createFile = async (req, res) => {
  try {
    const { name } = req.body;
    const newFile = new File({ name });
    await newFile.save();
    res.status(201).json({ message: 'File created successfully', data: newFile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    await File.deleteOne({ _id: id });
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const updateFile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedFile = await File.findByIdAndUpdate(
      { _id: id },
      { name },
      { new: true }
    );
    res.status(200).json({ message: 'File name updated successfully', data: updatedFile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const searchFile = async (req, res) => {
  try {
    const { name } = req.query;
    const files = await File.find({ name });
    res.status(200).json({ data: files });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const getFiles = async (req, res) => {
  try {
    const files = await File.find({});
    res.status(200).json({ data: files });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const uploadFile = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ message: 'No files were uploaded' });
    }
    const { file } = req.files;
    const newFile = new File({ name: file.name });
    console.log(file.name)
    await newFile.save();
    file.mv(`${__dirname}/uploads/${newFile._id}`, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
      res.status(201).json({ message: 'File uploaded successfully', data: newFile });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const moveFile = async (req, res) => {
  const { fileId} = req.params;
  const { folderId } = req.body;

  try {
    const file = await File.findById(fileId);
    if (!file) {
      throw new Error('File not found');
    }


    const folder = await Folder.findById(folderId);
    if (!folder) {
      throw new Error('Destination folder not found');
    }

    // Update the file's folder reference
    file.folder = folderId;
    await file.save();

    res.status(200).json({ message: 'File moved successfully' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  createFile,
  deleteFile,
  updateFile,
  searchFile,
  getFiles,
  uploadFile,
  moveFile,
};