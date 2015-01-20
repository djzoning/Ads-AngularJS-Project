'use strict';

app.controller('AdminAdDeleteController', function($scope, $location, adminService, notifyService){

    $scope.id = sessionStorage.adId;

    adminService.getAdById($scope.id, function(data){
        $scope.adData = data;
    }, function(error){
        notifyService.showError('Loading ad info failed', error);
    });

    $scope.deleteAd = function(id){
        adminService.deleteAd(id, function(data){
            notifyService.showSuccess('Ad deleted');
            $location.path('/admin/home')
        }, function(error){
            notifyService.showError('Deleting ad failed', error);
        })
    }

});