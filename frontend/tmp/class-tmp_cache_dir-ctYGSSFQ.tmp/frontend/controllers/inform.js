define('frontend/controllers/inform', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var InformController;

  InformController = Ember['default'].Controller.extend({
    isConfirmed: false,
    actions: {
      confirm: function confirm() {
        return Ember['default'].$.ajax({
          type: 'GET',
          url: "/api/v1/preorders/new?id=" + this.model.id,
          async: false,
          success: (function (_this) {
            return function () {
              return _this.set('isConfirmed', true);
            };
          })(this)
        });
      }
    }
  });

  exports['default'] = InformController;

});