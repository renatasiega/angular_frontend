angular.module('frontendAngular').factory('authService', function($http, $cookies) {
	var authService = {};

	authService.createUser = function(params) {
		return $http
			.post('http://localhost:3000/users', params)
			.then(function(resp){
				console.log(resp);
				return resp;
			});

	};

	authService.createSession = function(credentials) {
		return $http
			.post('http://localhost:3000/sessions', credentials)
			.then(function(resp){

				var user = resp.data;
				var today = new Date();
				var expired = new Date(today);
				expired.setDate(today.getDate() + 1);
				$cookies.put('userId', user.id, {expires: expired});
				$cookies.put('userName', user.name, {expires: expired});
				$cookies.put('userMail', user.email, {expires: expired});

				return resp;
			});
	};

	authService.destroySession = function(params) {
		$cookies.remove('userId');
		$cookies.remove('userName');
		$cookies.remove('userMail');
		return $http
			.delete('http://localhost:3000/sessions', params)
			.then(function(resp){
				console.log(resp);
				return resp;
			});


	};

	authService.isAuthenticated = function() {
		var userId = $cookies.get('userId');
		authService.loggeduser = userId;
		return !!userId;
	};

	return authService;
});
