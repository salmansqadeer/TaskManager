'use strict';

// angular.module('lists').directive('addTask', function(){

//  	return function(scope, element ) {

//       element.bind('mouseenter', function(){
//         console.log('Im inside of you!');
// 		return {
// 	        // which markup this directive generates
// 	        template: '<button>-</button>' +
// 	                  '<div>0</div>' +
// 	                  '<button>+</button>'
// 	    };  

//       });
//     };

// });

angular.module('lists').directive('addTask', function(){
	return {
        restrict: 'AE',
        scope: {},
        template: '<button ng-click="decrement()">-</button>' +
                  '<div>{{ value }}</div>' +
                  '<button ng-click="increment()">+</button>',
        link: function(scope, iElement, iAttrs) {
            scope.value = 0;
            scope.increment = function() {
                scope.value++;
            };
            scope.decrement = function() {
                scope.value--;
            };
        }
    };

});