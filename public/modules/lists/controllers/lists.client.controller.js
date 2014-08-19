'use strict';

// Lists controller
angular.module('lists').controller('ListsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Lists',
	function($scope, $stateParams, $location, Authentication, Lists ) {
		$scope.authentication = Authentication;

        // MY FUNCTIONS

        $scope.createTask = function(index) {

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
            $scope.find();
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
		$scope.update = function() {
			var list = $scope.list ;

			list.$update(function() {
				$location.path('lists/' + list._id);
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