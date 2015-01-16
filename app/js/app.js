'use strict';

var app = angular.module('app', [
    'ngRoute', 'ngResource', 'ngTable',
    'angular-loading-bar', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
//app.constant('baseServiceUrl', 'http://localhost:1337');
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

    $routeProvider.when('/admin/users', {
        templateUrl: 'templates/admin/users.html',
        controller: 'AdminUsersController'
    });

    $routeProvider.when('/admin/user-edit', {
        templateUrl: 'templates/admin/user-edit.html',
        controller: 'AdminUserEditController'
    });

    $routeProvider.when('/admin/user-delete', {
        templateUrl: 'templates/admin/user-delete.html',
        controller: 'AdminUserDeleteController'
    });

    $routeProvider.when('/admin/categories', {
        templateUrl: 'templates/admin/categories.html',
        controller: 'AdminCategoriesController'
    });

    $routeProvider.when('/admin/towns', {
        templateUrl: 'templates/admin/towns.html',
        controller: 'AdminTownsController'
    });

    $routeProvider.when('/admin/category-edit', {
            templateUrl: 'templates/admin/category-edit.html',
            controller: 'AdminCategoryEditController'
    });

    $routeProvider.when('/admin/category-delete', {
        templateUrl: 'templates/admin/category-delete.html',
        controller: 'AdminCategoryDeleteController'
    });

    $routeProvider.when('/admin/category-create', {
        templateUrl: 'templates/admin/category-create.html',
        controller: 'AdminCategoryCreateController'
    });

    $routeProvider.when('/admin/town-create', {
        templateUrl: 'templates/admin/town-create.html',
        controller: 'AdminTownCreateController'
    });

    $routeProvider.when('/admin/town-edit', {
        templateUrl: 'templates/admin/town-edit.html',
        controller: 'AdminTownEditController'
    });

    $routeProvider.when('/admin/town-delete', {
        templateUrl: 'templates/admin/town-delete.html',
        controller: 'AdminTownDeleteController'
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