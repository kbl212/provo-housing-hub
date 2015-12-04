var listings = require('../models/Listing');

module.exports = {
    
    getListings: function(req,res,next) {
        var newArr = [];
        if (req.query.postNumber === undefined)
            newArr = listings;
        else {
            
             for (var i = 0; i < listings.length; i++) {
                    console.log(req.query.postNumber);
                    if (listings[i].postNumber == req.query.postNumber)
                        newArr.push(listings[i]);
                }
        }
        res.status(200).json(newArr);
    },
    
    
    
    
    postNewListing: function(req,res,next) {
        req.body.price = Number(req.body.price);
        listings.push(req.body);
        res.status(200).json(listings);
    },
}