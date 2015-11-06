define('frontend/routes/queue', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var QueueRoute;

  QueueRoute = Ember['default'].Route.extend({
    model: function model() {
      return this.store.find('preorder');
    },
    setupController: function setupController(controller, model) {
      return controller.set('preorders', model);
    }
  });

  exports['default'] = QueueRoute;

});