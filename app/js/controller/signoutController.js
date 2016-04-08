angular.module('frontendAngular').controller('signoutController', function ($location, authService) {

  this.session = {};

  this.logoutUser = function(){

    authService.destroySession().then(
      function(resp){
        $location.path("/");
      }
    );

  }

});
