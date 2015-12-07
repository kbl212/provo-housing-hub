var User = require('../models/User');

module.exports = {
    
    getUserAccount: function(req,res,next) {
        
        
        User.find().exec(function(err, result) {
            console.log(result);
            
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    },
    
    createNewAccount: function(req,res,next) {
        
        var newAccount = new User (req.body);
        newAccount.save(function(err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
};


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