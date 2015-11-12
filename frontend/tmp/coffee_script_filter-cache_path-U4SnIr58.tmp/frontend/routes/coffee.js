import Ember from 'ember';
var CoffeeRoute;

CoffeeRoute = Ember.Route.extend({
  beforeModel: function() {
    return this.store.find('drink');
  },
  model: function() {
    var id;
    id = cookie.get('preorder_id');
    return this.store.find('preorder', id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    return controller.set('drinks', this.store.all('drink'));
  }
});

export default CoffeeRoute;
