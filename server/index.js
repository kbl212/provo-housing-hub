////////////////
//DEPENDENCIES//
////////////////
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


///////////////
//CONTROLLERS//
///////////////
var listingCtrl = require('./controllers/listingCtrl');
var userCtrl = require('./controllers/userCtrl');


//////////////
//MIDDLEWARE//
//////////////
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));

/////////////
//ENDPOINTS//
/////////////

app.get('/api/listings', listingCtrl.getListings);

app.post('/api/listings', listingCtrl.postNewListing);

app.post('/api/account', userCtrl.createNewAccount);
app.get('/api/account', userCtrl.getUserAccount);

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