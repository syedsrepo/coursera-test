(
  function() {
    'use strict';
    var app = angular.module("myFirstApp",[]);

    app.controller("MyFirstController", function($scope) {
      $scope.name = "Syed";
      $scope.sayHello = function() {
        return "Hello Coursera!"
      };
    });

    app.controller("NameCalculatorController", function($scope) {
      $scope.name = "";
      $scope.nameValue = 0;
      $scope.displayNumeric = function() {
        var nameValue = calculateNumericForString($scope.name);;
        $scope.nameValue = nameValue;
      };

      function calculateNumericForString(string) {
        var totalValue = 0;
        for(var i = 0; i < string.length; i++) {
          totalValue += string.charCodeAt(i);
        }
        return totalValue;
      };
    });

    app.controller("DIController", DIController);

    function DIController($scope, $filter, $injector) {
      $scope.name = "Syed";
      $scope.upper = function() {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      };
      console.log($injector.annotate(DIController));
    }
/*
    app.controller("MinifiController", ['$scope', '$filter', MinifiController]);

    function MinifiController($scope, $filter) {
      $scope.name = "Syed";
      $scope.upper = function() {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      };
    }
*/

app.controller("MinifiController", MinifiController);
MinifiController.$inject = ['$scope', '$filter']
function MinifiController($scope, $filter) {
  $scope.name = "Syed Salahuddin";
  $scope.upper = function() {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

// minified version
/*
function MinifiController(n,e){n.name="Syed",n.upper=function()
{var i=e("uppercase");n.name=i(n.name)}}
app.controller("MinifiController",["$scope","$filter",MinifiController]);
*/



app.controller("FoodController", FoodController);
MinifiController.$inject = ['$scope', '$filter']
function FoodController($scope, $filter) {
  $scope.foodImage = "junk";
  $scope.getHealthy = function() {
    $scope.foodImage = "health"
  };
}





  }
)();
