angular.module('countries', []).controller('countriesCtrl', function($http) {
	var countries = this;
	countries.list = [];
	$http.get("countries.json").then(function(response) {
		countries.list = response.data;
	});
});