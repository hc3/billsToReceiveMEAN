app.directive('servicoTable',function() {
  return {
    restrict:'E',
    scope:{
      data:'='
    },
    templateUrl: 'js/views/partials/servicoTable.html',
    controller:'servicoController'
  };
});