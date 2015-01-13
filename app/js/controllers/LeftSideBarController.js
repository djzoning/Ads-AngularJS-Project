'use strict';

app.controller('LeftSideBarController', function($scope, $location, $rootScope){
    $scope.checkUrl = function(){
        return $location.path() == '/user/ads';
    };

    $scope.adminCheckUrl = function() {
        return $location.path() == '/admin/home';
    }

    $scope.statuses = ['Inactive', 'Published', 'WaitingApproval', 'Rejected'];

    $scope.statusClicked = function(status){
        $scope.selectedStatus = status;
        $rootScope.$broadcast('statusSelectionChanged', status);
    };

    $scope.adminStatusClicked = function(status){
        $scope.adminSelectedStatus = status;
        $rootScope.$broadcast('adminStatusSelectionChanged', status);
    };
});