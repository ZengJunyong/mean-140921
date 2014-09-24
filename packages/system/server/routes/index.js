'use strict';

module.exports = function (System, app, auth, database) {

    // Home route
    var index = require('../controllers/index');
    app.route('/')
        .get(index.render);

    // don't use userId course userId is used as a intercept parameter in another place
    app.route('/user/:usernameID/card')
        .get(index.get).post(index.post);

    app.route('/user/:usernameID/card/:cardId')
        .post(index.post);

    app.route('/user/:usernameID').get(index.getUser).post(index.saveUser);

};
