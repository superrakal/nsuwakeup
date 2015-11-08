import Ember from 'ember';
var QueueRoute;

QueueRoute = Ember.Route.extend({
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

export default QueueRoute;