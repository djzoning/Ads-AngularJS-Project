'use strict';

app.controller('AdminCategoryEditController', function($scope, $location,
                                                       adminService,
                                                       notifyService){
    $scope.category = JSON.parse(sessionStorage.category);

    $scope.editCategory = function(categoryName){
        adminService.editCategory(categoryName, function(data){
            notifyService.showSuccess('Category edited successfully');
            $location.path('/admin/categories');
        }, function(error){
            notifyService.showError('Editing category failed', error);
        })
    }
});