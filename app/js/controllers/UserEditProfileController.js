'use strict';

app.controller('UserEditProfileController', function($scope,
        userInfoService, notifyService, townsService){

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
            reloadUserInfo();
        },
        function(error){
            console.log(error);
            notifyService.showError(error.message);
        });
    };

    townsService.getTowns(function(data){
        $scope.towns = data;
    },function(error){
        notifyService.showError('Loading towns failed', error);
    })
});