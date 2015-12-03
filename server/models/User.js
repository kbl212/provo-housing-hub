var userSchema = mongoose.Schema({
    name: String,
    username: String,
    favorites: Array,
    listings: Array (of REFS to listings),
    avatar: HTMLImageElement, //is this right?
    contactPhone: Number,
    contactEmail: String
});