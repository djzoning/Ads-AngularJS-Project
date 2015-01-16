'use strict';

app.controller('AdminTownCreateController', function($scope, $location, adminService, notifyService){
    $scope.createTown = function(townName){
        adminService.createTown(townName,
        function(data){
            notifyService.showSuccess('Town created');
            $location.path('/admin/towns');
        }, function(error){
            notifyService.showError('Creating towns failed', error);
        })
    }

});