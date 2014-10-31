/* globals define */
//
// RequireJS
//
define(['jquery', 'underscore', 'backbone', 'dashView', 'aboutView'], function($, _, Backbone, DashView, AboutView) {
	'use strict';
	var AppView = Backbone.View.extend({

		id: 'app-view',
		//
		// Bootstrap
		//
		html: [	'<div class="navbar">',
			'<a class="navbar-brand" href="#">Weather Watcher</a>',
			'<ul class="nav navbar-nav">',
				'<li id="nav-dash"><a href="#dash">Dashboard</a></li>',
				'<li id="nav-about"><a href="#about">About</a></li>',
			'</ul></div>',
			'<div id="content"></div>'].join(''),

		views: [],
		//
		// Backbone
		//
		initialize: function() {
			this.views['dash'] = new DashView({
				id: 'dash',
				className: 'page-view'
			});
			this.views['about'] = new AboutView({
				id: 'about',
				className: 'page-view'
			});
			this.$el.append(this.html);
			this.$('#content').append(this.views['dash'].render().el);
			this.$('#content').append(this.views['about'].render().el);
		},

		setPage: function(page) {
			this.$('.page-view').hide();
			this.$(page).show();
		}
	});
	return AppView;
});