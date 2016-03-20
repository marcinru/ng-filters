angular.module('filtersApp').factory('countriesProvider', function () {
    this.getCountries = function () {
        return [
            { "id": 1, "name": "Sweden", "capital": "Stockholm" },
            { "id": 2, "name": "Poland", "capital": "Warsaw" },
            { "id": 3, "name": "Norway", "capital": "Oslo" },
            { "id": 4, "name": "Germany", "capital": "Berlin" },
            { "id": 5, "name": "United Kingdom", "capital": "London" },
            { "id": 6, "name": "Australia", "capital": "Canberra" },
            { "id": 7, "name": "Zimbabwe", "capital": "Harare" },
            { "id": 8, "name": "Denmark", "capital": "Copenhagen" }
        ];
    };
    return this;
});
