import Ember from 'ember';
var SyurupController;

SyurupController = Ember.Controller.extend({
  actions: {
    confirm: function() {
      var preorder;
      preorder = this.model.get('firstObject');
      return preorder.save();
    }
  }
});

export default SyurupController;
