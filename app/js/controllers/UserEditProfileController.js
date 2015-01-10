'use strict';

app.controller('UserEditProfileController', function($scope,
        getUserInfoService, notifyService){
    getUserInfoService.getUserInfo(function(data){
        $scope.userInfo = data;
    },
    function(error){
        notifyService.showError('Getting user info failed', error);
    });

    $scope.editUserProfile = function(editedUserInfo){
        getUserInfoService.editProfile(editedUserInfo,
        function(data){
            notifyService.showSuccess(data.message);
        },
        function(error){
            notifyService.showError(error);
        });
    }
});