`import Ember from 'ember'`

RootController = Ember.Controller.extend

  actions:
    create_preorder: ->
      @store.findAll('preorder').then (preorders) =>
        preorders.toArray().forEach (preorder) ->
          preorder.deleteRecord()
        preorder = @store.createRecord('preorder')
        preorder.save().then =>
          cookie.set('preorder_id', preorder.get('id'));
          @transitionToRoute 'coffee'

`export default RootController`
