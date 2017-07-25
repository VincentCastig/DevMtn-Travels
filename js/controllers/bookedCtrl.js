angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv) {
  $scope.booking = mainSrv.getLocation($stateParams.id)
  console.log($scope.booking)
});
