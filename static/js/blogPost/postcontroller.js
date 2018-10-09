app.controller('postCtrl', function($scope, $http){
    $scope.title = "All Blog post page";

    // Show data template post reqeust
    $http.get('api/post').then(function(response){
        $scope.postList = [];
        for(var i = 0; i <response.data.length; i++) {
            var addItem = {};
            addItem.id = response.data[i].id
            addItem.tilte = response.data[i].tilte
            addItem.category = response.data[i].category
            addItem.image = response.data[i].image
            addItem.author = response.data[i].author
            addItem.description = response.data[i].description
            addItem.create_at = response.data[i].create_at

            $scope.postList.push(addItem)
            
        }
    });

});