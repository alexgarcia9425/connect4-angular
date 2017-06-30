(function(){
'use strict';

// Register github-table on core.github module
angular.
  module('connect4').
  component('connect4Board', {
    templateUrl: 'connect4/connect4-board.template.html',
    controllerAs: 'vm',
    controller: ['$route', 'GamesService', Connect4BoardController]
  });

  function Connect4BoardController($route, GamesService) {
  	var vm = this;
  	// TODO: Change to retreive data from service
  	// The board a bucket array for each column
  	//vm.board = getCleanBoad();
    vm.gameState = null;
    vm.board = null;
    vm.turn = null;
    automaticallyUpdateGameState(); // will update gameStatus, board and turn
    vm.player = getPlayer(); // get player 1 or 2 
    vm.pushADisc = pushADisc;
    vm.resetBoard = resetBoard;


  	///////////////////////////////////////
  	////////// Method definitions bellow
  	///////////////////////////////////////

    function automaticallyUpdateGameState() {
      // update game sate right away
      getGameState();
      // and keep updating it every sencond
      // Ideally I would use a websocket
      window.setInterval(getGameState, 1000);
    }

    function getGameState() {
      GamesService.getGameStatus({}, function(response){
        try{
          vm.gameState = response.result.game_state;
          vm.board = vm.gameState.board;
          vm.turn = vm.gameState.turn;
        }
        catch(e) {
          console.log("something went wrong while updating the game status")
        }
      });
    }

    function getPlayer() {
      return $route.current.$$route.data.player;
    }

    function resetBoard() {
      // reseat values
      vm.board = getCleanBoad();
      vm.turn = 1;
      // update game state
      updateGameState();
    }

  	function getCleanBoad() {
  		// To be accessed in a way board[colum][row];
  		var board = {
  			'1' : [],
  			'2' : [],
  			'3' : [],
  			'4' : [],
  			'5' : [],
  			'6' : [],
  			'7' : [],
  		};

  		return board;
  	}

    function updateGameState() {
      vm.gameState.turn = vm.turn;
      vm.gameState.board = vm.board;
      GamesService.updateGameStatus({game_state: vm.gameState});
    }

    function notYourTurn() {
      alert("It's player's" + vm.turn + " turn");
    }

    function pushADisc(column) {
      // Is column full
      if(vm.board[column].length < 6 && vm.player == vm.turn) {
        vm.board[column].push(vm.player);
        // flip turn 
        vm.turn = vm.turn =='1'? '2' : '1';
      }
      else if(vm.turn != vm.player) {
        // if is not the players turn
        notYourTurn();
      }
      // TODO: isThereAWinner() // Will add a .winner class to winner discs
      updateGameState();
    }
  }

 })();