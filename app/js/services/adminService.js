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
        }
    }
});