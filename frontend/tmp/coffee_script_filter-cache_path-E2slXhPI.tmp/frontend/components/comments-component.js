import Ember from 'ember';
var CommentsComponentComponent;

CommentsComponentComponent = Ember.Component.extend({
  _init: (function() {
    return VK.Widgets.Comments("vk_comments", {
      limit: 15,
      width: $('.container').width() - 50,
      attach: "*"
    });
  }).on('didInsertElement')
});

export default CommentsComponentComponent;
