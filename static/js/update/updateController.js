app.controller('updateCtrl', function($scope ,$http, $routeParams){
    $scope.subTitle = "You May update from here!";

    // button click show data update field
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


     // Show data template post reqeust
     $http.get('api/post').then(function(response){
        $scope.postList = [];
    });


    // update function
    $scope.update = function(){
        $http({
            method  : 'put',
            url     : 'api/post/update/'+$routeParams.id,
            data   : {
                author : $scope.author,
                tilte : $scope.tilte,
                image : $scope.image,
                category : $scope.category,
                description : $scope.description
                },
            headers: { 'Content-Type': 'application/json' }

        }).then(function success(response){
            $scope.postList.push(response.data);
            $scope.succeesMesage = "Data insert successfully";
        });
    }
});