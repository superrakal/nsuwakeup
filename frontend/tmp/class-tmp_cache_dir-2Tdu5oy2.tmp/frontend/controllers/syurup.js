define('frontend/controllers/syurup', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var SyurupController;

  SyurupController = Ember['default'].Controller.extend({
    actions: {
      confirm: function confirm() {
        return this.model.save().then((function (_this) {
          return function () {
            return _this.transitionToRoute('inform');
          };
        })(this));
      }
    }
  });

  exports['default'] = SyurupController;

});