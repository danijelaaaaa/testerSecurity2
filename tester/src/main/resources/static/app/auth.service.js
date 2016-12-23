(function(angular) {

	function AuthService($http, session, $state) {

		/**
		 * Check whether the user is logged in
		 * @returns boolean
		 */
		this.isLoggedIn = function isLoggedIn() {

			return session.getUser() !== null;
		};

		this.isAdmin = function isAdmin() {

			if (session.getUser() != null) {
				return session.getUser().role == 'ADMIN';
			} else {
				return false;
			}
		}

		/**
		 * Log in
		 *
		 * @param credentials
		 * @returns {*|Promise}
		 */
		this.logIn = function(credentials, callback, errorCallback) {
			return $http.post('/users/login', credentials).then(
					function(response) {

						callback(response);

					}, function(response) {

						errorCallback(response);

					});
		};

		/**
		 * Log out
		 *
		 * @returns {*|Promise}
		 */
		this.logOut = function() {
			return $http.post('logout').then(function(response) {
				console.log("Loging out");
				// Destroy session in the browser

				session.destroy();

			});

		};

		this.registrate = function(user, callback, errorCallback) {
			return $http.post('/users/registration', user).then(
					function(response) {
						callback(response);

					}, function(response) {
						errorCallback(response);

					});
		};

	}

	// Inject dependencies
	AuthService.$inject = [ '$http', 'session', '$state' ];

	// Export
	angular.module('tester').service('auth', AuthService);

})(angular);