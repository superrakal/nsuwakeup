import Ember from 'ember';
var RootController;

RootController = Ember.Controller.extend({
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

export default RootController;