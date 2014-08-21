'use strict';

//Lists service used to communicate the list index that is currently selected.

angular.module('lists').factory('SelectedList', [
	function() {
		// Selectedlist service logic
		
		var selectedList = 0;

		// Public API
		return {
			getSelectedList: function() {
				return selectedList;
			},

			setSelectedList: function( index ) {
				selectedList = index;
				return selectedList;
			}
		};
	}
]);