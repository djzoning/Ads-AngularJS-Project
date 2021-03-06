'use strict';

app.controller('AdminUsersController', function($scope, $filter, ngTableParams, adminService, notifyService){

    $scope.ready = false;

    $scope.getUsersParams = {
        'startPage': 1,
        'pageSize': 1000
    };

    var data = [];

    $scope.reloadUsers = function(){

        adminService.getUsers($scope.getUsersParams, function (usersData) {
            $scope.data = usersData;

            data = data.concat(usersData.users);

            if (!(usersData.numPages > $scope.getUsersParams.startPage)) {
                $scope.ready = true;
                $scope.tableParams = new ngTableParams({
                    page: 1,
                    count: 10,
                    sorting: {
                        username: 'asc'
                    }
                }, {
                    total: data.length, // length of data
                    getData: function ($defer, params) {
                        //use build-in angular filter
                        //var orderedData = params.filter() ?
                        //    $filter('filter')(data, params.filter()) :
                        //    data;
                        //orderedData = params.sorting() ?
                        //    $filter('orderBy')(data, params.orderBy()) :
                        //    orderedData;
                        var orderedData = params.sorting() ?
                            $filter('orderBy')(data, params.orderBy()) :
                            data;

                        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });
            } else {
                $scope.getUsersParams.startPage++;
                $scope.reloadUsers();
            }
        }, function (error) {
            notifyService.showError('Loading users failed', error);
        });
    };

    $scope.reloadUsers();

    $scope.saveUserId = function(userId){
        sessionStorage.userId = userId;
    }
});