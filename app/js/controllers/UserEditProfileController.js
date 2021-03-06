'use strict';

app.controller('UserEditProfileController', function($scope, $location,
        userInfoService, notifyService, townsService, userService){

    var reloadUserInfo = function(){
        userInfoService.getUserInfo(function(data){
                $scope.userInfo = data;
            }, function(error){
                notifyService.showError('Getting user info failed', error);
            });
    };

    reloadUserInfo();

    $scope.editUserProfile = function(){
        userInfoService.editProfile($scope.userInfo,
        function(data){
            notifyService.showSuccess(data.message);
            $location.path('/');
        },
        function(error){
            notifyService.showError(error.message);
        });
    };

    townsService.getTowns(function(data){
        $scope.towns = data;
    },function(error){
        notifyService.showError('Loading towns failed', error);
    });

    $scope.changePassword = function(userPass){
        userService.changePassword(userPass,
        function(data){
            notifyService.showSuccess(data.message);
            $location.path('/');
        },
        function(error){
            notifyService.showError('Changing password failed', error);
        });
    }
});