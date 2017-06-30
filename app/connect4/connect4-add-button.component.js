angular.
  module('connect4').
  component('connect4AddButton', {
    templateUrl: 'connect4/connect4-add-button.template.html',
    controllerAs: 'vm',
    bindings: {
    	column: '<'
    },
    require: {
    	BoardController: '^^connect4Board'
    },
    controller: function(){
    	var vm = this;
    	vm.dropADisc = dropADisc;

    	function dropADisc(column) {
    		vm.BoardController.pushADisc(column);
    	}
    }
  });