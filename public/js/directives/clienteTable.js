app.directive('clienteTable',function() {
  
  return {
    restrict:'E',
    scope:{
      data : '='
    },
    templateUrl: 'js/directives/clienteTable.html'
  };
  
});