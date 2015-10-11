var MainCtrl = require("./MainCtrl").MainCtrl;

var app = angular.module('develo', ['ui.router']);
app.run();

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
	});
	$stateProvider.state('root',{
		url:"/",
		templateUrl:"templates/test.html",
		controller: "MainCtrl"
	})
}]);

app.controller('MainCtrl',function($scope, $state){
	new MainCtrl($scope, $state);
});
