angular.module('filtersApp').factory('Countries', function ($resource) {
    return $resource('api/countries.json');
});