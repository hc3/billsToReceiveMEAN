app.service('servicoService',['$http',function($http) {
  this.getServicos = function() {
    return $http.get('/api/servico');
  };
}]);