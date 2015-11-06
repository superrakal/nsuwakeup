define('frontend/routes/inform', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var InformRoute;

  InformRoute = Ember['default'].Route.extend({
    model: function model() {
      var id;
      id = cookie.get('preorder_id');
      return this.store.find('preorder', id);
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = InformRoute;

});