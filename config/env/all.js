'use strict';

module.exports = {
	app: {
		title: 'TaskManager',
		description: 'MEAN To Do List application for power users.',
		keywords: 'MongoDB, Express, AngularJS, NodeJS, ToDo, To Do List, Productivity App, '
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		],

		lib: {
			css: [
				// Boostrap
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',

				// Flatstrap
				// 'public/lib/flatstrap3/dist/css/bootstrap.css',
				// 'public/lib/flatstrap3/dist/css/bootstrap-theme.css',

				// Angular-Hotkeys
				'public/lib/angular-hotkeys/build/hotkeys.min.css'
			],
			js: [

				// Angular
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-cookies/angular-cookies.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/angular-sanitize/angular-sanitize.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',

				// Bootstrap
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',

				// JQUERY
				'public/lib/jquery/dist/jquery.js',

				// Flatstrap
				'public/lib/flatstrap3/dist/js/bootstrap.js',
				// 'public/angular-flatstrap/build/angular-flatstrap.js',

				// Angular-Hotkeys
				'public/lib/angular-hotkeys/build/hotkeys.min.js'
			]
		}

	}
};
