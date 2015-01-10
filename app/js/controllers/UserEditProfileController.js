'use strict';

app.controller('UserEditProfileController', function($scope, getUserInfoService, notifyService){
    getUserInfoService.getUserInfo(function(data){
        console.log(data);
    },
    function(error){
        notifyService.showError('Getting user info failed', error);
    });
});