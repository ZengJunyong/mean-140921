'use strict';

// The Package is past automatically as first parameter
module.exports = function (Abc, app, auth, database) {

    app.get('/abc/example/anyone', function (req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/abc/example/auth', auth.requiresLogin, function (req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/abc/example/admin', auth.requiresAdmin, function (req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/abc/example/render', function (req, res, next) {
        Abc.render('index', {
            package: 'abc'
        }, function (err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });

    app.route('/abc/register')
        .get(function (req, res, next) {
            Abc.render('register', {
                package: 'abc'
            }, function (err, html) {
                //Rendering a view from the Package server/views
                res.send(html);
            });
        });

    app.route('/rrr')
        .get(function (req, res) {
            res.render('register');
        });
};
