'use strict';

app.factory('userService', function($http,baseServiceUrl, authService){
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
            // TODO
        }
    }
});

app.factory('userInfoService', function($resource, baseServiceUrl, authService){
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
        editProfile: function(editedUserInfo, success, error){
            return userInfoResource.edit(editedUserInfo, success, error);
        }
    }
});