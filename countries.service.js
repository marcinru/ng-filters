angular.module('filtersApp').factory('countriesProvider', ['$http', '$q', function ($http, $q) {
    return {
        getCountries: function () {
            var deferred = $q.defer();
            $http.get('countries.json').success(function (data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        }
    };
}]);
