import Ember from 'ember';
var SyurupRoute;

SyurupRoute = Ember.Route.extend({
  beforeModel: function() {
    return this.store.find('syurup');
  },
  model: function() {
    return this.store.all('preorder');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    return controller.set('syurups', this.store.all('syurup'));
  }
});

export default SyurupRoute;
