angular.module('frontendAngular').controller('signoutController', function ($location, authService) {

  this.session = {};

  this.logoutUser = function(){

    authService.destroySession(angular.toJson(params)).then(
      function(resp){
        $location.path("/");
      }
    );

  }

});
