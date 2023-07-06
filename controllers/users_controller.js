module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}


// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}


//get the signup data 
module.exports.create=function(req,res){
    //Todo
}

//Signin and Create Session for the User
module.exports.createSession=function(req,res){
    //To DO 
}