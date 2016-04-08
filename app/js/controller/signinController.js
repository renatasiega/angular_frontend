angular.module('frontendAngular').controller('signinController', function ($location, authService) {

  this.session = {};

  this.authUser = function(){

    var params = {
      "session": this.session
    }

    authService.createSession(angular.toJson(params)).then(
      function(resp){
        $location.path("/");
      }
    );

  }

});
