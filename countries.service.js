angular.module('filtersApp').factory('countriesProvider', function ($http, $q) {
    this.getCountries = function () {
        var deferred = $q.defer();
        $http.get('countries.json').success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };
    return this;
});
