`import Ember from 'ember'`

RootController = Ember.Controller.extend

  actions:
    create_preorder: ->
      preorder = @store.createRecord('preorder')
      preorder.save().then =>
        cookie.set('preorder_id', preorder.get('id'))
        location.replace('/coffee')


`export default RootController`
