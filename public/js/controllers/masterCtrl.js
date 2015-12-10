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
            }
        });
    };
    
        $scope.getFacebookInfo();
    
    
    $scope.getDisplayName = function() {
        if ($scope.currentUser.name) {
            $scope.displayName = $scope.currentUser.name;
            $scope.currRoute = 'account';
        }
        else {
            $scope.displayName = "Sign In";
        }
    };
    
    
    $scope.updateName = function(newName, currUserFaceId, currUser) {

        masterService.updateName(newName, currUserFaceId, currUser).then(function(result) {
            console.log("result = ", result);
            $scope.currentUser = result;
            $scope.displayName = result.name;
           // $scope.getFacebookInfo();
        });
    };
    
    
});