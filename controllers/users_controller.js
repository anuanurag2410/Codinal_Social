const User=require('../models/user');

module.exports.profile = function(req, res){
    if (req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(User){
                return res.render('user_profile',{
                    title:'User Profile',
                    user:user
                })
            }
            return res.redirect('/user/sign-in');
        })
    }
    else{
        return res.redirect('/users/sign-in');
        }
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
    if (req.body.password!=req.body.confirm_password)
    {
        return res.redirect('back');
    }    
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('Error in Finding User in Signup!');
        return
    }

    if (!user){
        user.create(req.body,function(err,user){
            if(err){console.log('Error in Creating user while Signing UP!');
        return 
    }

        return res.redirect('/users/sign-in')

        })
    }

        else{
            return res.redirect('back');
        }
    

    });

}

//Signin and Create Session for the User
module.exports.createSession=function(req,res){
   //find the user is present in DB then make a cookie and send it to the server 
    //Find the user 
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('Error in Finding User in Signup!');
        return
    }
        //handle User Found
        if (user){
            //handle Password which don't match 
            if(user.password!=req.body.password){
                return res.redirect('back');
            }

            //handle session creation
            res.cookie('user_id',user.id)
            res.redirect('/user/profile');
        }
        else{
                //Handle user not found
                return res.redirect('back');
        }


    });

    

    

    


   
}