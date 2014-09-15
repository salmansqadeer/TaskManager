'use strict';

// angular.module('lists').directive('addTask', function(){
//  return function(scope, element) {
//       element.bind('mouseenter', function(){
//         console.log('Im inside of you!');
//       });
//     }
// });

// angular.module('lists').directive('addTask', function() {
// 	return {template: 'Hello'};
// });


angular.module('lists').directive('addTask', function(){

	console.log('in directive');
 return function(scope, element) {
      element.bind('mouseenter', function(){
        console.log('Im inside of you!');
      });
    };
});