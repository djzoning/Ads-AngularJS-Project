var adsApp = angular.module('adsApp', [
  'ngRoute',
  'adsControllers'
]);

adsApp.config(function($routeProvider) {
    $routeProvider.when('/ads',
        {
            templateUrl: 'templates/ads.html',
            controller: 'AdsController'
        });

    $routeProvider.when('/home',
        {
            templateUrl: 'templates/home.html',
            controller: 'AdsController'
        });

    $routeProvider.otherwise({redirectTo: '/ads'});
});
