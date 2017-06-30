angular.
  module('connect4').
  factory('GamesService', ['$resource',
    function($resource) {
      return $resource('https://safe-mesa-68625.herokuapp.com/games/the_only_one.php', {}, {
        getGameStatus: {
          method: 'GET'
        },
        updateGameStatus: {
        	method: 'PUT'
        }
      });
    }
  ]);