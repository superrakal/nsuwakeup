`import Ember from 'ember'`

ApplicationRoute = Ember.Route.extend

  model: ->
    @get 'session.currentUser'

  setupController: (controller, model) ->
    controller.set 'model', model

`export default ApplicationRoute`
