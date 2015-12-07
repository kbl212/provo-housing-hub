var mongoose = require('mongoose');
//var Listing = require('Listing');   //might have to add full path?
var Schema = mongoose.Schema;


var userSchema = new Schema({
    
    fullName: {type: String, required: true},
    displayName: {type: String, required: true},
   // listings: [{type: Listing, required: true, default: [] }],
    avatar: String,
    contactPhone: Number,
    contactEmail: String
});

module.exports = mongoose.model('User', userSchema);


//------POST EXAMPLE
/*
{
    "fullName": "Mark W",
    "displayName": "Mark",
    "avatar": "http://img2.wikia.nocookie.net/__cb20130623055406/clashofclans/images/1/1f/Archer_lvl1.jpg",
    "contactPhone": 8015555547,
    "contactEmail": "mark.wahl@gmail.com"
}
*/






/*module.exports = [    
        {
            name: "Kyle",
            username: "kbl212",
            favorites: [],
            listings: 6, //ref to a listing...,
            avatar: "http://www.withoutthesarcasm.com/wp-content/uploads/Level-6-Balloon.png?e3dcf6",
            contactNum: 3853124477,
            contactEmail: "kyle.lauritzen@gmail.com"
            
        }
];
        
*/
        
        
        
        



/*var userSchema = mongoose.Schema({
    name: String,
    username: String,
    favorites: Array,
    listings: Array (of REFS to listings),
    avatar: HTMLImageElement, //is this right?
    contactPhone: Number,
    contactEmail: String
});*/