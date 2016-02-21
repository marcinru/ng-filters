angular.module('filters', []).controller('tableCtrl', function($http) {
	var table = this;
	table.data = [];
	$http.get("data.json").then(function(response) {
		table.data = response.data;
	});
});