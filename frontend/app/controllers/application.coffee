`import Ember from 'ember'`

ApplicationController = Ember.Controller.extend
  actions:
    sign_out: ->
      Ember.$.ajax
        type: 'DELETE'
        url: "/users/sign_out"
        async: false
        success: =>
          location.replace('/')


`export default ApplicationController`
