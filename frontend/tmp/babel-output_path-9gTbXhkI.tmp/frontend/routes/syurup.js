import Ember from 'ember';
var SyurupRoute;

SyurupRoute = Ember.Route.extend({
  beforeModel: function beforeModel() {
    return this.store.find('syurup');
  },
  model: function model() {
    var id;
    id = cookie.get('preorder_id');
    return this.store.find('preorder', id);
  },
  setupController: function setupController(controller, model) {
    controller.set('model', model);
    return controller.set('syurups', this.store.all('syurup'));
  }
});

export default SyurupRoute;