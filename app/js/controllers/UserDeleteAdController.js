'use strict';

app.controller('UserDeleteAdController', function($scope, $location, notifyService, adsService){

    $scope.id = sessionStorage.adId;

    adsService.getAdById($scope.id, function(data){
        $scope.adData = data;
    }, function(error){
        notifyService.showError('Loading ad info failed', error);
    });

    $scope.deleteAd = function(id){
        adsService.deleteAd(id, function(data){
            notifyService.showSuccess('Ad deleted');
            $location.path('/user/ads');
        }, function(error){
            notifyService.showError('Deleting ad faled', error);
        })
    }













});