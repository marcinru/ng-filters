angular.module('filtersApp').factory('getCountries', function ($http) {
    return $http.get('countries.json');
});
