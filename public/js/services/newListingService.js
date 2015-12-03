var app = angular.module('provo-housing-hub');


app.service('newListingService', function($http) {
    
    this.NewListing = function(titleIn, addressIn, priceIn, bedsIn, bathsIn, imageIn, petsIn, emailIn, phoneIn, wdIn, noSmokeIn, byuIn, parkingIn, furnishedIn) {
        
        if (petsIn === undefined)
            petsIn = false;
        if (emailIn === undefined)
            emailIn = false;
        if (phoneIn === undefined)
            phoneIn = false;
        if (wdIn === undefined)
            wdIn = false;
        if (noSmokeIn === undefined)
            noSmokeIn = false;
        if (byuIn === undefined)
            byuIn = false;
        if (parkingIn === undefined)
            parkingIn = false;
        if (furnishedIn === undefined)
            furnishedIn = false;
        
        //make sure this all matches the backend SCHEMA, and that all required info is here, before actually make a NewListing
        
        this.title = titleIn;
        this.address = addressIn;
        this.price = priceIn;
        this.beds = bedsIn;
        this.baths = bathsIn;
        this.image = imageIn;
        this.pets = petsIn;
        this.canUseEmail = emailIn;
        this.canUsePhone = phoneIn;
        this.wd = wdIn;
        this.noSmoke = noSmokeIn;
        this.byuApproved = byuIn;
        this.parking = parkingIn;
        this.furnished = furnishedIn;
        return this;
    }
});