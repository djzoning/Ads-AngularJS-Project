'use strict';

app.controller('UserEditProfileController', function($scope,
        userInfoService, notifyService){

    var reloadUserInfo = function(){
        userInfoService.getUserInfo(function(data){
                $scope.userInfo = data;
            },
            function(error){
                notifyService.showError('Getting user info failed', error);
            });
    }

    reloadUserInfo();

    $scope.editUserProfile = function(editedUserInfo){
        userInfoService.editProfile(editedUserInfo,
        function(data){
            notifyService.showSuccess(data.message);
            reloadUserInfo();
        },
        function(error){
            notifyService.showError('You have entered invalid user info', error);
        });
    }
});