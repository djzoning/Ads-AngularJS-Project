'use strict';

app.controller('UserAdsController', function($scope, $http, authService,
        userAdsService, pageSize, adsService, baseServiceUrl,
        notifyService, userService){
    $scope.ready = false;

    $scope.userAdsParams = {
        startPage: 1,
        pageSize: pageSize//,
        //headers: authService.getAuthHeaders()
    };

    $scope.reloadUserAds = function() {
        adsService.getUserAds($scope.userAdsParams,
            function (data) {
                $scope.data = data;
                $scope.ready = true;
            },
            function (error) {
                notifyService.showError('Loading user ads failed', error)
            });
    };

    $scope.delete = function(id){
        var yes = confirm('Are you sure?');
        if(yes){
            userService.deleteAd(id,
            function(data){
                notifyService.showSuccess('Advertisement deleted');
                $scope.reloadUserAds();
            },
            function(error){
                notifyService.showError('Deleting ad failed', error);
            });
        }
    };

    $scope.publishAgain = function(id){
        userService.publishAgainAd(id,
        function(data){
            notifyService.showSuccess('Advertisement submitted for approval');
            $scope.reloadUserAds();
        },
        function(error){
            notifyService.showError('Publishing ad failed', error);
        })
    };

    $scope.deactivate = function(id){
        var yes = confirm('Are you sure about deactivating this ad?');
        if(yes){
            userService.deactivateAd(id,
                function(data){
                    notifyService.showSuccess('Advertisement deactivated');
                    $scope.reloadUserAds();
                },
                function(error){
                    notifyService.showError('Deactivating ad failed', error);
                })
        }
    };

    $scope.pushId  = function(id){
        sessionStorage.adId = id;
    };

    $scope.$on('statusSelectionChanged', function(event, status){
        $scope.userAdsParams.status = status;
        $scope.userAdsParams.startPage = 1;
        $scope.reloadUserAds();
    });

    $scope.reloadUserAds();

    //userAdsService.getUserAds(
    //    function(data){
    //        $scope.data = data;
    //        console.log(data);
    //    },
    //    function(error){
    //        notifyService.showError('Loading user ads failed', error);
    //    });

    //var getUserAds = function() {

        //var request = {
        //    method: 'GET',
        //    url: baseServiceUrl + '/api/user/ads',
        //    headers: authService.getAuthHeaders()
        //};

        //$http(request).success(function (data) {
        //    $scope.data = data;
        //    console.log(data);
        //}).error(function(error){
        //    notifyService.showError('Loading user ads failed', error);
        //});
    //}

    //getUserAds();
});