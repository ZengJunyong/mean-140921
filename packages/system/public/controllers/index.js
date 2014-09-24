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

                var card = cards[0];
                // each item is an instance of CreditCard
                // expect(card instanceof CreditCard).toEqual(true);
                console.log(card instanceof CreditCard);
                card.name = 'J. Smith';
                // non GET methods are mapped onto the instances
                card.$save();
                // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
                // server returns: {id:456, number:'1234', name: 'J. Smith'};

                // our custom method is mapped as well.
                card.$charge({amount: 9.99});
                // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
            });

            $scope.cards = cards;

            // we can create an instance as well
            var newCard = new CreditCard({number: '0123'});
            newCard.name = "Mike Smith";
            newCard.$save();
            // POST: /user/123/card {number:'0123', name:'Mike Smith'}
            // server returns: {id:456, number:'1234', name: 'J. Smith'};
            // expect(newCard.id).toEqual(456);
            console.log(newCard.id);
            $scope.newCard = newCard;
        };

        $scope.testResource2 = function () {
            var User = $resource('/user/:usernameID', {usernameID: '@id'});
            User.get({usernameID: 123}, function (user) {
                // GET: /user/123
                // server returns: {id: 163, username: 'Yong'}
                console.log(user);
                user.abcd = true;
                // POST: /user/163
                // This will PUT /user/163 with the object in the request payload
                user.$save();

//                user.$delete(); // DELETE /user/163
//                user.$remove();   // DELETE /user/163
//                user.$get();    // GET /user/163
                user.$query();  // GET /user/163 but throw : Expected response to contain an array but got an object
            });
        };
    }
]);
