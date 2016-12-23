(function(angular) {

	function assignServicesToRootScope($rootScope, auth, session, $state) {
		$rootScope.auth = auth;
		$rootScope.session = session;

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams,
				fromState, fromParams) {

			if (toState.name != "main.login") {
				if (!auth.isLoggedIn()) {
					if (toState.name != "main.registration") {
						$state.go('main.login');
						event.preventDefault();
					}
				} else if (!auth.isAdmin()) {

					if (toState.name == "main.questions"
							|| toState.name == "main.categories") {

						$state.go('main.login');
						event.preventDefault();
					}
				}
			}
		});

	}

	// Inject dependencies
	assignServicesToRootScope.$inject = [ '$rootScope', 'auth', 'session',
			'$state' ];

	// Export
	angular.module(
			'tester',
			[ 'tester.core', 'tester.category', 'tester.question',
					'tester.test', 'ui.router' ])
			.run(assignServicesToRootScope);

})(angular);