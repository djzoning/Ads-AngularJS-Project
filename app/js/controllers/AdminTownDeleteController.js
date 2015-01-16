'use strict';

app.controller('AdminTownDeleteController', function($scope, $location,
                                                         adminService,
                                                         notifyService){
    $scope.town = JSON.parse(sessionStorage.town);
    $scope.deleteTown = function(townId){
        adminService.deleteTown(townId, function(data){
            notifyService.showSuccess('Town deleted');
            $location.path('/admin/towns');
        }, function(error){
            notifyService.showError('Deleting town failed', error);
        })
    }
});