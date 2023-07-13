const passport=require('passport');
const LocalStratergy=require('passport-local').Strategy;
const User=require('../models/user');



passport.use(new LocalStratergy({
usernameField:'email'
    
},function(email,password,done){
    //find the user and establish the identy
    User.findOne({email:email},function(err,user){
        if (err){
                console.log('Error in Finding User --> Passport ');
                return done(err);
        }
        if (!user || user.password !=password){
            console,log('Invalid Username/Password')
            return done(null,false);
        }

        return done(null,user);
    });
}


));

//Seriealizing the user to decise 2which key is to be kept in the cookies 
passport.serializeUser(function(user,done){
   done(null,user.id); 
});


//deserilising the user from the key in the cookies 
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
if (err){
    console.log("eror in finding user --> Passport ");

}
    return done(null,user);    
});

});

module.exports=passport;