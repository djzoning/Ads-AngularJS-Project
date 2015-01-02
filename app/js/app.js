var adsApp = angular.module('adsApp', [
  'ngRoute',
  'adsControllers'
]);

adsApp.config(function($routeProvider) {
    $routeProvider.when('/ads',
        {
            templateUrl: 'templates/ads-view.html',
            controller: 'AdsController'
        });

    $routeProvider.otherwise({redirectTo: '/ads'});
});
