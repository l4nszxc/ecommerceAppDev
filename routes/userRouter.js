const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/userController');

router.get('/', usercontroller.home); 
router.get('/login', usercontroller.login);
router.get('/register', usercontroller.register);




module.exports = router;
