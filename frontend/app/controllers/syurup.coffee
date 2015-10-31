`import Ember from 'ember'`

SyurupController = Ember.Controller.extend
  actions:
    confirm: ->
      @model.save().then =>
        @transitionToRoute 'inform'

`export default SyurupController`
