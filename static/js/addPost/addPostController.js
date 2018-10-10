app.controller('addPost', function($scope, $http){
    $scope.headline = "Add Blog new post";
    
    // Show data template post reqeust
    $http.get('api/post').then(function(response){
        $scope.postList = [];
    });
    
    // Add data to database
    $scope.publish = function(){
        $http({
            method : 'post',
            url    : 'api/create/',
            data   : {
            author : $scope.author,
            tilte : $scope.tilte,
            image : $scope.image,
            category : $scope.category,
            description : $scope.description
            },
            headers: { 'Content-Type': 'application/json' }
        }).then(function(response){
            $scope.postList.push(response.data);
            $scope.succeesMesage = "Data insert successfully";
        })
    }

});