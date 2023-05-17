const express = require('express');
const router = express.Router();
const fileController = require('../controllers/FileController');

//GET
router.get('/', fileController.getFiles);
router.get('/searchFile:name', fileController.searchFile);
// POST
router.post('/createFile', fileController.createFile);
router.post('/uploadFile', fileController.uploadFile);
// PUT
router.put('/updateFile:id', fileController.updateFile);
router.put('/files/:fileId/move/:folderId', fileController.moveFile);
// DELETE
router.delete('/deleteFile:id', fileController.deleteFile);

module.exports = router;
