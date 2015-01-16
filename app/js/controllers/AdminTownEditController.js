'use strict';

app.controller('AdminTownEditController', function($scope, $location,
                                                       adminService,
                                                       notifyService){
    $scope.town = JSON.parse(sessionStorage.town);

    $scope.editTown = function(townName){
        adminService.editTown(townName, function(data){
            notifyService.showSuccess('Town edited successfully');
            $location.path('/admin/towns');
        }, function(error){
            notifyService.showError('Editing town failed', error);
        })
    }
});