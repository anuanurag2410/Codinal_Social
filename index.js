const express=require('express');
const app=express();
const port = 8000;
const path=require('path');

//use express router
app.use('/',require('./routes/index'));

//Setup of View Engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));

//Firing the Express Server
app.listen(port,function(err){
if (err){
    console.log('Error in running the Server ',err);
}
console.log('YUP!!The Express Server is Running on Port:',port);
}); 