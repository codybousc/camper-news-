stylingCampersStoriesApp = angular.module("stylingCampersStoriesApp", ['ui.bootstrap'])

stylingCampersStoriesApp.controller('CamperNewsController', ['$scope','$http', '$uibModal', '$log',
function($scope, $http, $uibModal, $log) {

  $http({
  method: 'GET',
  url: 'http://www.freecodecamp.com/news/hot'
}).then(function successCallback(response) {
    $scope.allData = response.data;
  }, function errorCallback(response) {
    console.log(response);
  });

//==========================================================
//open modal

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
