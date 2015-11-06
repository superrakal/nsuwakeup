define('frontend/controllers/inform', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var InformController;

  InformController = Ember['default'].Controller.extend({
    isConfirmed: false,
    isConfirming: false,
    actions: {
      confirm: function confirm() {
        this.set('isConfirming', true);
        return this.model.save().then((function (_this) {
          return function () {
            return Ember['default'].$.ajax({
              type: 'GET',
              url: "/api/v1/preorders/new?id=" + _this.model.id,
              async: false,
              success: function success() {
                _this.set('isConfirmed', true);
                return _this.set('isConfirming', false);
              }
            });
          };
        })(this));
      }
    }
  });

  exports['default'] = InformController;

});