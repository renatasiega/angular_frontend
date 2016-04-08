angular.module('frontendAngular').controller('signupController', function($location, authService) {

  this.user = {};

  this.saveUser = function(){

    var params = {
      "user": this.user
    }

    authService.createUser(angular.toJson(params)).then(
      function(resp){
        $location.path("/login");
      }
    );

  }

});
