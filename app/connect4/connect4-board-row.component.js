(function(){
angular.
  module('connect4').
  component('connect4BoardRow', {
    templateUrl: 'connect4/connect4-board-row.template.html',
    controllerAs: 'vm',
    bindings: {
    	rowNumber: '=row',
    	board: '= board'
    },
    controller: [Connect4RowController]
  });

  function Connect4RowController() {
  	var vm = this;
  	vm.getDiscData = getDiscData;

  	////////////////////////////////////////
  	/////// Methods definition bellow
  	/////////////////////////////////////////

  	function getDiscData(columnData, rowIndex) {
  		if( typeof columnData[rowIndex] === 'undefined'){
  			// if it dosen't exist return "empty"
  			return "empty";
  		}
  		else {
  			return columnData[rowIndex];
  		}
  	}

  }

})();