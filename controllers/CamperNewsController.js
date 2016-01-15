stylingCampersStoriesApp = angular.module("stylingCampersStoriesApp", ['ui.bootstrap'])

stylingCampersStoriesApp.controller('CamperNewsController', ['$scope','$http', '$uibModal', '$log',
function($scope, $http, $uibModal, $log) {
  $scope.allData;
  $scope.allPostsArray = [];

  $http({
  method: 'GET',
  url: 'http://www.freecodecamp.com/news/hot'
}).then(function successCallback(response) {
    $scope.allData = response.data;
    for(var i = 0; i < $scope.allData.length; i++) {
      $scope.allPostsArray.push($scope.allData[i])
    }
  }, function errorCallback(response) {
    console.log(response);
  });

  $scope.findPostById = function(postId) {
    // console.log($scope.PostsArray);
    for(var i = 0; i < $scope.allPostsArray.length; i++) {
      if(postId == $scope.allPostsArray[i].id) {
        return $scope.allPostsArray[i];
        break
      }
    }
  }

}]);
