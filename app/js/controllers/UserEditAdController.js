'use strict';

app.controller('UserEditAdController', function($scope, adsService, townsService,
        categoriesService, userService, notifyService){

    $scope.adId = sessionStorage.getItem('adId');

    $scope.editAd = function(adData){
        userService.editAd($scope.adId, adData,
        function(data){
            console.log(data);
            console.log(data.message);
            console.log('tuka');
            notifyService.showSuccess('Advertisement edited');
            $scope.getAdInfo();
        },
        function(error){
            notifyService.showError('Edit failed');
        })
    };

    $scope.getAdInfo = function(){

        adsService.getAdById($scope.adId,
        function(data){
            $scope.ad = data;
        },
        function(error){
            notifyService.showError('Loading ad info failed');
        });
    };

    $scope.getAdInfo();

    townsService.getTowns(function(data){
        $scope.towns = data;
    },function(error){
        notifyService.showError('Loading towns failed');
    });

    categoriesService.getCategories(function(data){
        $scope.categories = data;
    },function(error){
        notifyService('Loading categories failed');
    })
});