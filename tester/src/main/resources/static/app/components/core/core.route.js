(function() {
	"use strict";
	angular
		.module('tester.core')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/tests');

		$stateProvider
		.state('main', {
			abstract: true,
			views: {
				'header': {
					templateUrl: 'app/components/core/header.html',
					controller: 'UserController',
					controllerAs: 'userc'
				}
			}
		})
		.state('main.login', {
			url: '/login',
			views: {
				'content@': {
					templateUrl: 'app/components/core/login.html',
					controller: 'UserController',
					controllerAs: 'userc'
				}
			}
		})
		.state('main.registration', {
			url: '/registration',
			views: {
				'content@': {
					templateUrl: 'app/components/core/registration.html',
					controller: 'UserController',
					controllerAs: 'userc'
				}
			}
		})
		.state('main.about', {
			url: '/about',
			views: {
				'content@': {
					templateUrl: 'app/components/core/home.html'
				}
			}
		});
			
	}
})();