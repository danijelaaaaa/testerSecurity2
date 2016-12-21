(function() {
	"use strict";
	angular
 		.module('tester')
 		.factory('TestService', TestService);


 	TestService.$inject = ['$http', '$q'];
 	function TestService($http, $q){
 		var testService = {

 			getTests: function(){
				var deferred = $q.defer();

				$http({
					url: "http://localhost:8080/tests", 
					method: "GET"
				}).success(function (data) {
					
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri učitavanju kategorija");
				});

				return deferred.promise;
			},
			
			addTest: function(test){
				var deferred = $q.defer();
				
				$http({
					url: "http://localhost:8080/tests", 
					method: "POST",				
					data : test, 
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
			
			removeTest: function(testId){
				var deferred = $q.defer();
				
				$http({
					url: "http://localhost:8080/tests/id/"+testId, 
					method: "DELETE",
					headers: {
	                    'Content-Type': 'application/json'
	         		}
				}).success(function (data) {
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri brisanju testa");
				});
				
				return deferred.promise;
				
			}
			
			
 		};
			

 		return testService;
 	}
 	
 	
 	
 	
})();