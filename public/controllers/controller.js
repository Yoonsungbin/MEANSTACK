
var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http',function($scope,$http) {
	console.log('Hello world controller');

var refresh = function () {
	$http.get('/personlist').success(function (response) {
		console.log('Got data from request');
		$scope.personlist = response;
		$scope.person ="";
	});
};

refresh();
	
	//addPerson Btn
	$scope.addPerson = function (){
		console.log($scope.person);
		$http.post('/addperson',$scope.person).success(function (response){
			console.log(response);
			refresh();
		});
	};

	//remove Btn
	$scope.remove = function (id) {
		console.log(id);
		$http.delete('/deleteperson/' + id).success( function (response) {
			refresh();
		});
	};

	$scope.edit = function (id) {
		console.log(id);
		$http.get('/editperson/'+id ).success ( function (response ){
			$scope.person = response;
		})
	};
}]);


