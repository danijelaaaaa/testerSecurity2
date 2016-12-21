(function() {
	"use strict";
	angular
 		.module('tester')
 		.factory('CategoryService', CategoryService);


 	CategoryService.$inject = ['$http', '$q'];
 	function CategoryService($http, $q){
 		var categoryService = {

 			getCategories: function(){
				var deferred = $q.defer();

				$http({
					url: "http://localhost:8080/categories", 
					method: "GET"
				}).success(function (data) {
					
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri učitavanju kategorija");
				});

				return deferred.promise;
			},
			
			addCategory: function(category){
				var deferred = $q.defer();
				
				$http({
					url: "http://localhost:8080/categories", 
					method: "POST",				
					data : category, 
					headers: {
	                    'Content-Type': 'application/json'
	         		}
				}).success(function (data) {
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri dodavanju kategorije");
				});
				
				return deferred.promise;
				
			},
			
			getCategory: function(categoryId){
				var deferred = $q.defer();
				
				$http({
					url: "http://localhost:8080/categories/id/"+categoryId, 
					method: "GET",				
					headers: {
	                    'Content-Type': 'application/json'
	         		}
				}).success(function (data) {
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri dobavljanju kategorije");
				});
				
				return deferred.promise;
				
			},
			
			editCategory: function(category){
				var deferred = $q.defer();
				
				$http({
					url: "http://localhost:8080/categories", 
					method: "PUT",				
					data : category, 
					headers: {
	                    'Content-Type': 'application/json'
	         		}
				}).success(function (data) {
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri dodavanju kategorije");
				});
				
				return deferred.promise;
				
			},
			
			removeCategory: function(categoryId){
				var deferred = $q.defer();
				
				$http({
					url: "http://localhost:8080/categories/id/"+categoryId, 
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

 		return categoryService;
 	}
 	
 	
 	
 	
})();