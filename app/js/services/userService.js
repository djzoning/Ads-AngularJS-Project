'use strict';

app.factory('userService', function($http, baseServiceUrl, authService){
    return {
        createNewAd: function(adData, success, error){
            var request = {
                method: 'POST',
                url: baseServiceUrl + '/api/user/ads',
                headers: authService.getAuthHeaders(),
                data: adData
            };
            $http(request).success(success).error(error);
        },
        getUserAds: function(params, success, error){
            var request = {
                method: 'GET',
                url: baseServiceUrl + '/api/user/ads',
                headers: authService.getAuthHeaders(),
                params: params
            };
            $http(request).success(success).error(error);
        },
        deactivateAd: function (id, success, error){
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/user/ads/deactivate/' + id,
                headers: authService.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        publishAgainAd: function (id, success, error) {
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/user/ads/publishagain/' + id,
                headers: authService.getAuthHeaders()
            };

            $http(request).success(success).error(error);
        },
        deleteAd: function(id, success, error){
            var request = {
                method: 'DELETE',
                url: baseServiceUrl + '/api/user/ads/' + id,
                headers: authService.getAuthHeaders()
            };

            $http(request)
                .success(success)
                .error(error);
        },
        editAd: function(id, userData, success, error){
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/user/ads/' + id,
                headers: authService.getAuthHeaders(),
                data: userData
            };

            $http(request).success(success).error(error);
        },
        changePassword: function(userPass, success, error){
            var request= {
                method: 'PUT',
                url: baseServiceUrl + '/api/user/changepassword',
                headers: authService.getAuthHeaders(),
                data: userPass
            };

            $http(request).success(success).error(error);
        }
    }
});

app.factory('userInfoService', function($http, $resource, baseServiceUrl, authService){
    var userInfoResource = $resource(
        baseServiceUrl + '/api/user/profile',
        null,
        {
            getInfo: {
                method: 'GET',
                headers: authService.getAuthHeaders()
            },
            edit: {
                method: 'PUT',
                headers: authService.getAuthHeaders()
            }
        }
    );

    return {
        getUserInfo: function(success, error){
            return userInfoResource.getInfo(success, error);
        },
        editProfile: function(userInfo, success, error){
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/api/user/profile',
                data: userInfo,
                headers: authService.getAuthHeaders()
            };

            $http(request).success(success).error(error);
        }
    }
});