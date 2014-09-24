'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$resource',
    function ($scope, Global, $resource) {
        $scope.global = Global;
        $scope.IndexController = true;

        $scope.testResource = function () {
            // Define CreditCard class
            var CreditCard = $resource('/user/:usernameID/card/:cardId',
                {usernameID: 123, cardId: '@id'}, {
                    charge: {method: 'POST', params: {charge: true}}
                });

            // We can retrieve a collection from the server
            var cards = CreditCard.query(function (data) {
                // GET: /user/123/card
                // server returns: [ {id:456, number:'1234', name:'Smith'} ];
                console.log(data);
            });
        };
    }
]);
