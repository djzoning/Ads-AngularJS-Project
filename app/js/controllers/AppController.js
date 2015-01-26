'use strict';

app.controller('AppController', function($scope, $location, $route, notifyService, authService){
        $scope.authService = authService;

        $scope.logout = function() {
                authService.logout();
                notifyService.showInfo('Logout successful');
                $location.path('/');
        };

        $scope.$route = $route;
});