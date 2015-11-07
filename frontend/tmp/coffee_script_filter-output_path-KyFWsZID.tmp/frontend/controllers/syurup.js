import Ember from 'ember';
var SyurupController;

SyurupController = Ember.Controller.extend({
  actions: {
    confirm: function() {
      return this.model.save().then((function(_this) {
        return function() {
          return _this.transitionToRoute('inform');
        };
      })(this));
    }
  }
});

export default SyurupController;
