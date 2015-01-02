var adsApp = angular.module('adsApp', ['ngRoute']);

adsApp.config(function($routeProvider) {
    $routeProvider.when('/ads',
        {
            templateUrl: 'templates/ads-view.html',
            controller: 'AdsController'
        });

    $routeProvider.when('/sign-up',
        {
            templateUrl: 'templates/sign-up.html',
            controller: 'AdsController'
        });

    $routeProvider.otherwise({redirectTo: '/ads'});
});
