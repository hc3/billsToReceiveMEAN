app.controller('clienteController',['$scope','clienteService',function($scope,clienteService) {
  
  $scope.header = {
    title:"titulo do site"
  };
  
  $scope.menu = {
    cliente:"Cliente",
    movimento:"Movimentação",
    painel:"Gerenciamento"
  }
  
  $scope.footer = {
    telefone:"",
    email:"",
    iconsFace:"",
    iconsLinkedin:"",
    iconsEmail:""
  }
  
  var carregaClientes = function() {
    clienteService.getClientes().success(function(data) {
      $scope.clientes = data;
    }).error(function(err) {
      $scope.message = "deu merda: "+err
    });
  }
  
  
  carregaClientes();
  
}])