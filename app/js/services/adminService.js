'use strict';

app.factory('adminService', function($http, $resource, baseServiceUrl, authService){
    var usersResource = $resource(
        baseServiceUrl + '/api/admin/users',
        null,
        {
            'getAll': {
                method: 'GET',
                headers: authService.getAuthHeaders()
            }
        }
    );

    var categoriesResource = $resource(
        baseServiceUrl + '/api/admin/categories',
        null,
        {
            'getAll': {
                method: 'GET',
                headers: authService.getAuthHeaders()
            }
        }
    );

    var townsResource = $resource(
        baseServiceUrl + '/api/admin/towns',
        null,
        {
            'getAll': {
                method: 'GET',
                headers: authService.getAuthHeaders()
            }
        }
    );

    return {
        approveAd: function(id, success, error){
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/admin/ads/approve/' + id,
                headers: authService.getAuthHeaders()
            };

            $http(request).success(success).error(error);
        },
        rejectAd: function(id, success, error){
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/admin/ads/reject/' + id,
                headers: authService.getAuthHeaders()
            };

            $http(request).success(success).error(error);
        },
        deleteAd: function(id, success, error){
            var request = {
                method: 'DELETE',
                url: baseServiceUrl + '/api/admin/ads/' + id,
                headers: authService.getAuthHeaders()
            };

            $http(request).success(success).error(error);
        },
        editAd: function(id, adData, success, error){
            adData.changeimage = true;
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/admin/ads/' + id,
                headers: authService.getAuthHeaders(),
                data: adData
            };

            $http(request).success(success).error(error);
        },
        getUsers: function(params, success, error){
            return usersResource.getAll(params, success, error);
        },
        getUserById: function(id, success, error){
            var request = {
                method: 'GET',
                url: baseServiceUrl + '/api/admin/users/' + id,
                headers: authService.getAuthHeaders(),
            };

            $http(request).success(success).error(error);
        },
        editUser: function(username, user, success, error){
            $http({
                method: 'PUT',
                url: baseServiceUrl + '/api/admin/user/' + username,
                headers: authService.getAuthHeaders(),
                data: user
            }).success(success).error(error);
        },
        changePassword: function(pass, success, error){
            $http({
                method: 'PUT',
                url: baseServiceUrl + '/api/admin/setpassword',
                headers: authService.getAuthHeaders(),
                data: pass
            }).success(success).error(error);
        },
        deleteUser: function(username, success, error){
            $http({
                method: 'DELETE',
                url: baseServiceUrl + '/api/admin/user/' + username,
                headers: authService.getAuthHeaders()
            }).success(success).error(error);
        },
        getCategories: function(params, success, error){
            return categoriesResource.getAll(params, success, error);
        },
        editCategory: function(category, success, error){
            $http({
                method: 'PUT',
                url: baseServiceUrl + '/api/admin/categories/' + category.id,
                headers: authService.getAuthHeaders(),
                data: {name: category.username}
            }).success(success).error(error);
        },
        deleteCategory: function(id, success, error){
            $http({
                method: 'DELETE',
                url: baseServiceUrl + '/api/admin/categories/' + id,
                headers: authService.getAuthHeaders()
            }).success(success).error(error);
        },
        createCategory: function(categoryName, success, error){
            $http({
                method: 'POST',
                url: baseServiceUrl + '/api/admin/categories',
                headers: authService.getAuthHeaders(),
                data:{name: categoryName}
            }).success(success).error(error);
        },
        getTowns: function(params, success, error){
            return townsResource.getAll(params, success, error);
        },
        createTown: function(townName, success, error){
            $http({
                method: 'POST',
                url: baseServiceUrl + '/api/admin/towns',
                headers: authService.getAuthHeaders(),
                data: {name: townName}
            }).success(success).error(error);
        },
        editTown: function(town, success, error){
            $http({
                method: 'PUT',
                url: baseServiceUrl + '/api/admin/towns/' + town.id,
                headers: authService.getAuthHeaders(),
                data: {name: town.username}
            }).success(success).error(error);
        },
        deleteTown: function(id, success, error){
            $http({
                method: 'DELETE',
                url: baseServiceUrl + '/api/admin/towns/' + id,
                headers: authService.getAuthHeaders()
            }).success(success).error(error);
        },
        getAdById: function(id, success, error){
            $http({
                method: 'GET',
                url: baseServiceUrl + '/api/admin/ads/' + id,
                headers: authService.getAuthHeaders()
            }).success(success).error(error);
        }
    }
});