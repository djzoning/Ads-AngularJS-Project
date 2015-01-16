'use strict';

app.controller('LoginController', function($scope, $rootScope, $location, authService, notifyService){
    $scope.login = function(userData){
        authService.login(userData,
        function success(data){
            notifyService.showInfo('Login successful');
            if(data.isAdmin){
                $location.path('/admin/home');
            } else {
                $location.path('/');
            }
        },
        function error(error){
            notifyService.showError('Login unsuccessful', error);
        })
    }
});