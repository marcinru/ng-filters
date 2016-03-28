angular.module('filtersApp', []).controller('countriesCtrl', ['countriesProvider', function(countriesProvider) {
    var countries = this;
    countriesProvider.getCountries().then(function (data) {
        countries.list = data;
    });
    countries.sortOrderAsc = true;
    countries.sortOrder = 'name';

    countries.toggleSortOrder = function() {
        countries.sortOrder = countries.sortOrderAsc ? '-name' : 'name';
        countries.sortOrderAsc = !countries.sortOrderAsc;
    }
}]);
