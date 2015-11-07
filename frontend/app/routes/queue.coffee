`import Ember from 'ember'`

QueueRoute = Ember.Route.extend

  model: ->
    @store.find('preorder', {status: 'Изготовляется'})

  setupController: (controller, model) ->
    controller.set 'preorders', model
    controller.set 'currentUser',  @get 'session.currentUser'

  actions:
    socket_event: ->
      @refresh()

`export default QueueRoute`
