angular.
  module('connect4').
  component('connect4Disc', {
    templateUrl: 'connect4/connect4-disc.template.html',
    controllerAs: 'vm',
    bindings: {
    	// Might be undefined, 1, 2, 1w or 2w
    	// stands for empty space, player 1 disc, player 2 disc,
    	// player 1 disc part of a winning line or player 2 disc part of a winning line
    	discdata: '=discdata', 
    },
  });