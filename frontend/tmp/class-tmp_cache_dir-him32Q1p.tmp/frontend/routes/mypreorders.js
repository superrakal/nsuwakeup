define('frontend/routes/mypreorders', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MypreordersRoute;

  MypreordersRoute = Ember['default'].Route.extend({
    model: function model() {
      return this.get('session.currentUser');
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = MypreordersRoute;

});