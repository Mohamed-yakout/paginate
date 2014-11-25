var app_paginate = angular.module('paginate', []);

app_paginate.config(['$routeProvider',
  function($routeProvider) {
    console.log($routeProvider);
    
    $routeProvider.
      when('/home', {
        templateUrl: 'partial/home.html',
        controller: 'PaginateController'
      }).otherwise({
        redirectTo: 'partial/home.html'
      });
  }]);

