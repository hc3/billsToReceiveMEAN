app.service('clienteService',['$http',function($http) {
    this.getClientes = function() {
      return $http.get('/cliente');
    }
}]);