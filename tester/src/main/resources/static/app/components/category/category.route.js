(function() {
	"use strict";
	angular
		.module('tester.category')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main.categories', {
				url: '/categories',
				views: {
					'content@': {
						templateUrl: 'app/components/category/categories.html',
						controller: 'CategoryController',
						controllerAs: 'catc'
					}
				}
			})
			.state('main.addCategory', {
				url: '/addCategory',
				views: {
					'content@': {
						templateUrl: 'app/components/category/addCategory.html',
						controller: 'CategoryController',
						controllerAs: 'catc'
					}
				}
			})
			.state('main.editCategory', {
				url: '/editCategory/:id',
				views: {
					'content@': {
						templateUrl: 'app/components/category/editCategory.html',
						controller: 'CategoryController',
						controllerAs: 'catc'
					}
				}
			});
		
	}
})();