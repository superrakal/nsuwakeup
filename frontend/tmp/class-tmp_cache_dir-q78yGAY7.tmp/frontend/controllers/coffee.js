define('frontend/controllers/coffee', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var CoffeeController;

  CoffeeController = Ember['default'].Controller.extend({
    actions: {
      choose: function choose(drink) {
        this.model.set('drink', drink);
        return this.model.save().then((function (_this) {
          return function () {
            return _this.transitionTo('syurup');
          };
        })(this));
      }
    }
  });

  exports['default'] = CoffeeController;

});