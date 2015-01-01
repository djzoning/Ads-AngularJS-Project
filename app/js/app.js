var adsApp = angular.module('adsApp', [
  'ngRoute',
  'adsControllers']);

adsApp.config(function($routeProvider) {
  $routeProvider.when('#/',
      {
        controller: 'AdsController',
        templateUrl: 'templates/ads'
      });
  $routeProvider.otherwise({redirectTo: '#/'});
}]);
