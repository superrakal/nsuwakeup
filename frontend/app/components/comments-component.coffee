`import Ember from 'ember'`

CommentsComponentComponent = Ember.Component.extend
  _init: (->
    VK.Widgets.Comments("vk_comments", {limit: 15, width: $('.container').width() - 50, attach: "*"});
  ).on('didInsertElement')

`export default CommentsComponentComponent`
