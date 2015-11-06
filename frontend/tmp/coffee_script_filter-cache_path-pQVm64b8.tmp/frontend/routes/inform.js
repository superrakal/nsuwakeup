import Ember from 'ember';
var InformRoute;

InformRoute = Ember.Route.extend({
  model: function() {
    var id;
    id = cookie.get('preorder_id');
    return this.store.find('preorder', id);
  },
  setupController: function(controller, model) {
    return controller.set('model', model);
  }
});

export default InformRoute;
