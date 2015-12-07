var app = angular.module('provo-housing-hub');


app.service('homeService', function($http) {
    var currListing = {};
    this.getListings = function(postNumberIn) {
        if (postNumberIn === undefined) {
            return $http.get('/api/listings').then(function(response) {
                            console.log(response.data);

                return response.data;
            
            });
        }
        else {
            return $http.get('/api/listings?postNumber=' + postNumberIn).then(function(response) {
                currListing = response.data[0];
                return response.data[0];
            });
        }
        
    }
    
    this.getCurrListing = function() {
        return currListing;
    }
    
 /*   this.getOneListing = function(postNumber) {
        return $http.get('/api/listings?postNumber=' + postNumber).then(function(response) {
            console.log(response.data);
            return response.data;
        });
    }
*/
    
    this.getCurrDate = function(dateIn) {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var postDate = dateIn.split('-');
        console.log(postDate);
        var month = postDate[1];
        var day = postDate[2].slice(0,2);
        var returnDate = months[month-1] + ' ' + day;
        return returnDate;
    };
    
        this.NewListing = function(titleIn, descIn, addressIn, priceIn, bedsIn, bathsIn, sqFootageIn, imageIn, petsIn, emailIn, phoneIn, wdIn, noSmokeIn, byuIn, parkingIn, furnishedIn, postNumberIn){
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
        if (imageIn === undefined)
            imageIn = "no-image-available.png";
        if (descIn === undefined)
            descIn = "(no description available)";
        if (titleIn === undefined)
            titleIn = "(no title available)";
        if (bedsIn === undefined)
            bedsIn = 0;
        if (bathsIn === undefined)
            bathsIn = 0;
        
        //make sure this all matches the backend SCHEMA, and that all required info is here, before actually make a NewListing
        var newListingObj = {
        title: titleIn,
        description: descIn,
        address: addressIn,
        price: priceIn,
        beds: bedsIn,
        baths: bathsIn,
        sqFootage: sqFootageIn,
        picture: imageIn,
        pets: petsIn,
        canUseEmail: emailIn,
        canUsePhone: phoneIn,
        wd: wdIn,
        smokingAllowed: noSmokeIn,
        byuApproved: byuIn,
        parking: parkingIn,
        furnished: furnishedIn,
       // datePosted: this.getCurrDate(),
        postNumber: postNumberIn
        }
        return $http.post('/api/listings', newListingObj).then(function(response) {
            return response.data;
        });
    }
});