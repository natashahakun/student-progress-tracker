angular.module("myApp").controller('HomeController', function($scope, $rootScope) {

		$scope.addProgress = function(studentId, metricId) {
			$scope.students[studentId].metrics[metricId].progress++;
		}

		$scope.subtractProgress = function(studentId, metricId) {
			$scope.students[studentId].metrics[metricId].progress--;
		}

		$scope.students = {
			1: {
				id: 1,
				name: "Kyle",
				metrics: {
					1: {
						id: 1,
						progress: 1
					},
					2: {
						id: 2,
						progress: 3
					},
					3: {
						id: 3,
						progress: 3
					},
					4: {
						id: 4,
						progress: 2
					}
				}
			},
			2: {
				id: 2,
				name: "Natasha",
				metrics: {
					1: {
						id: 1,
						progress: 1
					},
					2: {
						id: 2,
						progress: 3
					},
					3: {
						id: 3,
						progress: 3
					},
					4: {
						id: 4,
						progress: 2
					}
				}
			}
		}


		$rootScope.Metrics = {
			1: {
				category: "JavaScript",
				name: "loops",
				progressGoal: 4
			},
			2: {
				category: "JavaScript",
				name: "variables",
				progressGoal: 4
			},
			3: {
				category: "JavaScript",
				name: "arrays",
				progressGoal: 4
			},
			4: {
				category: "JavaScript",
				name: "objects",
				progressGoal: 4
			}
		}

});
