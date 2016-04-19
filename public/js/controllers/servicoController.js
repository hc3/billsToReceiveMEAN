app.controller('servicoController',['$scope','servicoService','servicoAPI',function($scope,servicoService,servicoAPI){
  
  $scope.formServico = {
    title:'Listagem de Servicos'
    
  };
  
  var carregaServicos = function() {
    servicoService.getServicos().success(function(data){
      $scope.servicos = data;
    }).error(function(err){
      $scope.message = "deu merda "+err;
    });
  };
  
  $scope.saveServico = function(servico) {
    servicoAPI.saveServico(servico).success(function(data) {
      delete $scope.servico;
      carregaServicos();
    });
  };
  
  carregaServicos();
  
}]);