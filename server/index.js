////////////////
//DEPENDENCIES//
////////////////
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('keys');
var session = require('express-session');


///////////////
//CONTROLLERS//
///////////////
var listingCtrl = require('./controllers/listingCtrl');
var userCtrl = require('./controllers/userCtrl');


//////////////
//MIDDLEWARE//
//////////////
var app = express();

var requireAuth = function(req,res,next) {
    if (req.isAuthenticated()) {
        console.log('AUTHENTICATED USER!');
        return next();
    }
    return res.redirect('/auth/facebook');
};

app.use(session({secret: "31415926535"}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy ({  // 'new' keyword, use PaschalCase  ---capitalize every word
    clientID: '1626783207571999',                                //REPLACE THESE KEY LITERALS WITH keys.facebookID...keys.etc
    clientSecret: '496eb14e955d0a6956fa2db8747bedd2',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
}, function(token, refreshToken, profile, done) {
    console.log("this is profile id: ", profile.id);
  return done(null, profile);
}));




app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));

/////////////
//ENDPOINTS//
/////////////

app.get('/api/listings', requireAuth, listingCtrl.getListings);

app.post('/api/listings', listingCtrl.postNewListing);

app.post('/api/account', userCtrl.createNewAccount);
app.get('/api/account', userCtrl.getUserAccount);

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    
    successRedirect: '/',
    failureRedirect: '/login'
}), function(req,res){
    console.log(req.session.user);
});

passport.serializeUser(function(user, done) {           //function called to allow to you MODIFY before putting data on the session
    done(null, user);
    /*
        User.find({facebookId: user.profile.id},
            function(results){
            
            if(!results)
                ...
            else {
                done(null, results.id);
            }
    */

});

passport.deserializeUser(function(obj, done) {          //after data is pulled from session
    done(null, obj);
});


app.get('/me', requireAuth/*used as middleware here*/, function(req,res) {
    
    var currentLoggedInUserOnSession = req.user;
    
    res.send(currentLoggedInUserOnSession);
    
});

///////////////
//CONNECTIONS//
///////////////


//----------------server on port 3000
var port = 3000;
app.listen(port, function() {
    console.log('connected to port ', port);
});


//----------------mongoDB on port 27017
var mongoUri = "mongodb://localhost:27017/provo-housing-hub";
mongoose.connect(mongoUri, function(err) {
    if (err) throw err;
});

mongoose.connection.once('open', function() {
    console.log('connected to mongoDb at: ', mongoUri);
});