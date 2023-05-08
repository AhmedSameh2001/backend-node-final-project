const express = require('express');
const router = express.Router();
const fileController = require('../controllers/FileController');

//GET
router.get('/', fileController.getFiles);
router.get('/:name', fileController.searchFile);
// POST
router.post('/', fileController.createFile);
router.post('/upload', fileController.uploadFile);
// put
router.put('/:id', fileController.updateFile);
// DELETE
router.delete('/:id', fileController.deleteFile);

module.exports = router;
