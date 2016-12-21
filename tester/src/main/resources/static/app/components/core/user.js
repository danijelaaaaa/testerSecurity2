 (function() {
	 "use strict";
 	angular
 		.module('tester')
 		.controller('UserController', UserController);

 	UserController.$inject = ['$scope', 'auth', '$state'];
 	function UserController($scope, auth, $state) {
 		
 		$scope.logIn = function(user){
 			auth.logIn(user);
 			
 			$state.go('main.categories');
 			
 		};
 		
 		$scope.goToRegistration = function(user){
 			$state.go('main.registration');
 		}
 		
 		$scope.registration = function(user){
 			auth.registrate(user);
 			
 			$state.go("main.categories");
 		}
 		
 		
 		$scope.logOut = function(){
 			auth.logOut();
 			$state.go("main.login");
 		}
 			
 			
 		
 		
 	}
 })();
