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
var port = 3000;
app.listen(port, function() {
    console.log(__dirname + '/public');
    console.log('connected to port ', port);
});