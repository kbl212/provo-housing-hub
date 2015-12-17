var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Listing = require('./Listing');


var userSchema = new Schema({
    
    avatar: String,
    contactPhone: String,
    contactEmail: String,
    faceId: {type: String, required:true},
    token: String,
    name: String,
    listings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Listing', default: [], required:true}]  
    //"Many" listings

});

module.exports = mongoose.model('User', userSchema);