angular.module('filtersApp', []).controller('countriesCtrl', function(countriesProvider) {
    var countries = this;
    countries.list = countriesProvider.getCountries();
    countries.sortOrderAsc = true;
    countries.sortOrder = 'name';

    countries.toggleSortOrder = function() {
        countries.sortOrder = countries.sortOrderAsc ? '-name' : 'name';
        countries.sortOrderAsc = !countries.sortOrderAsc;
    }
});
