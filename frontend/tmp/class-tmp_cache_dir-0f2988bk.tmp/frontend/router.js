define('frontend/router', ['exports', 'ember', 'frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router;

  Router = Ember['default'].Router.extend();

  Router.map(function () {
    this.route('root', {
      path: '/'
    });
    this.route('coffee');
    this.route('syurup');
    this.route('inform');
    this.route('mypreorders');
    return this.route('queue');
  });

  exports['default'] = Router;

});