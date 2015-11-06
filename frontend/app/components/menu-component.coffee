`import Ember from 'ember'`

MenuComponentComponent = Ember.Component.extend
  _initialize: (->
    @$('.ui.dropdown').dropdown()
  ).on('didInsertElement')

  actions:
    sign_out: ->
      Ember.$.ajax
        type: 'DELETE'
        url: "/users/sign_out"
        async: false
        success: =>
          location.replace('/')

`export default MenuComponentComponent`
