app.config(['ngRoute',function($routeProvider,$locationProvider) {
    
    $locationProvider.html5Mode(true);
    
    $routeProvider
    
    .when('/clientes',{
      templateUrl:'views/partials/bodyCliente.html',
      controller:'clienteController'
    });
}]);