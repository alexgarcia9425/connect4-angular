'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/games/1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    data: {player: 1}
  });

  $routeProvider.when('/games/2', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    data: {player: 2}
  });
}])

.controller('View1Ctrl', [function() {

}]);