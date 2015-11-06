define('frontend/components/menu-component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MenuComponentComponent;

  MenuComponentComponent = Ember['default'].Component.extend({
    _initialize: (function () {
      return this.$('.ui.dropdown').dropdown();
    }).on('didInsertElement')
  });

  exports['default'] = MenuComponentComponent;

});