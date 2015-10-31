`import Ember from 'ember'`

CoffeeController = Ember.Controller.extend
  actions:
    choose: (drink) ->
      @model.set 'drink', drink
      @model.save().then =>
        @transitionTo 'syurup'

`export default CoffeeController`
