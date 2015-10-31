import Ember from 'ember';
var SyurupRoute;

SyurupRoute = Ember.Route.extend({
  beforeModel: function beforeModel() {
    return this.store.find('syurup');
  },
  model: function model() {
    return this.store.all('preorder');
  },
  setupController: function setupController(controller, model) {
    controller.set('model', model);
    return controller.set('syurups', this.store.all('syurup'));
  }
});

export default SyurupRoute;