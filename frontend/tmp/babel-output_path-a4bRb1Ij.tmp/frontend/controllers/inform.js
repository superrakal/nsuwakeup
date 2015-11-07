import Ember from 'ember';
var InformController;

InformController = Ember.Controller.extend({
  isConfirmed: false,
  isConfirming: false,
  actions: {
    confirm: function confirm() {
      this.set('isConfirming', true);
      return this.model.save().then((function (_this) {
        return function () {
          return Ember.$.ajax({
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

export default InformController;