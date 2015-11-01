import Ember from 'ember';
var CoffeeRoute;

CoffeeRoute = Ember.Route.extend({
  beforeModel: function beforeModel() {
    return this.store.find('drink');
  },
  model: function model() {
    var id;
    id = cookie.get('preorder_id');
    return this.store.find('preorder', id);
  },
  setupController: function setupController(controller, model) {
    controller.set('model', model);
    return controller.set('drinks', this.store.all('drink'));
  }
});

export default CoffeeRoute;