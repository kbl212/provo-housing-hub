angular.module('provo-housing-hub')

.factory('imagesService', function ($http) {
  var service = {};

  service.storeImage = function (imageData, fileName) {
    var imageExtension = imageData.split(';')[0].split('/');
    imageExtension = imageExtension[imageExtension.length - 1];

    var newImage = {
      imageName: fileName,
      imageBody: imageData,
      imageExtension: imageExtension,
     // userEmail: 'test_mail@test.com'
    }
    
    //console.log("this is what we want...:", newImage);
    //console.log('shouldnt be seeing this...');
    return $http.post('/api/newimage', newImage)
  }

  return service;
});