var User = require('../models/User');

module.exports = {
    
    getUserAccount: function(req,res,next) {
        
        if (req.query.displayName) {
            User.find({ displayName: req.query.displayName }).exec(function(err,result) {
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
    
    updateAccountName: function(req,res,next) {
        
        var updatedUser = new User();
        var query = {faceId : req.body.faceId};
      //  req.newData.name = req.body.newName;
        User.findOneAndUpdate(query, /*req.newData*/ {name: req.body.newName}, {upsert:true, new:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    else { 
       // req.user = doc;
        return res.send(doc);
         }
        });
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