define('frontend/controllers/root', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var RootController;

  RootController = Ember['default'].Controller.extend({
    actions: {
      create_preorder: function create_preorder() {
        return this.store.findAll('preorder').then((function (_this) {
          return function (preorders) {
            var preorder;
            preorders.toArray().forEach(function (preorder) {
              return preorder.deleteRecord();
            });
            preorder = _this.store.createRecord('preorder');
            return preorder.save().then(function () {
              cookie.set('preorder_id', preorder.get('id'));
              return _this.transitionToRoute('coffee');
            });
          };
        })(this));
      }
    }
  });

  exports['default'] = RootController;

});