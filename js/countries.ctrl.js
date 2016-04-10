angular.module('filtersApp').controller('countriesCtrl', function(Countries) {
    var countries = this;
    countries.list = Countries.query();

    countries.sortOrderAsc = true;
    countries.sortOrder = 'name';

    countries.toggleSortOrder = function() {
        countries.sortOrder = countries.sortOrderAsc ? '-name' : 'name';
        countries.sortOrderAsc = !countries.sortOrderAsc;
    }
});