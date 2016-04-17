app.config(['$routeProvider',function($routeProvider,$locationProvider) {
    
    $locationProvider.html5Mode(true);
    
    $routeProvider
    
    .when('/clientes',{
      templateUrl:'js/partials/bodyCliente.html',
      controller:'clienteController'
    });
}]);