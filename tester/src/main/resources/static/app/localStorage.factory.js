(function () {

  function localStorageServiceFactory($window){
    if($window.localStorage){
      return $window.localStorage;
    }
    throw new Error('Local storage support is needed');
  }

  // Inject dependencies
  localStorageServiceFactory.$inject = ['$window'];

  // Export
  angular
    .module('tester')
    .factory('localStorage', localStorageServiceFactory);

})();