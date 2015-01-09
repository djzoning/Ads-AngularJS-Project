'use strict';

app.controller('RightSidebarController', function($scope, categoriesService, townsService){
    $scope.categories = categoriesService.getCategories();
    $scope.towns = townsService.getTowns();
});