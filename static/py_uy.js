
var app = angular.module('clock', []).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }
);



app.filter('pad', function() {
  return function(num) {
    return (num < 10 ? '0' + num : num);
  };
});
 
app.filter('addSuffix', function() {
  return function(num) {
    if (num % 100 >= 10 && num % 100 <= 19) {
      return num + 'to';
    }
 
    switch (num % 10) {
      case 1: return num + 'ro';
      case 2: return num + 'do';
      case 3: return num + 'ro';
    }
 
    return num + 'to';
  };
})
 
app.controller("ClockController", function($scope, $timeout) {
  $scope.date = new Date();
  $scope.days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  $scope.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
 
  $scope.majors = [1,2,3,4,5,6,7,8,9,10,11,12];
   $scope.minors = [];
	for (var i = 1; i <= 60; i++) {
	     $scope.minors.push(i);
}

 
  var tick = function() {
    $scope.date = new Date();
    $timeout(tick, 1000);
  };
  $timeout(tick, 1000);
});


