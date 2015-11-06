define('frontend/routes/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ApplicationRoute;

  ApplicationRoute = Ember['default'].Route.extend({
    model: function model() {
      return this.get('session.currentUser');
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = ApplicationRoute;

});