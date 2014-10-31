/**
 * Created by Goemans.Stephan on 31.10.2014.
 */
define(['router'], function(Router) {
	'use strict';

	describe('router', function() {
		it('should have routes defined', function() {
			var router = new Router();
			expect(router.routes).toBeTruthy();
		});
	});
});