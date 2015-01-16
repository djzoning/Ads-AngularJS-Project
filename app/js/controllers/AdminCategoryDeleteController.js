'use strict';

app.controller('AdminCategoryDeleteController', function($scope, $location,
                                                         adminService,
                                                         notifyService){
    $scope.category = JSON.parse(sessionStorage.category);

    $scope.deleteCategory = function(categoryId){
        adminService.deleteCategory(categoryId, function(data){
            notifyService.showSuccess('Category deleted');
            $location.path('/admin/categories');
        }, function(error){
            notifyService.showError('Deleting category failed', error);
        })
    }
});