angular.module("stylingCampersStories", []).controller('CamperNewsController', ['$scope','$http',
function($scope, $http) {

  $http({
  method: 'GET',
  url: 'http://www.freecodecamp.com/news/hot'
}).then(function successCallback(response) {
    $scope.allData = response.data;
  }, function errorCallback(response) {
    console.log(response);
  });

}]);
