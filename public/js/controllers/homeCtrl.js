var app = angular.module('provo-housing-hub');

app.controller('homeCtrl', function($scope, homeService) {
    
    $scope.listView = "active-view";
    $scope.galleryView = "inactive-view";
    $scope.sortType = "-postNumber";
    $scope.ordering = "-";
    
    $scope.changeSortType = function(typeIn) {
        if ($scope.ordering === "-") {
            $scope.ordering = "+";
        }
        else {
            $scope.ordering = "-";
        }
        $scope.sortType = ($scope.ordering + typeIn);
    }
    
    $scope.getCurrentListing = function() {
        $scope.currListing = homeService.getCurrListing();
    }
    
    $scope.getCurrentListing();       //*****RUNS at page load
    
    $scope.getOneListing = function(postNumberIn) {
        homeService.getListings(postNumberIn).then(function(response) {
          //  $scope.currListing = response;
            $scope.getCurrentListing();


        });
    }
    
    $scope.getListings = function() {
       homeService.getListings().then(function(response) {
           $scope.getCurrentListing();
           $scope.listings = response;
           for (var i = 0; i < $scope.listings.length; i++) {
               $scope.listings[i].datePosted = (homeService.getCurrDate($scope.listings[i].datePosted));
           }
           
       });
    };
    
    
    $scope.getListings();  //*****RUNS at page load
    
    $scope.getNewPostNum = function() {
        var highestSoFar = 0;
        for (var i = 0; i < $scope.listings.length; i++) {
            if ($scope.listings[i].postNumber > highestSoFar)
                highestSoFar = $scope.listings[i].postNumber;
        }
        return (highestSoFar + 1);
    }
    
        $scope.newListing = function(titleIn, descIn, addressIn, priceIn, bedsIn, bathsIn, sqFootageIn, imageIn, petsIn, emailIn, phoneIn, wdIn, noSmokeIn, byuIn, parkingIn, furnishedIn) {
            alert("Post successful!");
            var newPostNum = $scope.getNewPostNum();
            
            
    homeService.NewListing(titleIn, descIn, addressIn, priceIn, bedsIn, bathsIn, sqFootageIn, imageIn, petsIn, emailIn, phoneIn, wdIn, noSmokeIn, byuIn, parkingIn, furnishedIn, newPostNum).then(function(response) {
        console.log("this is POST response: ", response);
    });

    }

});