angular.module('frontendAngular').config(function($routeProvider) {

  $routeProvider.when("/", {
    templateUrl: "view/signin.html",
    controller: "signinController"
  });

  $routeProvider.when("/signin", {
    templateUrl: "view/signup.html",
    controller: "signupController"
  });



  $routeProvider.otherwise({redirectTo: "/"});
});
