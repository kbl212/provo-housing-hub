var app = angular.module('provo-housing-hub');


app.service('masterService', function($http) {
    
    this.getFacebookInfo = function() {
        
        return $http.get('/me').then(function(response) {
            this.currentUser = response;
            return response.data;
        });
    }
    
    this.updateName = function(newName, faceId, currUser) {
        
        var updateNameObj = {
            faceId: faceId,
            newName: newName,
            currUser: currUser
        }
        
        return $http.put('/api/account', updateNameObj).then(function(response) {
            console.log(response);
            return response.data;
        });
    };
    
    
    console.log(this.currentUser);
});