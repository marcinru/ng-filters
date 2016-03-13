angular.module('filters', []).controller('countriesCtrl', function($http) {
    var countries = this;
    countries.list = [];
    $http.get('countries.json').then(function(response) {
        countries.list = response.data;
    });
    countries.sortOrderAsc = true;
    countries.sortOrder = 'name';

    countries.toggleSortOrder = function() {
        countries.sortOrder = countries.sortOrderAsc ? '-name' : 'name';
        countries.sortOrderAsc = !countries.sortOrderAsc;
    }
});
