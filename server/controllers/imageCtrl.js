var AWS = require('aws-sdk');
//var keys = require('../keys.js');

// Hard amazon aws config
AWS.config.update({
    accessKeyId: process.env.s3accessKeyId, 
    secretAccessKey: process.env.s3secretAccessKey,
    region: process.env.s3region
});

var s3 = new AWS.S3();

var exports = module.exports = {};


exports.saveImage = function (req, res) {
    buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

    var bucketName = 'phh-listing-image/';
    var params = {
        Bucket: bucketName,
        Key: req.body.imageName,
        Body: buf,
        ContentType: 'image/' + req.body.imageExtension,
        ACL: 'public-read'
    };

    s3.upload(params, function (err, data) {
        if (err) return res.status(500).send(err);
        // TODO: save data to mongo
        else
            res.json(data);
    });
}