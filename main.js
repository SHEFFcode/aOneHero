var app = angular.module('minmax', []);

app.controller('MinMaxCtr', ['$scope', '$http', function ($scope, $http) {
  $scope.formModel = {};
  $scope.onSubmit = function (valid) {
    if (valid) {
      console.log('Hey I am submitted');
      console.log($scope.formModel);
      $http.post('https://minmax-server.herokuapp.com/register', $scope.formModel)
        .then(function successCallback (data) {
          console.log(':)');
        }, function errorCallback (data) {
          console.log(':(');
      });
    } else {
      console.log('The form is not valid');
    }

  }
}]);