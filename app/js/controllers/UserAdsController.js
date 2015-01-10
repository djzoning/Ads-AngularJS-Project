'use strict';

app.controller('UserAdsController', function($scope, $http, authService,
        userAdsService, pageSize, adsService, baseServiceUrl, notifyService){
    $scope.userAdsParams = {
        startPage: 1,
        pageSize: pageSize//,
        //headers: authService.getAuthHeaders()
    };

    adsService.getUserAds($scope.userAdsParams,
    function(data){
        console.log(data);
        console.log('daaaaaaa');
    },
    function(error){
        console.log(error);
        console.log('neeeee');
    });

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