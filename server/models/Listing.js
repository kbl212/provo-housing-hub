var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./User');




var listingSchema = new Schema({
    
    picture: {type: String},
    price: {type: Number, required: true},
    beds: {type: Number, required: true},
    baths: {type: Number, required: true},
    title: {type: String, required: true},
    datePosted: {type: Date, default: Date.now, required: true},
    description: {type: String, required: true},
    address: {type: String, required: true},
    sqFootage: {type: Number},
    pets: {type: Boolean, required: true},
    canUseEmail: {type: Boolean, required: true},
    canUsePhone: {type: Boolean, required: true},
    wd: {type: Boolean, required: true},
    smokingAllowed: {type: Boolean, required: true},
    byuApproved: {type: Boolean, required: true},
    parking: {type: Boolean, required: true},
    furnished: {type: Boolean, required: true},
    postNumber: {type: Number, required: true},
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}  //one single User
    
});

module.exports = mongoose.model('Listing', listingSchema);