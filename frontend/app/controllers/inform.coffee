`import Ember from 'ember'`

InformController = Ember.Controller.extend
  isConfirmed: false
  isConfirming: false

  actions:
    confirm: ->
      @set 'isConfirming', true
      @model.save().then =>
        Ember.$.ajax
          type: 'GET'
          url: "/api/v1/preorders/new?id=" + @model.id
          async: false
          success: =>
            @set 'isConfirmed', true
            @set 'isConfirming', false


`export default InformController`
