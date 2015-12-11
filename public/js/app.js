var app = angular.module('provo-housing-hub', ['ui.router'])



.directive('fileread', function (imagesService) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {          
        var reader = new FileReader();

        reader.onloadend = function (loadEvent) {
          var fileread = loadEvent.target.result;
          
            
          var tempArray = elem[0].value.split('\\');
          var fileName = tempArray[tempArray.length - 1];

            
            
            app.controller('imageCtrl', function($scope) {
                $scope.fileName = fileName;
                $scope.fileread = fileread;
            });
/*          imagesService.storeImage(fileread, fileName)
          .then(function (result) {
            console.log(result);
          //  scope.images.unshift(result.data);
          })
          .catch(function (err) {
            console.error(err);
          });
        }
*/
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
});





app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
    .state('intro', {
        url: '/',
        templateUrl: 'templates/introTmpl.html',
        controller: 'introCtrl'
        
    })
        
    .state('home', {
        url: '/home',
        templateUrl: 'templates/homeTmpl.html',
        controller: 'homeCtrl'
        
    })
        
    .state('newlisting', {
        url: '/newlisting',
        templateUrl: 'templates/newListingTmpl.html',
        controller: 'newListingCtrl'
        
    })
        
    .state('account', {
        url: '/account',
        templateUrl: 'templates/accountTmpl.html',
        controller: 'accountCtrl'
        
    })
    
    .state('signin', {
        url: '/signin',
        templateUrl: 'templates/signInTmpl.html',
        controller: 'signInCtrl'
    })
    
    .state('currentListing', {
        url: '/currentlisting',
        templateUrl: 'templates/currentListingTmpl.html',
        controller: 'homeCtrl'
        
    })
    
    $urlRouterProvider
        .otherwise('/');
    
});