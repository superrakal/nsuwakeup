`import Ember from 'ember'`

CommentsComponentComponent = Ember.Component.extend
  _init: (->
    VK.Widgets.Comments("vk_comments", {limit: 15, width: "665", attach: "*"});
  ).on('didInsertElement')

`export default CommentsComponentComponent`
