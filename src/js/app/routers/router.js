define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	var router = Backbone.Router.extend({
		initialize: function(view) {
			this.view = view;
		},
		routes: {
			'': 'dashClicked',
			'dash': 'dashClicked',
			'about': 'aboutClicked'
		},
		dashClicked: function() {
			this.view.setPage('#dash');
		},
		aboutClicked: function() {
			this.view.setPage('#about');
		}
	});
	return router;
});