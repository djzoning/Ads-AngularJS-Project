'use strict';

app.controller('AdminCategoriesController', function($scope, $filter, adminService,
                                                     ngTableParams, notifyService){

    $scope.ready = false;

    $scope.getCategoriesParams = {
        'startPage': 1,
        'pageSize': 100
    };

    var data = [];

    $scope.reloadCategories = function(){
        adminService.getCategories($scope.getCategoriesParams, function(categoriesData){
            $scope.data = categoriesData;

            data = data.concat(categoriesData.categories);

            if (!(categoriesData.numPages > $scope.getCategoriesParams.startPage)){
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
                $scope.getCategoriesParams.startPage++;
                $scope.reloadCategories();
            }
        }, function(error){
            notifyService.showError('Loading categories failed', error);
        })
    };

    $scope.reloadCategories();

    $scope.saveCategoryId = function(categoryId){
        sessionStorage.categoryId = categoryId;
    }
});