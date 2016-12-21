(function() {
	"use strict";
	angular
		.module('tester.test')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main.tests', {
				url: '/tests',
				views: {
					'content@': {
						templateUrl: 'app/components/test/tests.html',
						controller: 'TestController',
						controllerAs: 'testc'
					}
				}
			}).state('main.addTest', {
				url: '/addTest',
				views: {
					'content@': {
						templateUrl: 'app/components/test/addTest.html',
						controller: 'TestController',
						controllerAs: 'testc'
					}
				}
			});
	}
	
	
})();