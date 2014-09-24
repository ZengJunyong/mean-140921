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

function printRequestInfo(req) {
    var params = req.params;
    var query = req.query;
    var body = req.body;
    console.log(params, query, body);

}

exports.get = function (req, res) {
    printRequestInfo(req);
    res.json([
        {id: 456, number: '1234', name: 'Smith'}
    ]);
};

exports.post = function (req, res) {
    printRequestInfo(req);
    res.json({id: 456, number: '1234', name: 'J. Smith'});
};

exports.getUser = function (req, res) {
    printRequestInfo(req);
    console.log(req.body);
    res.json({id: 163, username: 'Yong'});
};

exports.saveUser = function (req, res) {
    printRequestInfo(req);
    res.json(1);
};