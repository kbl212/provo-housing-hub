var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');




var app = express();

app.use(bodyParser.json());












var port = 3000;
app.listen(port, function() {
    
    console.log('connected to port ', port);
});