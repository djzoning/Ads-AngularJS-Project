'use strict';

app.controller('AdminCategoryCreateController', function($scope, $location, adminService, notifyService){
    $scope.createCategory = function(categoryName){
        adminService.createCategory(categoryName, function(){
            notifyService.showSuccess('Category created');
            $location.path('/admin/categories');
        }, function(error){
            notifyService.showError('Creating category failed', error);
        })
    }
});