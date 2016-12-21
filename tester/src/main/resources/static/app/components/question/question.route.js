(function() {
	"use strict";
	angular
		.module('tester.question')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main.questions', {
				url: '/questions',
				views: {
					'content@': {
						templateUrl: 'app/components/question/questions.html',
						controller: 'QuestionController',
						controllerAs: 'quc'
					}
				}
			}).state('main.addQuestion', {
				url: '/addQuestion',
				views: {
					'content@': {
						templateUrl: 'app/components/question/addQuestion.html',
						controller: 'QuestionController',
						controllerAs: 'quc'
					}
				}
			}).state('main.editQuestion', {
				url: '/editQuestion/:id',
				views: {
					'content@': {
						templateUrl: 'app/components/question/editQuestion.html',
						controller: 'QuestionController',
						controllerAs: 'quc'
					}
				}
			});
	}
	
	
})();