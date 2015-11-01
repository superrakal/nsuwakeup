import Ember from 'ember';
var InformController;

InformController = Ember.Controller.extend({
  isConfirmed: false,
  actions: {
    confirm: function() {
      return this.model.save().then((function(_this) {
        return function() {
          return Ember.$.ajax({
            type: 'GET',
            url: "/api/v1/preorders/new?id=" + _this.model.id,
            async: false,
            success: function() {
              return _this.set('isConfirmed', true);
            }
          });
        };
      })(this));
    }
  }
});

export default InformController;
