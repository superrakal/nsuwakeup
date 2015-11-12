`import Ember from 'ember'`

InformController = Ember.Controller.extend
  isConfirmed: false
  isConfirming: false
  socketIOService: Ember.inject.service('socket-io')

  init: ->
    @_super.apply(this, arguments)
    @socket = this.get('socketIOService').socketFor('http://nsuwakeup.ru:1488/')

  isAvailableTodayButNotNow: (->
    startTime = moment().hour(8).minutes(30)
    now =       moment()
    now < startTime && now > moment().hour(0).minutes(0)
  ).property()

  isNotAvailableToday: (->
    startTime = moment().hour(8).minutes(30)
    endTime =   moment().hour(18).minutes(45)
    range =     moment().range(startTime, endTime)
    now =       moment()
    !range.contains(now)
  ).property()

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
