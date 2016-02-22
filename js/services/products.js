app.factory('products', ['$http', function($http) { 
  return $http.get('js/library/products.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);