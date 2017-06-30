angular.
  module('connect4').
  factory('GamesService', ['$resource',
    function($resource) {
      return $resource('../../connect4-server/games/the_only_one.php', {}, {
        getGameStatus: {
          method: 'GET'
        },
        updateGameStatus: {
        	method: 'PUT'
        }
      });
    }
  ]);