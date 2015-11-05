`import Ember from 'ember'`

MypreordersRoute = Ember.Route.extend
  model: ->
    @get 'session.currentUser'

  setupController: (controller, model) ->
    controller.set 'model', model

`export default MypreordersRoute`
