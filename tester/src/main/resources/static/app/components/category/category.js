 (function() {
	 "use strict";
 	angular
 		.module('tester.category')
 		.controller('CategoryController', CategoryController);

 	CategoryController.$inject = ['CategoryService', '$scope', '$state', '$stateParams', '$location', 'auth'];
 	function CategoryController(CategoryService, $scope, $state, $stateParams, $location, auth) {
 		
 		
 		/*if(!auth.isLoggedIn()){
 			$state.go("main.login");
 		}*/
 		
 		var catc = this;
 		var promise_categories = {};
 		var promise_add ={};
 		var promise_edit ={};
 		$scope.category = {};
 		
 		promise_categories = CategoryService.getCategories();
 		promise_categories.then(function (data){
 			$scope.categories = data ;
 			console.log($scope.categories);
 		});
 		
 		
 		$scope.addCategory = function(){
 			
 			promise_add = CategoryService.addCategory($scope.category);
 			promise_add.then(function (data) {
	 			
	 			console.log("Dodata nova kategorija");
	 			$state.go("main.categories");

	 		});
 		};
 		
 		$scope.beforeEditCategory = function(categoryId){
 				console.log("Category id "+categoryId);
 				
	 			$state.go("main.editCategory", {id: categoryId});
	 			//$location.path("/editCategory/" + categoryId);
 		};
 		
 		$scope.getCategory = function(){
 			console.log($stateParams.id);
 			promise_edit = CategoryService.getCategory($stateParams.id);
 			promise_edit.then(function (data) {
	 			
	 			console.log("Dobavljena kategorija za edit");
	 			$scope.category = data;


	 		});
		};
		
		$scope.editCategory = function(){
 			
 			promise_add = CategoryService.editCategory($scope.category);
 			promise_add.then(function (data) {
	 			
	 			console.log("Izmjenjena kategorija");
	 			$state.go("main.categories");

	 		});
 		};
 		
 		$scope.removeCategory = function(categoryId){
 			
 			promise_add = CategoryService.removeCategory(categoryId);
 			promise_add.then(function (data) {
	 			
	 			console.log("Izbrisana kategorija");
	 			promise_categories = CategoryService.getCategories();
	 	 		promise_categories.then(function (data){
	 	 			$scope.categories = data ;
	 	 		
	 	 		});

	 		});
 		};
 		
 		
 		$scope.logout = function(){
 			auth.logOut();
 			$state.go("main.login");
 			
 		}
 		
 		
 	

 	}
 })();
