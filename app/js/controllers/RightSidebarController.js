'use strict';

app.controller('RightSidebarController', function($scope, $rootScope, $location,
        categoriesService, townsService, authService){
    $scope.categories = categoriesService.getCategories();
    $scope.towns = townsService.getTowns();

    $scope.categoryClicked = function(clickedCategoryId){
        $scope.selectedCategoryId = clickedCategoryId;
        $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
    };

    $scope.adminCategoryClicked = function(adminClickedCategoryId){
        $scope.adminSelectedCategoryId = adminClickedCategoryId;
        $rootScope.$broadcast('adminCategorySelectionChanged', adminClickedCategoryId);
    }

    $scope.townClicked = function(clickedTownId){
        $scope.selectedTownId = clickedTownId;
        $rootScope.$broadcast("townSelectionChanged", clickedTownId);
    };

    $scope.adminTownClicked = function(adminClickedTownId){
        $scope.adminSelectedTownId = adminClickedTownId;
        $rootScope.$broadcast('adminTownSelectionChanged', adminClickedTownId);
    }

    $scope.checkUrl = function(){
        return $location.path().indexOf('/user') == -1
            && $location.path().indexOf('/login') == -1
            &&  $location.path().indexOf('/register') == -1;
    }
});