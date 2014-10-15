'use strict';

angular.module('mean.abc').controller('AbcController', ['$scope', 'Global', 'Abc',
  function($scope, Global, Abc) {
    $scope.global = Global;
    $scope.package = {
      name: 'abc'
    };
  }
]);
