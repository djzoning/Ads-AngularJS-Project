'use strict';

app.controller('AdminUserDeleteController', function($scope, $location, adminService,
                                                     notifyService){
    $scope.id = sessionStorage.userId;
    adminService.getUserById($scope.id, function(data){
        $scope.user = data;
    }, function(error){
        notifyService.showError('Loading user data failed', error);
    })

    $scope.deleteUser = function(username){
        adminService.deleteUser(username, function(data){
            notifyService.showSuccess(data.message);
            $location.path('/admin/users');
        }, function(error){
            notifyService.showError('Deleting user failed', error);
        })
    }
});