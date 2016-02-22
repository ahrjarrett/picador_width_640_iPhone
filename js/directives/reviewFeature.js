app.directive('reviewFeature', function () {
  	return {
      restrict: 'E',
      scope: {
      	feature: '='
      },
      templateUrl: 'js/directives/reviewFeature.html'
    };
});