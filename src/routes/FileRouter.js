const express = require('express');
const multer = require('multer')
const router = express.Router();
const fileController = require('../controllers/FileController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'image/')
        },
        filename: function (req, file, cb) {
            cb(null, Date.now()+ "_" + file.originalname)
            }
})
const upload = multer({
  storage : storage
})

//GET
router.get('/', fileController.getFiles);
router.get('/searchFile', fileController.searchFile);
// POST
router.post('/createFile', fileController.createFile);
router.post('/uploadFile', upload.single('image'),fileController.uploadFile);
// PUT
router.put('/updateFile/:id', fileController.updateFile);
router.put('/file/:fileId/moveFile', fileController.moveFile);
// DELETE
router.delete('/deleteFile/:id', fileController.deleteFile);

module.exports = router;
