(function(){
angular.
  module('connect4').
  component('connect4ButtonsRow', {
    templateUrl: 'connect4/connect4-buttons-row.template.html',
    controllerAs: 'vm',
    bindings: {
      board: '=board'
    },
    controller: [Connect4RowController]
  });

  function Connect4RowController() {
  	var vm = this;
  }

})();