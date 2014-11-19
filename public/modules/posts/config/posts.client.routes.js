'use strict';

//Setting up route
angular.module('posts').config(['$stateProvider',
	function($stateProvider) {
		// Posts state routing
		$stateProvider.
		state('listPosts', {
			url: '/blog',
			templateUrl: 'modules/posts/views/list-posts.client.view.html'
		}).
		state('createPost', {
			url: '/blog/create',
			templateUrl: 'modules/posts/views/create-post.client.view.html'
		}).
		state('viewPost', {
			url: '/blog/:postId',
			templateUrl: 'modules/posts/views/view-post.client.view.html'
		}).
		state('editPost', {
			url: '/blog/:postId/edit',
			templateUrl: 'modules/posts/views/edit-post.client.view.html'
		});
	}
]);
