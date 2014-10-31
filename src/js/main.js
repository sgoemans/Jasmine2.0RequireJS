require.config({
	paths: {
		'backbone': '../../bower_components/backbone/backbone',
		'underscore': '../../bower_components/underscore/underscore',
		'jquery': '../../bower_components/jquery/dist/jquery',
		'appView': 'app/views/appView',
		'dashView': 'app/views/dashView',
		'aboutView': 'app/views/aboutView',
		'router': 'app/routers/router',
		'app': 'app/app'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		boostrap: {
			'deps': [
				'jquery'
				]
		}
	}
});
require(['app'], function(App) {
	'use strict';
	App();

});
