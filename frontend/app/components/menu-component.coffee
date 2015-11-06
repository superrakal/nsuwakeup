`import Ember from 'ember'`

MenuComponentComponent = Ember.Component.extend
  _initialize: (->
    @$('.ui.dropdown').dropdown()
  ).on('didInsertElement')

`export default MenuComponentComponent`
