'use strict';

app.controller('AdminEditAdController', function($scope, $location, adsService,
                                                 townsService, categoriesService,
                                                 notifyService, adminService){

    $scope.statuses = ['Inactive', 'Published', 'WaitingApproval', 'Rejected'];
    $scope.towns = townsService.getTowns();
    $scope.categories = categoriesService.getCategories();
    $scope.adId = sessionStorage.getItem('adId');

    $scope.getUserAd = function(){
        adsService.adminGetAdById($scope.adId, function(data){
            $scope.adData = data;
            $scope.adData.rightDate = new Date($scope.adData.date);
        }, function(error){
            notifyService.showError('Loading user ad info failed', error);
        });
    };

    $scope.getUserAd();

    $scope.editAd = function(adData){
        $scope.adData.date = parseDate(adData.rightDate);
        adminService.editAd($scope.adData.id, $scope.adData, function(data){
            notifyService.showSuccess('Advertisement edited');
            $location.path('/admin/home');
        }, function(error){
            notifyService.showError('Editing advertisement failed. ' + error.message);
        })
    };

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
    };

    function parseDate(date){
        var result = date.toISOString();
        return result;
    }
});