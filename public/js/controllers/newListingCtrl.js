var app = angular.module('provo-housing-hub');


app.controller('newListingCtrl', function($scope, newListingService) {
    
    $scope.newListing = function(titleIn, addressIn, priceIn, bedsIn, bathsIn, imageIn, petsIn, emailIn, phoneIn, wdIn, noSmokeIn, byuIn, parkingIn, furnishedIn) {
        
       var testingVar = newListingService.NewListing(titleIn, addressIn, priceIn, bedsIn, bathsIn, imageIn, petsIn, emailIn, phoneIn, wdIn, noSmokeIn, byuIn, parkingIn, furnishedIn);
        
        console.log(testingVar);
    }
    
    
});