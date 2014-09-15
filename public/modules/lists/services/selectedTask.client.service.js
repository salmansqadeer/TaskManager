'use strict';

// Tasks service used to communicate the task index that is currently selected.

angular.module('lists').factory('SelectedTask', [
	function() {
		// SelectedTask service logic
		
		var selectedTask = 0;

		var showNewTaskForm = null;

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

			getTaskFormStatus: function() {
				return showNewTaskForm;
			},

			toggleTaskForm: function() {
				if (showNewTaskForm === null) {
					console.log('Show New Task Form');
					console.log (showNewTaskForm);
					showNewTaskForm = 1;

				}
				else {
					console.log('Hide New Task Form');
					console.log (showNewTaskForm);
					showNewTaskForm = null;
				}
			}

		};
	}
]);