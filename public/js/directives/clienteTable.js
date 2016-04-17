app.directive('clienteTable',function() {
  
  return {
    restrict:'E',
    scope:{
      data : '='
    },
    templateUrl: 'js/views/partials/clienteTable.html'
  };
  
});