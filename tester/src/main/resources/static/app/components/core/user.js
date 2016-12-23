(function() {
	"use strict";
	angular.module('tester').controller('UserController', UserController);

	UserController.$inject = [ '$scope', 'auth', '$state', 'session' ];
	function UserController($scope, auth, $state, session) {

		$scope.message = false;

		$scope.logIn = function(user) {
			auth
				.logIn(
					user,
					function(response) {
						var data = response.data;
						session.setUser(data);
						session.setAccessToken(data.token);
						$state.go('main.tests');
						$scope.message = false;
					},
					function(response) {
						var status = response.status;
						if (status == '404') {
							$scope.message = "Invalid login, try again";
						} else {
							$scope.message = "Sorry, it looks like there was an error, try again";
						}
					});
		};

		$scope.goToRegistration = function(user) {
			$state.go('main.registration');
		}

		$scope.registration = function(user) {
			var username = user.username;
			auth.registrate(user, function(response) {

				var data = response.data;
				session.setUser(data.user);
				session.setAccessToken(data.token);
				$scope.message = false;
				$state.go("main.tests");

			}, function(response) {

				var status = response.status;
				if (status == '409') {
					"A User with username " + username + " already exist"
				}
			});
		};

		$scope.logOut = function() {
			auth.logOut();
			$state.go("main.login");
		}
	}
})();
