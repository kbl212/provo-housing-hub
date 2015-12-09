var app = angular.module('provo-housing-hub');


app.service('masterService', function($http) {
    
    this.getFacebookInfo = function() {
        
        return $http.get('/me').then(function(response) {
            console.log("this is /me response: ", response);
            this.currentUser = response;
            return response.data;
        });
    }
    
    console.log(this.currentUser);
});