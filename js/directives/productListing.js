app.directive('productListing', function () {
  	return {
      restrict: 'E',
      scope: {
      	listing: '='
      },
      templateUrl: 'js/directives/productListing.html'
    };
});