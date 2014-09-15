'use strict';

// Tasks service used to communicate the task index that is currently selected.

angular.module('lists').factory('SelectedTask', [
	function() {
		// SelectedTask service logic
		
		var selectedTask = 0;

		// Public API
		return {
			getSelectedTask: function() {
				return selectedTask;
			},

			setSelectedTask: function( index ) {
				selectedTask = index;
				return selectedTask;
			},

			goUpOneTask: function() {
				if (selectedTask > 0) {
					selectedTask = selectedTask - 1;	
				}
				return selectedTask;
			},

			goDownOneTask: function(index) {
				if (selectedTask < index.tasks.length - 1) {
					selectedTask = selectedTask + 1;
				}
				return selectedTask;
			},

		};
	}
]);