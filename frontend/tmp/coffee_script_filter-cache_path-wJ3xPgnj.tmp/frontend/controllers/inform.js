import Ember from 'ember';
var InformController;

InformController = Ember.Controller.extend({
  isConfirmed: false,
  actions: {
    confirm: function() {
      return Ember.$.ajax({
        type: 'GET',
        url: "/api/v1/preorders/new?id=" + this.model.id,
        async: false,
        success: (function(_this) {
          return function() {
            return _this.set('isConfirmed', true);
          };
        })(this)
      });
    }
  }
});

export default InformController;
