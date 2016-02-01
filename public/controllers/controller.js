
var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http',function($scope,$http) {
	console.log('Hello world controller');


	person1 = {
		name : 'Bin',
		email : 'bin@gmail.com',
		age : '26'
	};

	person2 = {
		name : 'David',
		email : 'David@gmail.com',
		age : '26'
	};

	person3 = {
		name : 'Sam',
		email : 'Sam@gmail.com',
		age : '26'
	};

	var personlist = [person1,person2,person3];
	$scope.personlist = personlist;
}]);