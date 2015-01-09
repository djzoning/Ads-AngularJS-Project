'use strict';

app.controller('RegisterController', function($scope, $location, authService, townsService, notifyService){
    $scope.userData = {townId: null};

    $scope.towns = townsService.getTowns();

    $scope.register = function(userData) {
        authService.register(userData,
        function success(data){
            notifyService.showSuccess('Registration successful');
            $location.path('/');
        },
        function error(error){
            notifyService.showError('User registration failed', error);
        })
    }
});