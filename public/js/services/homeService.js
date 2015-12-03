var app = angular.module('provo-housing-hub');


app.service('homeService', function($http) {
    
    this.getListings = function() {
        
        return $http.get('/api/listings').then(function(response) {
            return response.data;
            
        });
        
    }
    
});