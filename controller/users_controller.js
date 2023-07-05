module.exports.profile=function(req,res){
    res.end('<h1>User Profile</h1>');
};


//Render the SignUP Page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"Codinal| Sign Up"
    })
};


//Sign In PAge
module.exports.signUp=function(req,res){
    return res.render('user_sign_in',{
        title:"Codinal| Sign In"
    })
};