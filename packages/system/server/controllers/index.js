'use strict';

var mean = require('meanio');

exports.render = function (req, res) {

    var modules = [];
    // Preparing angular modules list with dependencies
    for (var name in mean.modules) {
        modules.push({
            name: name,
            module: 'mean.' + name,
            angularDependencies: mean.modules[name].angularDependencies
        });
    }

    function isAdmin() {
        return req.user && req.user.roles.indexOf('admin') !== -1;
    }

    // Send some basic starting info to the view
    res.render('index', {
        user: req.user ? {
            name: req.user.name,
            _id: req.user._id,
            username: req.user.username,
            roles: req.user.roles
        } : {},
        modules: modules,
        isAdmin: isAdmin,
        hello: 'hello world',
        adminEnabled: isAdmin() && mean.moduleEnabled('mean-admin')
    });
};


exports.get = function (req, res) {
    var params = req.params;
    var query = req.query;
    console.log(params, query);
    res.json([
        {id: 456, number: '1234', name: 'Smith'}
    ]);
};