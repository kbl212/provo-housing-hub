var app = angular.module('provo-housing-hub');


app.controller('masterCtrl', function($scope, masterService) {
    
    $scope.currRoute = "signin";
    
    $scope.signedIn = "";
    
    $scope.displayName = "Sign In";
    
    $scope.getFacebookInfo = function() {
        // if (!$scope.currentUser)
       // console.log("i am getting FACEBOOK INFO now");
        masterService.getFacebookInfo().then(function(response, err) {
            if (err) 
                console.log("sorry, error");
            else {
                $scope.currentUser = response;
                $scope.getDisplayName();
                $scope.signedIn = 'user-logged-in';
              //  console.log($scope.currentUser._id);
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
           // console.log("result = ", result);
            $scope.currentUser = result;
            $scope.displayName = result.name;
          //  $scope.getFacebookInfo();
        });
    };
    
    $scope.updateEmail = function(newEmail, currUserFaceId, currUser) {
        
        masterService.updateEmail(newEmail, currUserFaceId, currUser).then(function(result) {
            $scope.currentUser = result;
        //    $scope.getFacebookInfo();
            
        });
    };
    
    $scope.updatePhone = function (newPhone, currUserFaceId, currUser) {
        masterService.updatePhone(newPhone, currUserFaceId, currUser).then(function(result) {
            $scope.currentUser = result;
     //       $scope.getFacebookInfo();
        });
    };
    
    
});