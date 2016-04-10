angular.module('filtersApp').factory('Countries', function ($resource) {
    return $resource('countries.json');
});