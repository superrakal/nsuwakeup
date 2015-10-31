import Ember from 'ember';
var CoffeeRoute;

CoffeeRoute = Ember.Route.extend({
  beforeModel: function beforeModel() {
    return this.store.find('drink');
  },
  model: function model() {
    return this.store.all('preorder');
  },
  setupController: function setupController(controller, model) {
    controller.set('model', model);
    return controller.set('drinks', this.store.all('drink'));
  }
});

export default CoffeeRoute;