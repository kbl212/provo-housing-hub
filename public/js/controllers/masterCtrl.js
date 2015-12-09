var app = angular.module('provo-housing-hub');


app.controller('masterCtrl', function($scope, masterService) {
    
    $scope.currRoute = "signin";
    
    $scope.signedIn = "";
    
    $scope.displayName = "Sign In";
    
    $scope.getFacebookInfo = function() {
        masterService.getFacebookInfo().then(function(response, err) {
            if (err) 
                console.log("sorry, error");
            else {
                $scope.currentUser = response;
                $scope.getDisplayName();
                $scope.signedIn = 'user-logged-in';
                console.log("this is control response to /me: ", response);
            }
        });
    };
    
        $scope.getFacebookInfo();
    
    
    $scope.getDisplayName = function() {
        console.log("currUser = ", $scope.currentUser);
        if ($scope.currentUser.name) {
            $scope.displayName = $scope.currentUser.name;
            $scope.currRoute = 'account';
        }
        else {
            $scope.displayName = "Sign In";
        }
    };
    
  //  $scope.getDisplayName();
    
    $scope.showCurrUser = function() {
        console.log($scope.currUser);
    };
    
    
    $scope.updateName = function(newName) {
        masterService.updateName($scope.currUser.faceId, newName, $scope.currUser).then(function(result) {
            $scope.getFacebookInfo;
        });
    };
    
    
});