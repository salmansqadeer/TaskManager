'use strict';

// Lists controller
angular.module('lists').controller('ListsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Lists', 'SelectedList',
	function($scope, $stateParams, $location, Authentication, Lists, SelectedList ) {
		$scope.authentication = Authentication;


      // console.log('hotkeys');

        // MY FUNCTIONS

        // Toggle Status
        // TODO - should all Task related functions be put into their own service?
		$scope.toggleStatus = function ( task ) {
			if ( task ) {
				
				// Go through all Tasks and find the right task to change
				var activeTask = $scope.lists[SelectedList.getSelectedList()].tasks;

				for (var t in activeTask) {

					if (activeTask[t]._id === task._id) {
						if ( activeTask[t].status ) {
							activeTask[t].status = false;
						}
						else {
							activeTask[t].status = true;
						}
					}
				}

				// Update the List
				$scope.lists[SelectedList.getSelectedList()].$update(function() {
	            }, function(errorResponse) {
	                $scope.error = errorResponse.data.message;
	            });
			}
		};

        // Returns all of the tasks for a specific List
        $scope.findTasks = function(index) {
        	SelectedList.setSelectedList( index );
        	return $scope.lists[index].tasks;
        };

		$scope.getSelectedList = function() {
			return SelectedList.getSelectedList(); 
		};

        // Creates a new task for a specific list
        $scope.createTask = function(index) {

        	console.log(index);
        	console.log($scope.lists);
            $scope.lists[index].tasks.unshift({
                name: this.name,
                description: this.description,
                startDate: this.startDate,
                dueDate: this.dueDate,
                status: false
            });

            var list = $scope.lists[index] ;

            list.$update(function() {
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });

            // Update the view
            $scope.findTasks(index);
        };

        // Remove a task from a specific list
        $scope.removeTask = function (taskIndex) {
        	$scope.lists[SelectedList.getSelectedList()].tasks.splice(taskIndex, 1);
        	$scope.findTasks(SelectedList.getSelectedList());
        };

			// LEARN MORE
   	//      function getSelectedList() {
			// return SelectedList.getSelectedList();
    //      };
    //      $scope.getSelectedList = getSelectedList;

        // CRUD

		// Create new List
		$scope.create = function() {
			// Create new List object
			var list = new Lists ({
				name: this.listName,
                tasks: []

            });

            console.log(list);

			list.$save(function(response) {
				// Redirect after save
				// $location.path('lists/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			// Update the view
			$scope.find();
		};

		// Remove existing List
		$scope.remove = function( list ) {
			if ( list ) { list.$remove();

				for (var i in $scope.lists ) {
					if ($scope.lists [i] === list ) {
						$scope.lists.splice(i, 1);
					}
				}
			} else {
				$scope.list.$remove(function() {
					$location.path('lists');
				});
			}
		};

		// Update existing List
		// TODO note that this update function can only be called by lists.
		$scope.update = function() {
			var list = $scope.list ;

			list.$update(function() {
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Lists
		$scope.find = function() {
			$scope.lists = Lists.query();
		};

		// Find existing List
		$scope.findOne = function() {
			$scope.list = Lists.get({ 
				listId: $stateParams.listId
			});
		};
	}
]);