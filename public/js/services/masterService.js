var app = angular.module('provo-housing-hub');


app.service('masterService', function($http) {
    
    this.getFacebookInfo = function() {
        
        return $http.get('/me').then(function(response) {
            console.log("this is /me response: ", response);
            this.currentUser = response;
            return response.data;
        });
    }
    
    this.updateName = function(faceId, newName, currUser) {
        
        var updateNameObj = {
            faceId: faceId,
            newName: newName,
            currUser: currUser
        }
        
        return $http.put('/api/account', updateNameObj).then(function(response) {
            console.log(response);
            return response;
        });
    };
    
    
    console.log(this.currentUser);
});