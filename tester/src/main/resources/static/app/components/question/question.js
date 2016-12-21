 (function() {
	 "use strict";
 	angular
 		.module('tester.question')
 		.controller('QuestionController', QuestionController);

 	QuestionController.$inject = ['QuestionService', 'CategoryService','$scope', '$state', '$stateParams', '$location'];
 	function QuestionController(QuestionService, CategoryService, $scope, $state, $stateParams, $location) {
 		var quc = this;
 		var promise_questions = {};
 		var promise_categories = {};
 		var promise_add ={};
 		var promise_edit ={};
 		$scope.category = {};
 		$scope.question = {};
 		$scope.question.answers = [];
 		
 		
 		promise_questions = QuestionService.getQuestions();
 		promise_questions.then(function (data){
 			$scope.questions = data ;
 			console.log($scope.questions);
 		});
 		
 	
 		
 		$scope.initAddQuestion = function(){
 	 		promise_categories = CategoryService.getCategories();
 	 		promise_categories.then(function (data){
 	 			$scope.categories = data ;
 	 		});
 		}
 		
 		
 		$scope.saveAnswer = function(){
 			console.log("Tu sam");
 			$scope.question.answers.push($scope.answerTemp);
 			$scope.answerTemp = {};
 			$scope.showAddAnswer = false;
 		};
 		
 		
 		
 	
 		$scope.addQuestion = function(){
 			console.log("Ispis pitanja");
 			console.log($scope.question);
 			
 			
 			promise_add = QuestionService.addQuestion($scope.question);
 			promise_add.then(function (data) {
	 			
	 			console.log("Dodato je novo pitanje");
	 			$state.go("main.questions");

	 		});
 		};
 		
 		
 		$scope.beforeEditQuestion = function(questionId){
 				
 			console.log("Question id "+questionId);
				
 			$state.go("main.editQuestion", {id: questionId});
	 		
 		};
 		
 		
 		
 		$scope.getQuestion = function(){
 			console.log($stateParams.id);
 			promise_edit = QuestionService.getQuestion($stateParams.id);
 			promise_edit.then(function (data) {
	 			
	 			console.log("Dobavljeno pitanje  za edit");
	 			console.log(data);
	 			$scope.question = data;
	 			
	 			promise_categories = CategoryService.getCategories();
	 	 		promise_categories.then(function (data){
	 	 			$scope.categories = data ;
	 	 			
	 	 		});


	 		});
		};
		
		
		$scope.editQuestion = function(){
			console.log("category")
			
			angular.forEach($scope.categories, function(value, key) {
				if(value.name == $scope.question.category.name){
					$scope.question.category.id = value.id;
				}
			});
			

 			promise_add = QuestionService.addQuestion($scope.question);
 			promise_add.then(function (data) {
	 			
	 			console.log("Izmjenjeno je pitanje");
	 			$state.go("main.questions");

	 		});
					
		};
		
		$scope.removeQuestion = function(questionId){
			
			promise_add = QuestionService.removeQuestion(questionId);
 			promise_add.then(function (data) {
	 			
	 			console.log("Izbrisano pitanje");
	 			promise_questions = QuestionService.getQuestions();
	 	 		promise_questions.then(function (data){
	 	 			$scope.questions = data ;
	 	 		
	 	 		});

	 		});
			
		};
		

	
 		

 	}
 })();
