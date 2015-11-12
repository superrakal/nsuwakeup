define('frontend/routes/queue', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var QueueRoute;

  QueueRoute = Ember['default'].Route.extend({
    model: function model() {
      return this.store.find('preorder');
    },
    setupController: function setupController(controller, model) {
      controller.set('preorders', model);
      return controller.set('currentUser', this.get('session.currentUser'));
    },
    actions: {
      socket_event: function socket_event() {
        return this.refresh();
      }
    }
  });

  exports['default'] = QueueRoute;

});