var User = require('../models/User');

module.exports = {
    
    getUserAccount: function(req,res,next) {
        
        if (req.query.faceId) {
            User.find({ faceId: req.query.faceId }).exec(function(err,result) {
                if (err) res.status(500).send(err);
                else res.send(result);
            });
        }
        else {
            User.find().exec(function(err, result) {
            
                if (err) return res.status(500).send(err);
                else res.send(result);
            });
        }
    },
    
    createNewAccount: function(req,res,next) {
        
        var newAccount = new User (req.body);
        newAccount.save(function(err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    },
    
    updateAccount: function(req,res,next) {
        
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
        
        else if (req.body.newEmail) {
            console.log("****THIS IS NEW EMAIL****", req.body.newEmail);
            var updatedUser = new User();
            var query = {faceId : req.body.faceId};
            User.findOneAndUpdate(query, {contactEmail: req.body.newEmail}, {upsert:true, new:true}, function(err, doc){
                if (err) return res.send(500, { error: err });
                else { 
                    return res.send(doc);
                }
            });
        }
        
        else if (req.body.newPhone) {
            console.log("****THIS IS NEW PHONE****", req.body.newPhone);
            var updatedUser = new User();
            var query = {faceId : req.body.faceId};
            User.findOneAndUpdate(query, {contactPhone: req.body.newPhone}, {upsert:true, new:true}, function(err, doc){
                if (err) return res.send(500, { error: err });
                else { 
                    return res.send(doc);
                }
            });
        }
        
    }
};
        
        
        
     /*   
        User.findOne({ faceId: req.body.faceId }).exec(function(err,result) {
            if (err) res.status(500).send(err);
            else {
                updatedUser = req.body.currUser;
                console.log(req.body.currUser);
                updatedUser.name = req.body.newName;
                
                updatedUser.save(function(err, result){
                    if (err)
                        throw err;
                    else {
                        console.log(result);
                        res.send(result);
                    }
            })
        };
    });

    } */



/*  getUserAccount: function(req,res,next) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].name == req.query.name) {
                res.status(200).json(users[i]);
            }
        }
    },
    createNewAccount: function(req,res,next) {
        users.push(req.body);          //if (err)...like if req.body clashes with User Schema...send                                                errMsg
        res.status(200).json(users);
        
    }
*/