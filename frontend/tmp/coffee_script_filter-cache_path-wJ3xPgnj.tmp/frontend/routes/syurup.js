import Ember from 'ember';
var SyurupRoute;

SyurupRoute = Ember.Route.extend({
  beforeModel: function() {
    return this.store.find('syurup');
  },
  model: function() {
    var id;
    id = cookie.get('preorder_id');
    return this.store.find('preorder', id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    return controller.set('syurups', this.store.all('syurup'));
  }
});

export default SyurupRoute;
