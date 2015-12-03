var users = require('../models/User');

module.exports = {
    
    getUserAccount: function(req,res,next) {
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
}