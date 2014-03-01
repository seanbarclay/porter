angular
.module('controllers')
.controller('DraftCtrl', [
  '$scope', 'Posts',
  function ($scope, Posts) {
    $scope.title = "Drafts";
    
    $scope.limit = 10;
    $scope.next = function () {
      $scope.limit += 10;
    };

    Posts
    .search({
      published: false
    }, function (err, res) {
      if (err) throw err;
      $scope.$apply(function () {
        var posts = res.rows.map(function (row) {
          return row.doc;
        });
        
        $scope.posts = posts;
      });
    });
  }
]);