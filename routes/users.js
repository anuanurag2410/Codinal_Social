const express=require('express');

const router=express.Router();


const usersController=require('../controller/users_cotroller');
router.get('/profile',usersController.profile);



module.exports=router;
