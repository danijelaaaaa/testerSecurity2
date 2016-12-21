(function (angular) {

	  function assignServicesToRootScope($rootScope, auth, session, $state){
	    $rootScope.auth = auth;
	    $rootScope.session = session;
	    
	  /*  $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl){

	    	
	        if(!auth.isLoggedIn()){

	        	$state.go(main.login);

	          // Prevent location change
	          event.preventDefault();
	        }
	      });*/
	    
	    

			    $rootScope.$on('$stateChangeStart', function(event, toState, toParams,
				fromState, fromParams) {
			// console.log("dosao state change start");
			// Here we simply check if logged in but you can
			// implement more complex logic that inspects the
			// state to see if access is allowed or not

		if (toState.name != "main.login") {
				if (!auth.isLoggedIn()) {
					if (toState.name != "main.registration") {
						$state.go('main.login');

						// Prevent state change
						event.preventDefault();
					}
				} else if (!auth.isAdmin()) {

					if (toState.name == "main.questions"
							|| toState.name == "main.categories") {

						// alert("Access denied")
						$state.go('main.login');

						event.preventDefault();
					}
				}
			}
		});
	   

	  }

	  // Inject dependencies
	  assignServicesToRootScope.$inject = ['$rootScope', 'auth', 'session', '$state'];

	  // Export
	  angular
	    .module('tester', ['tester.core', 'tester.category', 'tester.question', 'tester.test', 'ui.router'])
	    .run(assignServicesToRootScope);

	})(angular);