var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'mainController'
        })
        .when('/images', {
            templateUrl: 'page-images.html',
            controller: 'imagesController'
        })
        .when('/contact', {
            templateUrl: 'page-contact.html',
            controller: 'contactController'
        });

});

animateApp.controller('mainController', function ($scope) {
    $scope.pageClass = 'page-home';
});

animateApp.controller('imagesController', function ($scope) {
    $scope.pageClass = 'page-images';
});

animateApp.controller('contactController', function ($scope) {
    $scope.pageClass = 'page-contact';
});


