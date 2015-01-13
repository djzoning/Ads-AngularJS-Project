'use strict';

app.controller('AdminHomeController', function($scope, adsService, pageSize){

    $scope.adsParams = {
        'startPage' : 1,
        'pageSize' : pageSize
    };

    $scope.reloadAds = function(){
        adsService.getAdminAds($scope.adsParams,
        function success(data){
            $scope.data = data;
        },
        function error (error) {
            notifyService.showError('Loading ads failed', error);
        })
    };

    $scope.reloadAds();

    $scope.$on('adminStatusSelectionChanged', function(event, adminSelectedStatus){
        $scope.adsParams.status = adminSelectedStatus;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });
});