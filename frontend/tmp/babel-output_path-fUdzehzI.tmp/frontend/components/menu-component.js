import Ember from 'ember';
var MenuComponentComponent;

MenuComponentComponent = Ember.Component.extend({
  _initialize: (function () {
    return this.$('.ui.dropdown').dropdown();
  }).on('didInsertElement'),
  actions: {
    sign_out: function sign_out() {
      return Ember.$.ajax({
        type: 'DELETE',
        url: "/users/sign_out",
        async: false,
        success: (function (_this) {
          return function () {
            return location.replace('/');
          };
        })(this)
      });
    }
  }
});

export default MenuComponentComponent;