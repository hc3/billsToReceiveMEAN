app.factory('clienteAPI',['$http', function($http) {
  
  var _saveCliente = function(cliente) {
    return $http.post('/api/cliente/',cliente);
  };
  
  var _deleteCliente = function(cliente) {
    return $http.delete('/api/cliente/'+cliente._id,{params:{id:cliente._id}});
  };
  
  return {
    saveCliente : _saveCliente,
    deleteCliente : _deleteCliente
  };
  
}]);