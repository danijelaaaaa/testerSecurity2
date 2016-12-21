(function (angular) {

  function AuthService($http, session, $state){

    /**
    * Check whether the user is logged in
    * @returns boolean
    */
    this.isLoggedIn = function isLoggedIn(){
    	
      return session.getUser() !== null;
    };
    
    
    this.isAdmin = function isAdmin(){
    	
    	if(session.getUser()!= null){
    		return session.getUser().role == 'ADMIN'; 
    	}else{
    		return false;
    	}
    }

    /**
    * Log in
    *
    * @param credentials
    * @returns {*|Promise}
    */
    this.logIn = function(credentials){
      return $http
        .post('/users/login', credentials)
        .then(function(response){
        	
          var data = response.data;

          		
	          session.setUser(data);
	          session.setAccessToken(data.token);
	          
	          $state.go('main.tests');
	          
	          
	          
          //}
        });
    };

    /**
    * Log out
    *
    * @returns {*|Promise}
    */
    this.logOut = function(){
      return $http
        .post('logout')
        .then(function(response){
        	console.log("Loging out");
          // Destroy session in the browser
        	
        	session.destroy();
        	
        
             
         
        });

    };
    
    
    this.registrate = function(user){
        return $http
          .post('/users/registration', user)
          .then(function(response){
            var data = response.data;
            
            //odmah logovanje poslije registracije
            
            session.setUser(data.user);
            session.setAccessToken("trala");
      
            
          });
      };
    
    

  }

  // Inject dependencies
  AuthService.$inject = ['$http', 'session', '$state'];

  // Export
  angular
    .module('tester')
    .service('auth', AuthService);

})(angular);