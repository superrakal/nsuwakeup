import Ember from 'ember';
var CommentsComponentComponent;

CommentsComponentComponent = Ember.Component.extend({
  _init: (function() {
    return VK.Widgets.Comments("vk_comments", {
      limit: 15,
      width: "665",
      attach: "*"
    });
  }).on('didInsertElement')
});

export default CommentsComponentComponent;
