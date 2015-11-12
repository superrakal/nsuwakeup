import Ember from 'ember';
var QueueRoute;

QueueRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('preorder');
  },
  setupController: function(controller, model) {
    controller.set('preorders', model);
    return controller.set('currentUser', this.get('session.currentUser'));
  },
  actions: {
    socket_event: function() {
      return this.refresh();
    }
  }
});

export default QueueRoute;
