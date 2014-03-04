angular
.module('controllers')
.controller('SyncCtrl', [
  '$scope', 'Pouch', '$location',
  function ($scope, Pouch, $location) {
    var opts = {
      create_target: true,
      complete: function (err) {
        if (err) {
          $scope.$apply(function () {
            $scope.error = JSON.stringify(err);
          });
        } else {
          $scope.$apply(function () {
            $location.path('/');
          });
        }
      }
    };

    $scope.from = function (target) {
      if (!target) {
        $scope.error = "Target is required.";
      } else {
        $scope.success = true;
        Pouch.replicate.from(target, opts); 
      }
    };

    $scope.to = function (target) {
      if (!target) {
        $scope.error = "Target is required.";
      } else {
        $scope.success = true;
        Pouch.replicate.to(target, opts);
      }
    };
  }
]);