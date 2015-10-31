import Ember from 'ember';
var RootController;

RootController = Ember.Controller.extend({
  actions: {
    create_preorder: function create_preorder() {
      this.store.findAll('preorder').then((function (_this) {
        return function (preorders) {
          var preorder;
          preorders.toArray().forEach(function (preorder) {
            return preorder.deleteRecord();
          });
          preorder = _this.store.createRecord('preorder');
          preorder.save();
          return cookie.set('preorder_id', preorder.get('id'));
        };
      })(this));
      return this.transitionToRoute('coffee');
    }
  }
});

export default RootController;