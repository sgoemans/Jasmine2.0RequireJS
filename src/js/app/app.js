define(['appView', 'router'], function(AppView, Router) {
	var initialize = function() {
		var appView = new AppView();
		var router = new Router(appView);
		Backbone.history.start();

		$('body').append(appView.el);
	};
	return initialize;
});