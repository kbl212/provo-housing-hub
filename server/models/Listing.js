var mongoose = require('mongoose');
//var User = require('User');
var Schema = mongoose.Schema;



// ***default datePosted is set to Date.now...

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
   // postedBy: {ref: 'User', required: true}
});

module.exports = mongoose.model('Listing', listingSchema);



//-----------------------POST EXAMPLE
/*
{
    "picture": "http://img2.wikia.nocookie.net/__cb20130622063711/clashofclans/images/4/42/Barbarian_lvl1.jpg",
    "price": 333,
    "beds": 4,
    "baths": 2,
    "title": "Coolest. Unreal. Housing. Ever.",
    "description": "haha yeeee brah totally rad",
    "address": "333w 333e",
    "sqFootage": 2929,
    "pets": true,
    "canUseEmail": true,
    "canUsePhone": true,
    "wd": false,
    "smokingAllowed": false,
    "byuApproved": true,
    "parking": true,
    "furnished": true
}

*/










































/*
module.exports = [
            
        {
            picture: "http://img.lily-rabe.com/images/www.seekroommates.com/wp-content/uploads/2012/04/apartment-3.jpg",
            price: 542,
            beds: 3.5,
            baths: 1.5,
            title: "New apartment on 5th! get it now!",
            datePosted: "Nov 22",
            postNumber: 3,
            description: "This is just a sample description. Normally, people could write whatever they want here, in order to advertise the housing they are offering. For example, information on security deposits, when the apartment would be available for rent, etc.",
            address: "457 W 500 N",
            sqFootage: "2000",
            pets: true,
            canUseEmail: true,
            canUsePhone: false,
            wd: true,
            noSmoke: true,
            byuApproved: true,
            parking: true,
            furnished: true
        },
        
        {
            picture: "https://upload.wikimedia.org/wikipedia/commons/2/26/Southmoor_Apartment_Hotel.jpg",
            price: 300,
            beds: 2.0,
            baths: 1,
            title: "just need to get rid of my contract...halppp",
            datePosted: "Nov 19",
            postNumber: 1,
            description: "This is just a sample description. Normally, people could write whatever they want here, in order to advertise the housing they are offering. For example, information on security deposits, when the apartment would be available for rent, etc.",
            address: "457 W 500 N",
            sqFootage: "2000",
            pets: true,
            canUseEmail: true,
            canUsePhone: false,
            wd: true,
            noSmoke: true,
            byuApproved: true,
            parking: true,
            furnished: true

        },
        
        {
            picture: "20151201_222522.jpg",
            price: 235,
            beds: 3,
            baths: 1.5,
            title: "close to campus, great roommates",
            datePosted: "Dec 1",
            postNumber: 6,
            description: "This is just a sample description. Normally, people could write whatever they want here, in order to advertise the housing they are offering. For example, information on security deposits, when the apartment would be available for rent, etc.",
            address: "340 E 600 N",
            sqFootage: "2000",
            pets: true,
            canUseEmail: true,
            canUsePhone: false,
            wd: false,
            noSmoke: false,
            byuApproved: true,
            parking: true,
            furnished: true
        },
        
        {
            picture: "http://cdn.freshome.com/wp-content/uploads/2008/03/apartment.jpg",
            price: 542,
            beds: 3.5,
            baths: 1.5,
            title: "Open single room at The Village!",
            datePosted: "Nov 30",
            postNumber: 5,
            description: "This is just a sample description. Normally, people could write whatever they want here, in order to advertise the housing they are offering. For example, information on security deposits, when the apartment would be available for rent, etc.",
            address: "457 W 500 N",
            sqFootage: "2000",
            pets: true,
            canUseEmail: true,
            canUsePhone: false,
            wd: true,
            noSmoke: true,
            byuApproved: true,
            parking: true,
            furnished: true
        },
        
        {
            picture: "https://upload.wikimedia.org/wikipedia/commons/0/04/Bretnor_Apartments_-_Portland_Oregon.jpg",
            price: 300,
            beds: 2.0,
            baths: 1,
            title: "you won't find a better deal on an apartment!",
            datePosted: "Nov 19",
            postNumber: 2,
            description: "This is just a sample description. Normally, people could write whatever they want here, in order to advertise the housing they are offering. For example, information on security deposits, when the apartment would be available for rent, etc.",
            address: "457 W 500 N",
            sqFootage: "2000",
            pets: true,
            canUseEmail: true,
            canUsePhone: false,
            wd: true,
            noSmoke: true,
            byuApproved: true,
            parking: true,
            furnished: true

        },
        
        {
            picture: "http://cdn2.content.compendiumblog.com/import_uploads/a5d2fdfa-ecda-434a-b7c8-b0d555e9a4ed/7ff26e1dacbfdf43dd2b22baaed84793/Renting-An-Apartment.jpg",
            price: 200,
            beds: 3,
            baths: 1.5,
            title: "dirt cheap apartment, gonna go fast!",
            datePosted: "Nov 26",
            postNumber: 4,
            description: "This is just a sample description. Normally, people could write whatever they want here, in order to advertise the housing they are offering. For example, information on security deposits, when the apartment would be available for rent, etc.",
            address: "457 W 500 N",
            sqFootage: "2000",
            pets: true,
            canUseEmail: true,
            canUsePhone: false,
            wd: true,
            noSmoke: true,
            byuApproved: true,
            parking: true,
            furnished: true
        }
];
*/
































/*var listingSchema = mongoose.Schema({
    
    address: String,
    price: Number,
    postDate: Date,
    beds: Number,
    baths: Number,
    pictures: Array,   //array of amazon s3 images?
    sqFootage: Number,
    contactNumber: Number, //change this to be a ref to a User phoneNumber
    contactEmail: String, //change this to be a ref to a User Email
    description: String,
    title: String,
    pets: Boolean,
    canUseEmail: Boolean,
    canUsePhone: Boolean,
    wd: Boolean,            //wd = washer/dryer
    noSmoke: Boolean,
    byuApproved: Boolean,
    parking: Boolean,
    furnished: Boolean
}); */

//module.exports...model.