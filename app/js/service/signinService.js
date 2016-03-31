angular.module('myapp').factory('AuthenticationService', function($http, $cookies) {
	var authenticationServie = {};

	authenticationServie.login = function(credentials) {
		return $http
			.post('http://localhost:3000/users/login', credentials)
			.then(function(response) {
			});
	};

	authenticationServie.logout = function() {
	};

	return authService;
});
