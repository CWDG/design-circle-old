'use strict';

var calendar;

// Events controller
angular.module('events').controller('EventsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Events',
	function($scope, $stateParams, $location, Authentication, Events ) {

		$scope.authentication = Authentication;

		// Create new Event
		$scope.create = function() {
			// Create new Event object
			var event = new Events ({
				name: this.name,
				date: moment(this.date).format("YYYY-MM-DDTHH:mm:ssZZ"),
				description: this.description
			});

			// Redirect after save
			event.$save(function(response) {
				$location.path('events/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Event
		$scope.remove = function( event ) {
			if ( event ) { event.$remove();

				for (var i in $scope.events ) {
					if ($scope.events [i] === event ) {
						$scope.events.splice(i, 1);
					}
				}
			} else {
				$scope.event.$remove(function() {
					$location.path('events');
				});
			}
		};

		// Update existing Event
		$scope.update = function() {
			var event = $scope.event ;

			event.$update(function() {
				$location.path('events/' + event._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


		// Find a list of Events
		$scope.find = function() {
			var eventAction = Events.query();
			eventAction.$promise.then(function(eventList) {
				$scope.events = eventList;
				for (var i in $scope.events) {
					$scope.events[i].start = moment($scope.events[i].date).toDate();
					$scope.events[i].title = $scope.events[i].name;
				}
				$scope.eventSources.push($scope.events);
				if (!$scope.$$phase) $scope.$apply();
			});
		};

		// Find existing Event
		$scope.findOne = function() {
			$scope.event = Events.get({ 
				eventId: $stateParams.eventId
			});
		};

		//Convert date
		$scope.convertDate = function(isodate) {
			return moment(isodate).format("MMM Do YYYY, h:mm:ss a");
		};

		//truncate description
		$scope.shortDescription = function(description) {
			if(description.length > 50){
				return description.substring(0,50) + "..."
			}
			return description
		}

		//Calendar stuff
		$scope.eventSources = [];
	}
]);
