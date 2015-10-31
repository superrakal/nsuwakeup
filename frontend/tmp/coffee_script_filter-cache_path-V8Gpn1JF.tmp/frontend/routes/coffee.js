import Ember from 'ember';
var CoffeeRoute;

CoffeeRoute = Ember.Route.extend({
  beforeModel: function() {
    return this.store.find('drink');
  },
  model: function() {
    return this.store.all('preorder');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    return controller.set('drinks', this.store.all('drink'));
  }
});

export default CoffeeRoute;
