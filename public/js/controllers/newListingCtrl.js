var app = angular.module('provo-housing-hub');


app.controller('newListingCtrl', function($scope, newListingService) {
    
    $scope.newListing = function(titleIn, descIn, addressIn, priceIn, bedsIn, bathsIn, sqFootageIn, imageIn, petsIn, emailIn, phoneIn, wdIn, noSmokeIn, byuIn, parkingIn, furnishedIn) {
        
       var testingVar = newListingService.NewListing(titleIn, descIn, addressIn, priceIn, bedsIn, bathsIn, sqFootageIn, imageIn, petsIn, emailIn, phoneIn, wdIn, noSmokeIn, byuIn, parkingIn, furnishedIn);
        
        console.log(testingVar);
    }
    
    
});