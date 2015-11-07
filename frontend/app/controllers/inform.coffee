`import Ember from 'ember'`

InformController = Ember.Controller.extend
  isConfirmed: false
  isConfirming: false
  socketIOService: Ember.inject.service('socket-io')

  init: ->
    @_super.apply(this, arguments)
    @socket = this.get('socketIOService').socketFor('http://nsuwakeup.ru:1488/')

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
            @socket.emit('preorder added')


`export default InformController`
