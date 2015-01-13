'use strict';

app.factory('adminService', function($http, baseServiceUrl, authService){
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
        }
    }
});