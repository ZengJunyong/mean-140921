'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Abc = new Module('abc');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Abc.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Abc.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Abc.menus.add({
    title: 'abc example page',
    link: 'abc example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Abc.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Abc.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Abc.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Abc;
});
