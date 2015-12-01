var app = angular.module('provo-housing-hub');



app.controller('homeCtrl', function($scope) {
    
    $scope.listView = "active-view";
    $scope.galleryView = "inactive-view";

    $scope.resizePics = function(picture) {
        //USE AJAXBLENDER SITE (in bookmarks) for algorithm / instructions
    };
    
    $scope.listings = [
        
        {
            picture: "http://img.lily-rabe.com/images/www.seekroommates.com/wp-content/uploads/2012/04/apartment-3.jpg",
            price: 542,
            beds: 3.5,
            baths: 1.5,
            title: "New apartment on 5th! get it now!",
            datePosted: "Nov 30"
        },
        
        {
            picture: "https://upload.wikimedia.org/wikipedia/commons/2/26/Southmoor_Apartment_Hotel.jpg",
            price: 300,
            beds: 2.0,
            baths: 1,
            title: "just need to get rid of my contract...halppp",
            datePosted: "Nov 19"

        },
        
        {
            picture: "http://img.lily-rabe.com/images/www.seekroommates.com/wp-content/uploads/2012/04/apartment-3.jpg",
            price: 200,
            beds: 3,
            baths: 1.5,
            title: "dirt cheap apartment, gonna go fast!",
            datePosted: "Nov 26"
        },
        
        {
            picture: "http://img.lily-rabe.com/images/www.seekroommates.com/wp-content/uploads/2012/04/apartment-3.jpg",
            price: 542,
            beds: 3.5,
            baths: 1.5,
            title: "New apartment on 5th! get it now!",
            datePosted: "Nov 30"
        },
        
        {
            picture: "http://img.lily-rabe.com/images/www.seekroommates.com/wp-content/uploads/2012/04/apartment-3.jpg",
            price: 300,
            beds: 2.0,
            baths: 1,
            title: "just need to get rid of my contract...halppp",
            datePosted: "Nov 19"

        },
        
        {
            picture: "http://img.lily-rabe.com/images/www.seekroommates.com/wp-content/uploads/2012/04/apartment-3.jpg",
            price: 200,
            beds: 3,
            baths: 1.5,
            title: "dirt cheap apartment, gonna go fast!",
            datePosted: "Nov 26"
        }
    ];
    
});