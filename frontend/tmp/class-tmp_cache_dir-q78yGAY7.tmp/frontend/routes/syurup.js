define('frontend/routes/syurup', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var SyurupRoute;

  SyurupRoute = Ember['default'].Route.extend({
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

  exports['default'] = SyurupRoute;

});