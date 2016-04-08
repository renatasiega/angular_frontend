var app = angular.module('frontendAngular');

app.config(function($routeProvider) {

  $routeProvider.when("/login", {
    templateUrl: "view/signin.html",
    controller: "signinController"
  });

  $routeProvider.when("/new", {
    templateUrl: "view/signup.html"
  });

  $routeProvider.when("/", {
    templateUrl: "view/main.html",
    auth: true
  });

  $routeProvider.otherwise({redirectTo: "/"});
});

app.run(function($location, $rootScope, $route, authService) {
  $rootScope.$on('$locationChangeStart', function(evt, next, current) {
    var nextPath = $location.path(),
      nextRoute = $route.routes[nextPath];
    if (nextRoute && nextRoute.auth && !authService.isAuthenticated()) {
      event.preventDefault();
      $location.path("/login");
    }
  });
});
