var app_paginate = angular.module('paginate', []);

app_paginate.config(['$routeProvider',
  function($routeProvider) {
    console.log($routeProvider);
    
    $routeProvider.
      when('/', {
        templateUrl: 'partial/home.html',
        controller: 'PaginateController'
      }).otherwise({
        redirectTo: 'partial/home.html'
      });
  }]);

app_paginate.controller('PaginateController', function($scope) {
  console.log('Bala7');
  $scope.currentItems = [];
  $scope.itemsPerPage = 10;
  $scope.currentPage = 0;
  
  $scope.createData = function() {
    $scope.items = [];
    for (i=1;i<=100;i++) {
      $scope.items.push({ text: 'item '+i});
    }
    console.log($scope.items.length);
  };
  
  $scope.selectItemsToDisplay = function() {
    var begin = (($scope.currentPage) * $scope.itemsPerPage);
    var end = begin + $scope.itemsPerPage;
    $scope.currentItems = $scope.items.slice(begin, end);
    console.log($scope.currentItems);
  };

  $scope.pageChanged = function() {
    $scope.selectItemsToDisplay();
  };

  $scope.prevPage=function() {
    if ($scope.currentPage > 0) {
        $scope.currentPage--;
    }
  };

  $scope.nextPage=function() {
    if ($scope.currentPage <  $scope.currentItems.length) {
        $scope.currentPage++;
    }
  };

  $scope.range=function(start, end) {
    var ret = [];
    if (!end) {
        end = start;
        start = 0;
    }
    for (var i = start; i < end; i++) {
        ret.push(i);
    }
    return ret;
  };

  $scope.setPage=function() {
    console.log(this.n);
    $scope.currentPage = this.n;
    $scope.selectItemsToDisplay();
  };

  $scope.createData(); 
  $scope.selectItemsToDisplay();
  
});