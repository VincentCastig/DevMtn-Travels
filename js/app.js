angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers',{
                url:'/adventurers',
                parent:'home',
                templateUrl: "../views/about-adventurers.html"
            })
            .state('booked',{
                url:'/booked',
                templateUrl: "../views/booked.html",
                controller: 'bookedCtrl'
            })
            .state('contact',{
                url:'/contact',
                parent: 'home',
                templateUrl: "../views/contact.html"
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl'
            })
            .state('packages',{
                url:'/packages/:country',
                templateUrl: "../views/packages.html",
                controller: 'packagesCtrl'
            })
            ;


    });
