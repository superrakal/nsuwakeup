`import Ember from 'ember'`

SyurupComponentComponent = Ember.Component.extend

  isAdded: (->
    preorder = @get 'preorder'
    isIn = false
    if preorder
      syurups = preorder.get 'syurups.content.currentState'
      if syurups.length
        for i in [0.. (syurups.length - 1)]
          if (@get 'syurup.id') == syurups[i].id
            isIn = true
      isIn
    else
      false
  ).property('preorder.syurups.length', 'preorder')

  actions:
    add: ->
      preorder = @get 'preorder'
      (preorder.get 'syurups').pushObject (@get 'syurup')
    remove: ->
      preorder = @get 'preorder'
      (preorder.get 'syurups').removeObject (@get 'syurup')
`export default SyurupComponentComponent`
