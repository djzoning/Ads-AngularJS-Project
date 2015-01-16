'use strict';

app.controller('AdminTownsController', function($scope, $filter, adminService, notifyService, ngTableParams){
    $scope.ready = false;
    $scope.getTownsParams = {
        'startPage': 1,
        'pageSize': 30
    };
    var data = [];
    $scope.reloadTowns = function(){
        adminService.getTowns($scope.getTownsParams,
            function(townsData) {
                $scope.data = townsData;
                data = data.concat(townsData.towns);

                if (!(townsData.numPages > $scope.getTownsParams.startPage)){
                    $scope.ready = true;
                    $scope.tableParams = new ngTableParams({
                        page: 1,
                        count: 10,
                        sorting: {
                            username: 'asc'
                        }
                    }, {
                        total: data.length,
                        getData: function($defer, params){
                            var orderedData = params.sorting() ?
                                $filter('orderBy')(data, params.orderBy()) :
                                data;

                            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                        }
                    });
                } else {
                    $scope.getTownsParams.startPage++;
                    $scope.reloadTowns();
                }
            },
            function(error) {
                notifyService.showError('Loading towns failed', error);
            });
    };
    $scope.reloadTowns();
});