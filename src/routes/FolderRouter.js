const express = require('express');
const router = express.Router();
const folderController = require('../controllers/FolderController');

router.get('/', folderController.getFolders);
router.get('/searchFolder:name', folderController.searchFolder);
router.post('/createFolder', folderController.createFolder);
router.put('/updateFolder:id', folderController.updateFolder);
router.delete('/deleteFolder:id', folderController.deleteFolder);





module.exports = router;
