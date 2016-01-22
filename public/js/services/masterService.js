var app = angular.module('provo-housing-hub');


app.service('masterService', function ($http) {

    this.getFacebookInfo = function () {
        /*  if (this.currentUser) {
              console.log("what uppppppppppp im here **********");
              return $http.get('/api/account?' + this.faceId).then(function(response) {
                 this.currentUser = response;
                 return response.data;
              });
          }
          else { */
        return $http.get('/me').then(function (response) {
            this.currentUser = response;
            console.log("-/-/-/-/THIS IS CURR-USER-/-/-/-/", response);
            return response.data;
        });
        // }
    }

    this.updateName = function (newName, faceId, currUser) {

        var updateNameObj = {
            faceId: faceId,
            newName: newName,
            currUser: currUser
        }

        return $http.put('/api/account', updateNameObj).then(function (response) {
            console.log(response);
            return response.data;
        });
    };

    this.updateEmail = function (newEmail, faceId, currUser) {

        var updateEmailObj = {
            faceId: faceId,
            newEmail: newEmail,
            currUser: currUser
        }

        return $http.put('/api/account', updateEmailObj).then(function (response) {
            console.log(response);
            return response.data;
        });
    }

    this.updatePhone = function (newPhone, faceId, currUser) {

        var updatePhoneObj = {
            faceId: faceId,
            newPhone: newPhone,
            currUser: currUser
        }

        return $http.put('/api/account', updatePhoneObj).then(function (response) {
            console.log(response);
            return response.data;
        });
    }

    this.addToFavorites = function (mongoIdIn, faceIdIn, currUserIn) {
        var addToFavesObj = {
            mongoId: mongoIdIn,
            faceId: faceIdIn,
            currUser: currUserIn
        }
        return $http.put('/api/account', addToFavesObj).then(function (response) {
            console.log(response);
            return response.data;
        });
    }

    this.getFaves = function (faceId) {

        return $http.get('/api/account?faceId=' + faceId).then(function (response) {
            console.log("this is crazy...lol:", response);
            return response;
        });
    };




    // console.log(this.currentUser);
});