import Ember from 'ember';
var CoffeeController;

CoffeeController = Ember.Controller.extend({
  actions: {
    choose: function(drink) {
      this.model.set('drink', drink);
      return this.model.save().then((function(_this) {
        return function() {
          return _this.transitionTo('syurup');
        };
      })(this));
    }
  }
});

export default CoffeeController;
