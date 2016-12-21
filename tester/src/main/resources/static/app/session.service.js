(function (angular) {

  function sessionService($log, localStorage, $window){

    // Instantiate data when service
    // is loaded
	  
		 
	    this._user = localStorage.getItem('session.user');
	    this._accessToken = localStorage.getItem('session.accessToken');
	    
	   
	
	
    this.getUser = function(){
      return this._user;
    };
    
    this.getFullName = function(){
    	if(this._user != null){
    		return this._user.name+" "+this._user.lastname;
    	}
    	
    	return "";
      };

    this.setUser = function(user){
      this._user = user;
      localStorage.setItem('session.user', JSON.stringify(user));
      return this;
    };

    this.getAccessToken = function(){
      return this._accessToken;
    };

    this.setAccessToken = function(token){
      this._accessToken = token;
      localStorage.setItem('session.accessToken', token);
      return this;
    };

    /**
     * Destroy session
     */
    this.destroy = function destroy(){
      this.setUser(null);
      this.setAccessToken(null);
      
    };

  }

  // Inject dependencies
  sessionService.$inject = ['$log', 'localStorage', '$window'];

  // Export
  angular
    .module('tester')
    .service('session', sessionService);

})(angular);