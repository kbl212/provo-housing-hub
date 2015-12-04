var app = angular.module('provo-housing-hub');


app.service('homeService', function($http) {
    var currListing = {};
    this.getListings = function(postNumberIn) {
        if (postNumberIn === undefined) {
            return $http.get('/api/listings').then(function(response) {
                console.log(response);
                return response.data;
            
            });
        }
        else {
            console.log("function started...", postNumberIn);
            return $http.get('/api/listings?postNumber=' + postNumberIn).then(function(response) {
                console.log("this is oneListing response: ", response.data[0]);
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
    
    this.getCurrDate = function() {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var today = new Date();
        var month = today.getMonth();
        var day = today.getDate();
        var postDate = months[month] + ' ' + day;
        console.log("this is postDate", postDate);
        return postDate;
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
        
        //make sure this all matches the backend SCHEMA, and that all required info is here, before actually make a NewListing
        var newListingObj = {
        title: titleIn,
        address: addressIn,
        price: priceIn,
        beds: bedsIn,
        baths: bathsIn,
        sqFootage: sqFootageIn,
        image: imageIn,
        pets: petsIn,
        canUseEmail: emailIn,
        canUsePhone: phoneIn,
        wd: wdIn,
        noSmoke: noSmokeIn,
        byuApproved: byuIn,
        parking: parkingIn,
        furnished: furnishedIn,
        datePosted: this.getCurrDate(),
        postNumber: postNumberIn
        }
        return $http.post('/api/listings', newListingObj).then(function(response) {
            return response.data;
        });
    }
});