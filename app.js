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
        },
        {
            "src":"./media/IMAGES/Beck_02.jpg",
            "title":"Untitled, 2016",
            "description": "Watercolor, powdered charcoal, ink and loose pigment on paper",
            "dimensions":"30 x 33 inches",
        },
        {
            "src":"./media/IMAGES/Beck_03.jpg",
            "title":"Untitled, 2015",
            "description": "Watercolor and ink on paper",
            "dimensions":"30 x 22.5 inches",
        },
        {
            "src":"./media/IMAGES/Beck_04.jpg",
            "title":"Untitled, 2012",
            "description": "Acrylic, ink, collage, pastel and synthetic hair on paper",
            "dimensions":"32 x 26 inches",
        },


        {
            "src":"./media/IMAGES/Beck_05.jpg",
            "title":"Installation view, \"Drone\", Logan Center for the Arts, Chicago, IL, 2012",
            "description": "",
            "dimensions":"",
        },
        {
            "src":"./media/IMAGES/Beck_06.jpg",
            "title":"Panorama, 2015",
            "description": "Ink, watercolor, pencil and gouache on paper",
            "dimensions":"20.5 x 25 inches",
        },
        {
            "src":"./media/IMAGES/Beck_07.jpg",
            "title":"Man Moth, 2013",
            "description": "Pencil, pastel, watercolor, pigment and collage on paper",
            "dimensions":"35 x 27.5 inches",
        },
        {
            "src":"./media/IMAGES/Beck_08.jpg",
            "title":"Islands in the Net, 2014",
            "description": "Ink, pastel, acrylic and collage on paper",
            "dimensions":"29 x 22 inches",
        },


        {
            "src":"./media/IMAGES/Beck_09.jpg",
            "title":"Untitled, 2015",
            "description": "Watercolor on paper",
            "dimensions":"25.5 x 27.5 inches",
        },
        {
            "src":"./media/IMAGES/Beck_10.jpg",
            "title":"Untitled, 2013",
            "description": "Ink, watercolor, pencil, cork and collage on paper",
            "dimensions":"10 x 13 inches",
        },
        {
            "src":"./media/IMAGES/Beck_11.jpg",
            "title":"Mountaineer, 2014",
            "description": "Ink, watercolor and pastel on paper",
            "dimensions":"34 inch diameter",
        },
        {
            "src":"./media/IMAGES/Beck_12.jpg",
            "title":"Untitled, 2016",
            "description": "Ink, pastel and watercolor on paper",
            "dimensions":"30 x 22 inches",
        },


        {
            "src":"./media/IMAGES/Beck_13.jpg",
            "title":"Pleasure of Ruins, 2015",
            "description": "Ink, watercolor, acrylic, pencil, gouache and collage on paper",
            "dimensions":"26 x 24 inches",
        },
        {
            "src":"./media/IMAGES/Beck_14.jpg",
            "title":"Sacrifice, 2015",
            "description": "Ink, acrylic, watercolor and pencil on paper",
            "dimensions":"12 x 9 inches",
        },
        {
            "src":"./media/IMAGES/Beck_15.jpg",
            "title":"Untitled, 2015",
            "description": "Oil on panel",
            "dimensions":"20 x 17 inches",
        },
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

