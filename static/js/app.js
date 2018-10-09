var app = angular.module('serviceApp', ['ngRoute'])

// Routing
.config(function($routeProvider){
    $routeProvider
    .when('/posts', {
        url        : 'posts',
        templateUrl: 'static/js/blogPost/post.html',
        controller : 'postCtrl'
    })
    .when('/addPost', {
        url        : 'addPost',
        templateUrl: 'static/js/addPost/addPost.html',
        controller : 'addPost'
    })
    .when('/operation', {
        url         : 'operation',
        templateUrl : 'static/js/operation/operation.html',
        controller  : 'operationCtrl'
    })
    .when('/details/:id', {
        // url         : 'details',
        templateUrl : 'static/js/details/details.html',
        controller  : 'detailsCtrl'
    })
});