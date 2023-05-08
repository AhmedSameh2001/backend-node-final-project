const express = require('express');
const userController = require('../controllers/UserControllre');

const router = express.Router();

router.post('/create-account', userController.createAccount);
router.post('/login', userController.login);

module.exports = router;
