var listingSchema = mongoose.Schema({
    
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
});

//module.exports...model.