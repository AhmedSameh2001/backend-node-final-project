const express = require('express');
const router = express.Router();
const folderController = require('../controllers/FolderController');

//GET
router.get('/', folderController.getFolders);
router.get('/searchFolder', folderController.searchFolder);
// POST
router.post('/createFolder', folderController.createFolder);
// PUT
router.put('/updateFolder/:id', folderController.updateFolder);
// DELETE
router.delete('/deleteFolder/:id', folderController.deleteFolder);





module.exports = router;
