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
        controller: 'HomeController',
        title: 'Home'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
        title: 'Login'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController',
        title: 'Registration'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/user-ads.html',
        controller: 'UserAdsController',
        title: 'User Ads'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController',
        title: 'Publish New Ad'
    });

    $routeProvider.when('/user/edit-profile', {
        templateUrl: 'templates/user/edit-profile.html',
        controller: 'UserEditProfileController',
        title: 'Edit Profile'
    });

    $routeProvider.when('/user/ads/edit', {
        templateUrl: 'templates/user/edit-ad.html',
        controller: 'UserEditAdController',
        title: 'Edit Ad'
    });

    $routeProvider.when('/admin/home', {
        templateUrl: 'templates/admin/home.html',
        controller: 'AdminHomeController',
        title: 'Home'
    });

    $routeProvider.when('/admin/edit-ad', {
        templateUrl: 'templates/admin/edit-ad.html',
        controller: 'AdminEditAdController',
        title: 'Edit Ad'
    });

    $routeProvider.when('/admin/users', {
        templateUrl: 'templates/admin/users.html',
        controller: 'AdminUsersController',
        title: 'Users'
    });

    $routeProvider.when('/admin/user-edit', {
        templateUrl: 'templates/admin/user-edit.html',
        controller: 'AdminUserEditController',
        title: 'Edit User'
    });

    $routeProvider.when('/admin/user-delete', {
        templateUrl: 'templates/admin/user-delete.html',
        controller: 'AdminUserDeleteController',
        title: 'User Delete'
    });

    $routeProvider.when('/admin/categories', {
        templateUrl: 'templates/admin/categories.html',
        controller: 'AdminCategoriesController',
        title: 'Categories'
    });

    $routeProvider.when('/admin/towns', {
        templateUrl: 'templates/admin/towns.html',
        controller: 'AdminTownsController',
        title: 'Towns'
    });

    $routeProvider.when('/admin/category-edit', {
        templateUrl: 'templates/admin/category-edit.html',
        controller: 'AdminCategoryEditController',
        title: 'Edit Category'
    });

    $routeProvider.when('/admin/category-delete', {
        templateUrl: 'templates/admin/category-delete.html',
        controller: 'AdminCategoryDeleteController',
        title: 'Delete Category'
    });

    $routeProvider.when('/admin/category-create', {
        templateUrl: 'templates/admin/category-create.html',
        controller: 'AdminCategoryCreateController',
        title: 'Create Category'
    });

    $routeProvider.when('/admin/town-create', {
        templateUrl: 'templates/admin/town-create.html',
        controller: 'AdminTownCreateController',
        title: 'Create Town'
    });

    $routeProvider.when('/admin/town-edit', {
        templateUrl: 'templates/admin/town-edit.html',
        controller: 'AdminTownEditController',
        title: 'Edit Town'
    });

    $routeProvider.when('/admin/town-delete', {
        templateUrl: 'templates/admin/town-delete.html',
        controller: 'AdminTownDeleteController',
        title: 'Delete Town'
    });

    $routeProvider.when('/admin/ad-delete', {
        templateUrl: 'templates/admin/ad-delete.html',
        controller: 'AdminAdDeleteController',
        title: 'Delete Ad'
    });

    $routeProvider.when('/user/delete-ad', {
        templateUrl: 'templates/user/delete-ad.html',
        controller: 'UserDeleteAdController',
        title: 'Delete Ad'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
});

app.run(function($rootScope, $location, authService){
    $rootScope.$on('$locationChangeStart', function(event){
        if($location.path().indexOf('/user/') != -1 && !authService.isLoggedIn()
        || $location.path().indexOf('/admin/') != -1 && !authService.isAdmin()){
            $location.path('/login');
        }
    })
});