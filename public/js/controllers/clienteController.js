app.controller('clienteController',['$scope','clienteService','clienteAPI',function($scope,clienteService,clienteAPI) {
  
  $scope.header = {
    title:"titulo do site"
  };
  
  $scope.menu = {
    cliente:"Cliente",
    movimento:"Movimentação",
    painel:"Gerenciamento"
  };
  
  $scope.formCliente = {
    title:"Listagem de Cientes"
  };
  
  $scope.footer = {
    telefone:"",
    email:"",
    iconsFace:"",
    iconsLinkedin:"",
    iconsEmail:""
  };
  
  var carregaClientes = function() {
    clienteService.getClientes().success(function(data) {
      $scope.clientes = data;
    }).error(function(err) {
      $scope.message = "deu merda: "+err;
    });
  };
  
  $scope.saveCliente = function(cliente) {
    clienteAPI.saveCliente(cliente).success(function(data){
      delete $scope.cliente;
      carregaClientes();
    });
  };
  
  $scope.removeCliente = function(cliente) {
    clienteAPI.deleteCliente(cliente).success(function(data){
      carregaClientes();
    });
  };
  
  carregaClientes();
  
}]);