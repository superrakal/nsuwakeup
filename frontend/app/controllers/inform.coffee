`import Ember from 'ember'`

InformController = Ember.Controller.extend
  isConfirmed: false

  actions:
    confirm: ->
      Ember.$.ajax
        type: 'GET'
        url: "/api/v1/preorders/new?id=" + @model.id
        async: false
        success: =>
          @set 'isConfirmed', true


`export default InformController`
