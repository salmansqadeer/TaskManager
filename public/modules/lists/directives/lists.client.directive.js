'use strict';

angular.module('lists').directive('addTask', function(){

	console.log('in directive');
 	return function(scope, element) {
      element.bind('mouseenter', function(){
        console.log('Im inside of you!');
      });
    };
});