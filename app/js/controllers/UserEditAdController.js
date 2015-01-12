'use strict';

app.controller('UserEditAdController', function($scope, adsService, townsService,
        categoriesService, userService, notifyService){

    $scope.name = 'Ivan';

    $scope.adId = sessionStorage.getItem('adId');

    $scope.editAd = function(adData){
        userService.editAd($scope.adId, adData,
        function(data){
            notifyService.showSuccess('Advertisement edited');
            $scope.getAdInfo();
        },
        function(error){
            notifyService.showError('Edit failed.\nTitle and text are required\nYou should type new values in the corresponding fields');
        })
    };

    $scope.getAdInfo = function(){

        adsService.getAdById($scope.adId,
        function(data){
            $scope.adData = data;
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
    });

    $scope.fileSelected = function(fileInputField){
        delete $scope.adData.imageDataUrl;
        var file = fileInputField.files[0];
        if(file.type.match(/image\/.*/)){
            var reader = new FileReader();
            reader.onload = function(){
                $scope.adData.imageDataUrl = reader.result;
                $('.image-box').html('<img src="' + reader.result + '">');
            };
            reader.readAsDataURL(file);
        } else {
            $('.image-box').html('<p>File type not supported</p>');
        }
    }
});