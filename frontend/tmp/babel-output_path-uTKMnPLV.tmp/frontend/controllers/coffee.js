import Ember from 'ember';
var CoffeeController;

CoffeeController = Ember.Controller.extend({
  actions: {
    choose: function choose(drink) {
      var preorder;
      preorder = this.model.get('firstObject');
      preorder.set('drink', drink);
      return this.transitionTo('syurup');
    }
  }
});

export default CoffeeController;