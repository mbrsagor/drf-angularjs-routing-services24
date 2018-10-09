app.controller('operationCtrl', function($scope, $http){
    
    // Dispaly data
    $http.get('api/post').then(function(response){
        $scope.postList = [];
        for(var i = 0; i <response.data.length; i++) {
            var addItem = {};
            addItem.id = response.data[i].id
            addItem.tilte = response.data[i].tilte
            addItem.create_at = response.data[i].create_at
            $scope.postList.push(addItem)
        }
    });

    // Delete data
    $scope.remove = function(id){
        $http({
            method  : 'delete',
            url     : 'api/post/delete/'+id,
            headers : { 'Content-Type': 'application/json' }
        }).then(function success(response){
            $scope.postList.splice(response.id, 1);
        });
    }

    // Update data
    $scope.update = function(){
        console.log("Data has been update!!")
    }

});