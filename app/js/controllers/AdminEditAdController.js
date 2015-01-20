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

    function parseDate(date){
        var result = date.toISOString();
        return result;
    }
});