define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	'use strict';
	var aboutView = Backbone.View.extend({
		initialize: function() {
		},
		events: {
		},
		render: function() {
			var html = '<h3>The "About"-View</h3>';
			this.$el.html(html);
			return this;
		}
	});
	return aboutView;
});