const express=require('express');

const router=express.Router();


const usersController=require('../controller/users_controller');
const User = require('../models/user');
router.get('/profile',usersController.profile);

router.get('/sign-up',usersController.signUp);

router.get('/sign-in',usersController.signIn);

module.exports=router;
