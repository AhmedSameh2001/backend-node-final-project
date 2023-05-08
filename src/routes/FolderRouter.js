const express = require('express');
const router = express.Router();
const folderController = require('../controllers/FolderController');

router.get('/', folderController.getFolders);
router.get('/:name', folderController.searchFolder);
router.post('/', folderController.createFolder);
router.put('/:id', folderController.updateFolder);
router.delete('/:id', folderController.deleteFolder);





module.exports = router;
