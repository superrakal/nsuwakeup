/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/cookie/cookie.js');
  app.import('bower_components/moment/moment.js');
  app.import('bower_components/moment-range/dist/moment-range.js');
  app.import('bower_components/moment/locale/ru.js');
  app.import('bower_components/ionsound/js/ion.sound.js');

  return app.toTree();
};
