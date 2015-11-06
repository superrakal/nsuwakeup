define('frontend/routes/coffee', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var CoffeeRoute;

  CoffeeRoute = Ember['default'].Route.extend({
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

  exports['default'] = CoffeeRoute;

});