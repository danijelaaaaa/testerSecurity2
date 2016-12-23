 (function() {
	 "use strict";
 	angular
 		.module('tester.test')
 		.controller('TestController', TestController);

 	TestController.$inject = ['TestService', 'QuestionService', '$scope', '$state', '$stateParams', '$location'];
 	function TestController(TestService, QuestionService, $scope, $state, $stateParams, $location) {
 		var catc = this;
 		var promise_tests = {};
 		var promise_add = {};
 		var promise_edit = {};
 		var promise_questions = {};
 		$scope.questions = {};
 		$scope.test = {};
 		$scope.test.questions = [];
 		$scope.question_cb = [];
 		promise_tests = TestService.getTests();
 		promise_tests.then(function (data){
 			$scope.tests= data ;
 			console.log(data);
 		});
 		
 		
 		$scope.initAddTest = function(){
 			
 			promise_questions = QuestionService.getQuestions();
 	 		promise_questions.then(function (data){
 	 			$scope.questions = data ;
 	 			console.log(data);

 	 			
 	 		});
 	 		
 	 		console.log($scope.question_cb);
 			
 		};
 		
 		$scope.addTest = function(){
 	 		console.log($scope.question_cb);
 	 		angular.forEach($scope.question_cb, function(value, key) {
 	 			if(value){
 	 				var questionTemp = {};
	 	 			questionTemp.id = key;
	 	 			$scope.test.questions.push(questionTemp);
 	 			}
	 		});	

 	 		
 	 		promise_add = TestService.addTest($scope.test);
 			promise_add.then(function (data) {
	 			
	 			console.log("Dodat je novi test");
	 			$state.go("main.tests");

	 		});
	 		
 		};
 		
 		
 		$scope.removeTest = function(testId){
 			
 			promise_add = TestService.removeTest(testId);
 			promise_add.then(function (data) {
	 			
	 			console.log("Izbrisan test");
	 			promise_tests = TestService.getTests();
	 	 		promise_tests.then(function (data){
	 	 			$scope.tests = data ;
	 	 		
	 	 		});

	 		});
 		};
 		
 		 $scope.popUpPdf = function() {
 	         var printDoc = new jsPDF();
 	         printDoc.fromHTML($('#pdf').get(0), 10, 10, {'width': 180});
 	         printDoc.autoPrint();
 	         printDoc.output("dataurlnewwindow"); // this opens a new popup,  after this the PDF opens the print window view but there are browser inconsistencies with how this is handled
 	     }
 		
 		
 	

 	}
 })();
