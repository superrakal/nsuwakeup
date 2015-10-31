`import Ember from 'ember'`

CoffeeRoute = Ember.Route.extend

  beforeModel: ->
    @store.find ('drink')

  model: ->
    id = cookie.get('preorder_id')
    @store.find('preorder', id)

  setupController: (controller, model) ->
    controller.set 'model', model
    controller.set 'drinks', @store.all('drink')

`export default CoffeeRoute`
