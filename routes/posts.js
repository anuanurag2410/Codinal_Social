const express=require('express');
const router=express.Router();

const postsController=require('../controller/posts_controller');

router.get('/posts',postsController.posts);

module.exports=router;