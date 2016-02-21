angular.module('filters', []).controller('tableCtrl', function() {
	var table = this;
	table.data = [
		{ id: 1, name: "Marcin", city: "Karlskrona" },
		{ id: 2, name: "Kinga", city: "Stockholm" },
		{ id: 3, name: "Natalia", city: "Poznan" },
		{ id: 4, name: "Krzysztof", city: "London" },
		{ id: 5, name: "Tomasz", city: "Warsaw" }
	];
});