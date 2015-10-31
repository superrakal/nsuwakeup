`import Ember from 'ember'`

SyurupRoute = Ember.Route.extend

  beforeModel: ->
    @store.find ('syurup')

  model: ->
    id = cookie.get('preorder_id')
    @store.find('preorder', id)

  setupController: (controller, model) ->
    controller.set 'model', model
    controller.set 'syurups', @store.all('syurup')

`export default SyurupRoute`
