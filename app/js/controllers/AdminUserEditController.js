'use strict';

app.controller('AdminUserEditController', function($scope, adminService,
                                                   townsService, notifyService){
    $scope.towns = townsService.getTowns();
    $scope.id = sessionStorage.userId;
    $scope.loadUserData = function(){
        adminService.getUserById($scope.id, function(data){
            $scope.user = data;
        }, function(error){
            notifyService.showError('Loading user data failed', error);
        })
    };

    $scope.loadUserData();

    $scope.editUser = function(user){
        adminService.editUser(user.userName, user, function(data){
            notifyService.showSuccess(data.message);
        }, function(error){
            notifyService.showError('The resource you are looking for has been removed, had its name changed, or is temporarily unavailable.', error);
        });
    };

    $scope.changePassword = function(pass){
        pass.username = $scope.user.userName;
        adminService.changePassword(pass, function(data){
            notifyService.showSuccess(data.message);
        }, function(error){
            notifyService.showError('Changing password failed', error);
        })
    }
});