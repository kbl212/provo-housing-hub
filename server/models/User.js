var mongoose = require('mongoose');
//var Listing = require('Listing');   //might have to add full path?
var Schema = mongoose.Schema;


var userSchema = new Schema({
    
   // fullName: {type: String, required: true},
   // displayName: {type: String, required: true},
   // listings: [{type: Listing, required: true, default: [] }],
    avatar: String,
    contactPhone: String,
    contactEmail: String,
    faceId: String,
    token: String,
    name: String

});

module.exports = mongoose.model('User', userSchema);