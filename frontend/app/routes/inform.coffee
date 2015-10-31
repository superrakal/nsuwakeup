`import Ember from 'ember'`

InformRoute = Ember.Route.extend

  model: ->
    id = cookie.get('preorder_id')
    @store.find('preorder', id)

`export default InformRoute`
