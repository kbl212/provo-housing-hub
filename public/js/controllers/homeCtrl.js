var app = angular.module('provo-housing-hub');



app.controller('homeCtrl', function($scope) {
    
    $scope.listView = "active-view";
    $scope.galleryView = "inactive-view";
    $scope.sortType = "-postNumber";
    $scope.ordering = "-";
    $scope.currListing = "There's nothing here...";
    
    $scope.changeSortType = function(typeIn) {
        console.log("this is $scope.ordering= " + $scope.ordering);
        if ($scope.ordering === "-") {
            console.log(1);
            $scope.ordering = "+";
        }
        else {
            console.log(2);
            $scope.ordering = "-";
        }
        console.log("final = " + $scope.ordering + typeIn);
        $scope.sortType = ($scope.ordering + typeIn);
    }
    
    $scope.getCurrListing = function(postNumber) {
            console.log($scope.currListing);

        alert("currentPostNumber: " + postNumber);
        for (var i = 0; i < $scope.listings.length; i++) {
            if ($scope.listings[i].postNumber === postNumber) {
                $scope.currListing = $scope.listings[i];
                $scope.testListing = $scope.currListing;
            console.log($scope.currListing);

            }
        }
        alert("not found...");
    }
    
    
    $scope.listings = [
        
        {
            picture: "http://img.lily-rabe.com/images/www.seekroommates.com/wp-content/uploads/2012/04/apartment-3.jpg",
            price: 542,
            beds: 3.5,
            baths: 1.5,
            title: "New apartment on 5th! get it now!",
            datePosted: "Nov 22",
            postNumber: 3
        },
        
        {
            picture: "https://upload.wikimedia.org/wikipedia/commons/2/26/Southmoor_Apartment_Hotel.jpg",
            price: 300,
            beds: 2.0,
            baths: 1,
            title: "just need to get rid of my contract...halppp",
            datePosted: "Nov 19",
            postNumber: 1

        },
        
        {
            picture: "20151201_222522.jpg",
            price: 235,
            beds: 3,
            baths: 1.5,
            title: "close to campus, great roommates",
            datePosted: "Dec 1",
            postNumber: 6
        },
        
        {
            picture: "http://cdn.freshome.com/wp-content/uploads/2008/03/apartment.jpg",
            price: 542,
            beds: 3.5,
            baths: 1.5,
            title: "Open single room at The Village!",
            datePosted: "Nov 30",
            postNumber: 5
        },
        
        {
            picture: "https://upload.wikimedia.org/wikipedia/commons/0/04/Bretnor_Apartments_-_Portland_Oregon.jpg",
            price: 300,
            beds: 2.0,
            baths: 1,
            title: "you won't find a better deal on an apartment!",
            datePosted: "Nov 19",
            postNumber: 2

        },
        
        {
            picture: "http://cdn2.content.compendiumblog.com/import_uploads/a5d2fdfa-ecda-434a-b7c8-b0d555e9a4ed/7ff26e1dacbfdf43dd2b22baaed84793/Renting-An-Apartment.jpg",
            price: 200,
            beds: 3,
            baths: 1.5,
            title: "dirt cheap apartment, gonna go fast!",
            datePosted: "Nov 26",
            postNumber: 4
        }
    ];
    
});