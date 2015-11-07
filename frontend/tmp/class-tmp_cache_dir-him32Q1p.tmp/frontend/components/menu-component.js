define('frontend/components/menu-component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MenuComponentComponent;

  MenuComponentComponent = Ember['default'].Component.extend({
    _initialize: (function () {
      return this.$('.ui.dropdown').dropdown();
    }).on('didInsertElement'),
    actions: {
      sign_out: function sign_out() {
        return Ember['default'].$.ajax({
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

  exports['default'] = MenuComponentComponent;

});