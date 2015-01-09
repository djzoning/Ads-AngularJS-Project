'use strict';

app.controller('HomeController',
        function($scope, adsService, notifyService, pageSize, categoriesService, townsService){
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

    categoriesService.getCategories(function(data){
        console.log(data);
    },function(error){
        console.log(error);
    })

    townsService.getTowns(function(data){
        console.log(data);
    },function(error){
        console.log(error);
    })

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