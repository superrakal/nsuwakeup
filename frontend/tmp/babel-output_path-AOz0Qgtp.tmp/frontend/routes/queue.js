import Ember from 'ember';
var QueueRoute;

QueueRoute = Ember.Route.extend({
  model: function model() {
    return this.store.find('preorder');
  },
  setupController: function setupController(controller, model) {
    return controller.set('preorders', model);
  }
});

export default QueueRoute;