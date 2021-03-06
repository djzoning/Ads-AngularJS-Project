'use strict';

app.controller('AdminHomeController', function($scope, adsService, pageSize,
                                               adminService, notifyService){
    $scope.ready = false;

    $scope.adsParams = {
        'startPage' : 1,
        'pageSize' : pageSize
    };

    $scope.reloadAds = function(){
        adsService.getAdminAds($scope.adsParams,
        function success(data){
            $scope.data = data;
            $scope.ready = true;
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

    $scope.$on('adminCategorySelectionChanged', function(event, adminSelectedCategoryId){
        $scope.adsParams.categoryId = adminSelectedCategoryId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });

    $scope.$on('adminTownSelectionChanged', function(event, adminSelectedTownId){
        $scope.adsParams.townId = adminSelectedTownId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });

    $scope.approve = function(id){
        adminService.approveAd(id, function(data){
            notifyService.showSuccess('Advertisement approved');
            $scope.reloadAds();
        }, function(error){
            notifyService.showError('Approving advertisement failed', error);
        })
    };

    $scope.reject = function(id){
        adminService.rejectAd(id, function(data){
            notifyService.showSuccess('Advertisement rejected');
            $scope.reloadAds();
        }, function(error){
            notifyService.showError('Rejecting advertisement failed', error);
        })
    };

    $scope.delete = function(id){
        var yes = confirm('Delete this ad?');
        if (yes) {
            adminService.deleteAd(id, function (data) {
                notifyService.showSuccess('Advertisement deleted');
                $scope.reloadAds();
            }, function (error) {
                notifyService.showError('Deleting advertisement failed', error);
            });
        }
    };

    $scope.saveAdId = function(id){
        sessionStorage.setItem('adId', id);
    }
});