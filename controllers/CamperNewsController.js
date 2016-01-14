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

//==========================================================
//open modal
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

}]);



// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('stylingCampersStoriesApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

$scope.items = items;
$scope.selected = {
  item: $scope.items[0]
};

$scope.ok = function () {
  $uibModalInstance.close($scope.selected.item);
};

$scope.cancel = function () {
  $uibModalInstance.dismiss('cancel');
};
});
