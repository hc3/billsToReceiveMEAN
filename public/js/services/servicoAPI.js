app.factory('servicoAPI',['$http',function($http) {
  var _saveServico = function(servico) {
    return $http.post('/api/servico/',servico);
  };
  
  var _deleteServico = function(servico) {
    return $http.delete('/api/servico'+servico._id,{params:{id:cliente._id}});
  };
  
  return {
    saveServico : _saveServico,
    deleteServico : _deleteServico
  };
  
  
}]);