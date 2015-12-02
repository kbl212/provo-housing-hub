var app = angular.module('provo-housing-hub');


app.controller('accountCtrl', function($scope) {
    
    $scope.users = [
        
        {
            name: "Kyle",
            username: "kbl212",
            favorites: [],
            listings: 6, //ref to a listing...,
            avatar: "http://www.withoutthesarcasm.com/wp-content/uploads/Level-6-Balloon.png?e3dcf6",
            contactNum: 3853124477,
            contactEmail: "kyle.lauritzen@gmail.com"
            
        }
        
        
        
        
        
        
        ];
    
});