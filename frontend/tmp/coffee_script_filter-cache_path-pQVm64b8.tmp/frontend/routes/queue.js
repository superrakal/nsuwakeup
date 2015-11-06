import Ember from 'ember';
var QueueRoute;

QueueRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('preorder');
  },
  setupController: function(controller, model) {
    return controller.set('preorders', model);
  }
});

export default QueueRoute;
