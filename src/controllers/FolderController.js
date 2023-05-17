const Folder = require('../models/Folder');

const createFolder = async (req, res) => {
  const { name } = req.body;
  try {
    const folder = new Folder({ name });
    await folder.save();
    res.status(201).json({ message: 'Folder created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const searchFolder = async (req, res) => {
  const { name } = req.params;
  try {
    const folder = await Folder.findOne({ name });
    if (!folder) {
      throw new Error('Folder not found');
    }
    res.status(200).json(folder);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};


const deleteFolder = async (req, res) => {
  const { id } = req.params;
  try {
    const folder = await Folder.findByIdAndDelete(id);
    if (!folder) {
      throw new Error('Folder not found');
    }
    res.status(200).json({ message: 'Folder deleted successfully' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};


const updateFolder = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const folder = await Folder.findByIdAndUpdate(id, { name }, { new: true });
    if (!folder) {
      throw new Error('Folder not found');
    }
    res.status(200).json({ message: 'Folder updated successfully' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};


const getFolders = async (req, res) => {
  try {
    const folders = await Folder.find();
    res.status(200).json(folders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createFolder,
  searchFolder,
  deleteFolder,
  updateFolder,
  getFolders
};
