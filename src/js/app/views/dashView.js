define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	'use strict';
	var dashView = Backbone.View.extend({
		initialize: function() {
		},
		events: {
		},
		render: function() {
			var html = '<h3>The "Dashboard"-View</h3>';
			this.$el.html(html);
			return this;
		}
	});
	return dashView;
});