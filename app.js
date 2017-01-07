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
var m = {
    "images": [
        {
            "src":"./media/IMAGES/Beck_01.jpg",
            "title":"Untitled, 2016",
            "description": "Ink, watercolor, pencil, and powdered charcoal on paper",
            "dimensions":"30 x 35 inches",
        }
    ]
};
animateApp.controller('mainController', function ($scope) {
    $scope.items = m.images;
    $scope.pageClass = 'page-home';
});

animateApp.controller('imagesController', function ($scope) {
    $scope.pageClass = 'page-images';
});

animateApp.controller('contactController', function ($scope) {
    $scope.pageClass = 'page-contact';
});

$(function () {
    $('#myModal').on('show.bs.modal', function (event) {
        var source = $(event.relatedTarget);

        $(this).find('.modal-body').html($(source).find('.panel-body').html());
        $(this).find('.modal-title h4').html($(source).find('.panel-footer .title').html());
        $(this).find('.modal-title .description').html($(source).find('.panel-footer .description').html());

    });
})

