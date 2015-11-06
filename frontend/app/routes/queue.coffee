`import Ember from 'ember'`

QueueRoute = Ember.Route.extend
  model: ->
    @store.find('preorder')

  setupController: (controller, model) ->
    controller.set 'preorders', model

`export default QueueRoute`
