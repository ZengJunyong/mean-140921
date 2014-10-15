'use strict';

angular.module('mean.abc').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('abc example page', {
      url: '/abc/example',
      templateUrl: 'abc/views/index.html'
    });
  }
]);
