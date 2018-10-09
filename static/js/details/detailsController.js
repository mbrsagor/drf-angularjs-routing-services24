app.controller('detailsCtrl', function($scope, $http, $routeParams){
    $scope.headline = "Detials page";

    // console.log($routeParams);
   $http({
       method   : 'get',
       url      : 'api/post/'+$routeParams.id,
       headers: { 'Content-Type': 'application/json' }
   }).then( function success (response){
        $scope.id = response.data.id
        $scope.tilte = response.data.tilte
        $scope.author = response.data.author
        $scope.category = response.data.category
        $scope.image = response.data.image
        $scope.description = response.data.description
        $scope.create_at = response.data.create_at
   })

  
});