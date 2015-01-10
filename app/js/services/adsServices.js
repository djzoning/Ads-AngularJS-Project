'use strict';

app.factory('adsService', function($http, $resource, baseServiceUrl, authService){
    var adsResource = $resource(
        baseServiceUrl + '/api/ads',
        null,
        {
            'getAll': {method: 'GET'}
        }
    );

    var userAdsResource = $resource(
        baseServiceUrl + '/api/user/ads',
        null,
        {
            'getUserAds': {
                method: 'GET',
                headers: authService.getAuthHeaders()
            },
            'delete': {
                method: 'DELETE',
                headers: authService.getAuthHeaders()
            }
        }
    );

    return {
        getAds: function(params, success, error){
            return adsResource.getAll(params, success, error);
        },
        getUserAds: function(params, success, error){
            return userAdsResource.getUserAds(params, success, error);
        },
        deleteAd: function(id, success, error){
            var request ={
                method: 'DELETE',
                url: baseServiceUrl + '/api/user/ads/' + id,
                headers: authService.getAuthHeaders()
            };

            $http(request).success(success).error(error);
        }
    };
});

app.factory('userAdsService', function($http, baseServiceUrl, authService){
    return {
        getUserAds: function(success, error){
            var request = {
                method: 'GET',
                url: baseServiceUrl + '/api/user/ads',
                headers: authService.getAuthHeaders()
            };

            return $http(request).success(success).error(error);
        }
    };
});

app.factory('townsService', function($resource, baseServiceUrl) {
    var townsResource = $resource(baseServiceUrl + '/api/towns');

    return {
        getTowns: function(success, error){
            return townsResource.query(success, error);
        }
    };
});

app.factory('categoriesService', function($resource, baseServiceUrl){
    var categoriesResource = $resource(baseServiceUrl + '/api/categories');

    return {
        getCategories : function(success, error){
            return categoriesResource.query(success, error);
        }
    };
});
