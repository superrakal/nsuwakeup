define('frontend/components/comments-component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var CommentsComponentComponent;

  CommentsComponentComponent = Ember['default'].Component.extend({
    _init: (function () {
      return VK.Widgets.Comments("vk_comments", {
        limit: 15,
        width: "665",
        attach: "*"
      });
    }).on('didInsertElement')
  });

  exports['default'] = CommentsComponentComponent;

});