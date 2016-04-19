app.config(function($routeProvider) {
    
    
    $routeProvider
    
    .when('/cliente',{
      templateUrl:'js/views/partials/bodyCliente.html',
      controller:'clienteController'
    });
});