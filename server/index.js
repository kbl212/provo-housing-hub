////////////////
//DEPENDENCIES//
////////////////
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
//var keys = require('./keys');
var session = require('express-session');
var User = require('./models/User');


///////////////
//CONTROLLERS//
///////////////
var listingCtrl = require('./controllers/listingCtrl');
var userCtrl = require('./controllers/userCtrl');
var imageCtrl = require('./controllers/imageCtrl');


//////////////
//MIDDLEWARE//
//////////////
var app = express();

var requireAuth = function(req,res,next) {
    if (req.isAuthenticated()) {
        console.log('AUTHENTICATED USER!');
        return next();
    }
    console.log("nope...");
    return res.redirect('/auth/facebook');
};

//express-session, keys, passport, passport-facebook

app.use(session({secret: "31415926535",
                saveUninitialized: true,
                resave: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy ({  // 'new' keyword, use PaschalCase  ---capitalize every word
    clientID: process.env.faceClientID,//keys.facebookAuth.clientID,           
    clientSecret: process.env.faceClientSecret, //keys.facebookAuth.clientSecret,
    callbackURL: process.env.faceCallbackURL //keys.facebookAuth.callbackURL
}, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
        User.findOne({'faceId' : profile.id}, function(err, user){
            if (err)
                return done(err);
            if (user)
                return done(null, user)   //no error, User
                
            else {                        //creates new User
                var newUser = new User();
                newUser.faceId = profile.id;
                newUser.token = accessToken;
                newUser.name = profile.displayName;
                newUser.avatar = "http://www.clker.com/cliparts/U/s/X/0/7/h/white-silhouette-hi.png";
                newUser.contactEmail = "N/A";
                newUser.contactPhone = "N/A";
               // console.log("this is newUser: ", newUser);

                newUser.save(function(err){
                    if (err)
                        throw err;
                    return done(null, newUser);
                })
            };
        });
    });
}));




app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use(express.static(__dirname + '/../public'));

/////////////
//ENDPOINTS//
/////////////

app.post('/api/newimage', imageCtrl.saveImage);

app.get('/api/listings', listingCtrl.getListings);

app.post('/api/listings', listingCtrl.postNewListing);

app.post('/api/account', userCtrl.createNewAccount);
app.get('/api/account', userCtrl.getUserAccount);
app.put('/api/account', userCtrl.updateAccount);


app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    
    successRedirect: '/',
    failureRedirect: '/account'
}), function(req,res){
    console.log(req.session.user);
});

passport.serializeUser(function(user, done) {           //function called to allow to you MODIFY before putting data on the session
    console.log('stuff...', user);
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
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('connected to port ', port);
});


//----------------mongoDB on port 27017
var mongoUri = process.env.MONGOLAB_URI || "mongodb://localhost:27017/provo-housing-hub";
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost:27017/provo-housing-hub", function(err) {
    if (err) throw err;
});

mongoose.connection.once('open', function() {
    console.log('connected to mongoDb at: ', mongoUri);
});