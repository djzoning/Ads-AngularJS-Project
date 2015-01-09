'use strict';

app.controller('HomeController',
        function($scope, adsService, notifyService, pageSize){
    $scope.adsParams = {
        'startPage' : 1,
        'pageSize' : pageSize
    };

    $scope.reloadAds = function(){
        adsService.getAds($scope.adsParams,
        function success(data){
            $scope.data = data;
        },
        function error(error){
            notifyService.showError("Cannot load ads", error);
        })
    };

    $scope.reloadAds();

    //adsService.getAds(
    //    null,
    //    function success(data){
    //        $scope.data = data;
    //        console.log(data);
    //    },
    //    function error(err){
    //        notifyService.showError("Cannot load ads", err);
    //    }
    //);
});