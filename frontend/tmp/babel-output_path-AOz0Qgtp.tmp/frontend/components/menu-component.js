import Ember from 'ember';
var MenuComponentComponent;

MenuComponentComponent = Ember.Component.extend({
  _initialize: (function () {
    return this.$('.ui.dropdown').dropdown();
  }).on('didInsertElement')
});

export default MenuComponentComponent;