'use strict';

//Lists service used to communicate the list index that is currently selected.

angular.module('lists').factory('SelectedList', [
	function() {
		// Selectedlist service logic
		
		// TODO:  This should be saved as a part of the User Model
		// Maybe in a section for "Application State"
		
		var selectedList = 0;

		// Public API
		return {
			getSelectedList: function() {
				return selectedList;
			},

			setSelectedList: function( index ) {
				selectedList = index;
				return selectedList;
			},

			goUpOneList: function() {
				if (selectedList > 0) {
					selectedList = selectedList - 1;	
				}
				return selectedList;
			},

			goDownOneList: function(index) {

				if (selectedList < index.length - 1) {
					selectedList = selectedList + 1;
				}
				return selectedList;
			}

		};
	}
]);