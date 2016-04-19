app.controller('servicoController',['$scope','servicoService','servicoAPI',function($scope,servicoService,servicoAPI){
  
  $scope.formServico = {
    title:'Listagem de Servicos'
  };
  
  var carregaServicos = function() {
    servicoService.getServicos().success(function(dat){
      $scope.servicos = data;
    }).error(function(err){
      $scope.message = "deu merda "+err;
    });
  };
  
}])