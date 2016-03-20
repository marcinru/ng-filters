angular.module('filtersApp', []).controller('countriesCtrl', function(getCountries) {
    var countries = this;
    countries.list = [];
    getCountries.then(function (result) {
        countries.list = result.data;
    });
    countries.sortOrderAsc = true;
    countries.sortOrder = 'name';

    countries.toggleSortOrder = function() {
        countries.sortOrder = countries.sortOrderAsc ? '-name' : 'name';
        countries.sortOrderAsc = !countries.sortOrderAsc;
    }
});
