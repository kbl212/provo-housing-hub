var Listing = require('../models/Listing');
var User = require('../models/User');
module.exports = {
    
    getListings: function(req,res,next) {
        
        if (req.query.postNumber) {
            Listing.find({ postNumber: req.query.postNumber}).populate('postedBy').exec(function(err,result) {
                if (err) res.status(500).send(err);
                else res.send(result);
            });
        }
        
        else {
            Listing.find().exec(function(err, result) {
            
                if (err) return res.status(500).send(err);
                else res.send(result);
            });
        }
    },
    
    
    
    postNewListing: function(req,res,next) {
        
        var newListing = new Listing(req.body);
        
        newListing.save(function(err, result) {
            if (err) {
                console.log("error posting...", err);
                return res.status(500).send(err);
            }
            else {
                
                res.send(result);
                
            }
        });
    }
};
    


   /* 
            if (req.body.newName) {
            var updatedUser = new User();
            var query = {faceId : req.body.faceId};
            User.findOneAndUpdate(query, {name: req.body.newName}, {upsert:true, new:true}, function(err, doc){
                if (err) return res.send(500, { error: err });
                else { 
                    return res.send(doc);
                }
            });
        }
    
    
    
    */






































    /*
    getListings: function(req,res,next) {
        var newArr = [];
        console.log("here is req.query", req.query);
        if (req.query.postNumber === undefined)
            newArr = listings;
        else {
            
             for (var i = 0; i < listings.length; i++) {
                    console.log(req.query.postNumber);
                    if (listings[i].postNumber == req.query.postNumber)
                        newArr.push(listings[i]);
                }
                    console.log("this is newArr: ", newArr);

        }
        res.status(200).json(newArr);
    },
    
    
    postNewListing: function(req,res,next) {
        req.body.price = Number(req.body.price);
        listings.push(req.body);
        res.status(200).json(listings);
    },*/