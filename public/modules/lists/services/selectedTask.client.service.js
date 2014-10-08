'use strict';

// Tasks service encapsulating Tasks related functionality 

angular.module('lists').factory('SelectedTask', [
	function() {
		
		// selectedTask represents the index of the currently selected task
		// All actions will happen on this task
		var selectedTask = 0;

		// taskFormVisibility stores whether the new task form is visible or not
		
		var taskFormVisibility = null;

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

			// Stores whether the New Task form is visible or not
			getTaskFormVisibility: function() {
				return taskFormVisibility;
			},

			// Toggles showing / hiding the new task form
			toggleTaskForm: function() {
				if (taskFormVisibility === null) {
					console.log('Show New Task Form');
					console.log (taskFormVisibility);
					taskFormVisibility = 1;

				}
				else {
					console.log('Hide New Task Form');
					console.log (taskFormVisibility);
					taskFormVisibility = null;
				}
			}

		};
	}
]);