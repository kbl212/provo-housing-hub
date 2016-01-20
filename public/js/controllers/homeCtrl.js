var app = angular.module('provo-housing-hub');

app.controller('homeCtrl', function($scope, homeService, imagesService) {
    
    $scope.listView = "inactive-view";
    $scope.galleryView = "active-view";
    $scope.thumbnailView = "inactive-view";
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
    

    $scope.storeNewImage = function() {    
    
       return imagesService.storeImage($scope.fileread, $scope.fileName)
          .then(function (result) {
           // console.log(result.data.Location);
            $scope.currImageToPost = result.data.Location;
            return result.data.Location;
          //  scope.images.unshift(result.data);
          })
          .catch(function (err) {
            console.error(err);
          });
    };
    
    $scope.newListing = function(titleIn, descIn, addressIn, priceIn, bedsIn, bathsIn, sqFootageIn, imageIn, petsIn, emailIn, phoneIn, wdIn, noSmokeIn, byuIn, parkingIn, furnishedIn, currUserId) {
         //   console.log(currUserId);
            alert("Post successful!");
            var newPostNum = $scope.getNewPostNum();
        
         //   $scope.storeNewImage(); probably don't need the line below this either;
         //   imageIn = $scope.currImageToPost;
         //   console.log("this is imageIn: ", imageIn);
        
    $scope.storeNewImage()
    .then(function(imgURLResponse){
        console.log("THIS IS IMAGE RESPONSE FROM AMAZON: ", imgURLResponse);
        homeService.NewListing(titleIn, descIn, addressIn, priceIn, bedsIn, bathsIn, sqFootageIn, imgURLResponse, petsIn, emailIn, phoneIn, wdIn, noSmokeIn, byuIn, parkingIn, furnishedIn, newPostNum, currUserId)})
      .then(function(response) {
        console.log("this is POST response: ", response);
    }).then(function(response) {
        $scope.getListings();              //***************don't need this...?
    });

}
    
    
    



});