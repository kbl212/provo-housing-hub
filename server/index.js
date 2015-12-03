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

var app = express();

//////////////
//MIDDLEWARE//
//////////////
app.use(bodyParser.json());

/////////////
//ENDPOINTS//
/////////////

app.get('/api/listings', listingCtrl.getListings);

app.post('/api/listings', listingCtrl.postNewListing);

/*app.post('/api/account', userCtrl.createNewAccount);
app.post('api/account', userCtrl.getUserAccount);*/







///////////////
//CONNECTIONS//
///////////////
var port = 3000;
app.listen(port, function() {
    
    console.log('connected to port ', port);
});