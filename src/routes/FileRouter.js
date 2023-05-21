const express = require('express');
const multer = require('multer')
const router = express.Router();
const fileController = require('../controllers/FileController');

const upload = multer({
  storage : multer.diskStorage({
      destination : (req , file , cd )=>{
          cd(null , 'images')
      }, 
      filename : (req, file , cd)=>{
          cd(null , Date.now() + '-' + file.originalname)

      }
  })
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
