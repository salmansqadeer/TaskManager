'use strict';

// Lists controller
angular.module('lists').controller('ListsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Lists', 'SelectedList',
	function($scope, $stateParams, $location, Authentication, Lists, SelectedList ) {
		$scope.authentication = Authentication;

        // MY FUNCTIONS

        // Returns all of the tasks for a specific List
        $scope.findTasks = function(index) {
        	// $scope.selectedList = index;
        	console.log(index);
        	SelectedList.setSelectedList( index );
        	$scope.lists[index].tasks;
        };

        $scope.getSelectedList = function () {
        	return SelectedList.getSelectedList();
        };

        // Creates a new task for a specific list
        $scope.createTask = function(index) {

        	console.log(index);
        	console.log($scope.lists);
            $scope.lists[index].tasks.push({
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

        // Toggle Status
        // TODO this is a terrible method - probably should put this into a Service I guess?
        // TODO - should all Task related functions be put into their own service?
		$scope.toggleStatus = function ( task ) {
			if ( task ) {
				
				// Go through all Tasks and find the right task to change

				var activeTask = $scope.lists[$scope.getSelectedList()].tasks;

				for (var t in activeTask) {

					if (activeTask[t]._id === task._id) {
						if ( activeTask[t].status ) {
							activeTask[t].status = false;
							$scope.update();
						}
						else {
							activeTask[t].status = true;
						}

					}
				}

				$scope.lists[$scope.getSelectedList()].$update(function() {
	            }, function(errorResponse) {
	                $scope.error = errorResponse.data.message;
	            });



			}
		};

        // CRUD

		// Create new List
		$scope.create = function() {
			// Create new List object
			var list = new Lists ({
				name: this.name,
                tasks: []

            });

            console.log(list);

			// Redirect after save
			list.$save(function(response) {
				$location.path('lists/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
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
				// $location.path('lists/' + list._id);
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