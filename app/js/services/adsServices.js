'use strict';

app.factory('adsService', function($resource, baseServiceUrl){
    var adsResource = $resource(
        baseServiceUrl + '/api/ads',
        null,
        {
            'getAll': {method: 'GET'}
        }
    );

    return {
        getAds: function(params, success, error){
            return adsResource.getAll(params, success, error);
        }
    };
});

app.factory('townsService', function($resource, baseServiceUrl) {
    return {
        //TODO implement a service to get towns
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
