'use strict';

var app = angular.module('app', [
    'ngRoute', 'ngResource',
    'angular-loading-bar', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 5);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/user-ads.html',
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/user/edit-profile', {
        templateUrl: 'templates/user/edit-profile.html',
        controller: 'UserEditProfileController'
    });

    $routeProvider.when('/user/ads/edit', {
        templateUrl: 'templates/user/edit-ad.html',
        controller: 'UserEditAdController'
    });

    $routeProvider.when('/admin/home', {
        templateUrl: 'templates/admin/home.html',
        controller: 'AdminHomeController'
    });

    $routeProvider.when('/admin/edit-ad', {
        templateUrl: 'templates/admin/edit-ad.html',
        controller: 'AdminEditAdController'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
});

app.run(function($rootScope, $location, authService){
    $rootScope.$on('$locationChangeStart', function(event){
        if($location.path().indexOf('/user/') != -1 && !authService.isLoggedIn()){
            $location.path('/login');
        }
    })
});