
var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http',function($scope,$http) {
	console.log('Hello world controller');

	$http.get('/personlist').success(function (response) {
		console.log('Got data from request');
		$scope.personlist = response;
	})

	$scope.addPerson = function (){
		console.log($scope.person);
		$http.post('/personlist',$scope.person);
	}
}]);


