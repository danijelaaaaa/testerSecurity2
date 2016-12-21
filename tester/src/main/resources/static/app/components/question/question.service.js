(function() {
	"use strict";
	angular
 		.module('tester')
 		.factory('QuestionService', QuestionService);


 	QuestionService.$inject = ['$http', '$q', 'session'];
 	function QuestionService($http, $q, session){
 		var questionService = {

 			getQuestions: function(){
				var deferred = $q.defer();

				$http({
					url: "http://localhost:8080/questions", 
					method: "GET",
					headers: {
	                    'Authorization': session.getAccessToken()
	         		}
				}).success(function (data) {
					
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri učitavanju pitanja");
				});

				return deferred.promise;
			},
			
			addQuestion: function(question){
				var deferred = $q.defer();
				
				$http({
					url: "http://localhost:8080/questions", 
					method: "POST",				
					data : question, 
					headers: {
	                    'Content-Type': 'application/json'
	         		}
				}).success(function (data) {
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri dodavanju pitanja");
				});
				
				return deferred.promise;
				
			},
			
			getQuestion: function(questionId){
				var deferred = $q.defer();
				
				$http({
					url: "http://localhost:8080/questions/id/"+questionId, 
					method: "GET",				
					headers: {
	                    'Content-Type': 'application/json'
	         		}
				}).success(function (data) {
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri dobavljanju pitanja");
				});
				
				return deferred.promise;
				
			},
			
			removeQuestion: function(questionId){
				var deferred = $q.defer();
				
				$http({
					url: "http://localhost:8080/questions/id/"+questionId, 
					method: "DELETE",
					headers: {
	                    'Content-Type': 'application/json'
	         		}
				}).success(function (data) {
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri dodavanju kategorije");
				});
				
				return deferred.promise;
				
			}
			
		

		};

 		return questionService;
 	}
 	
 	
 	
 	
})();