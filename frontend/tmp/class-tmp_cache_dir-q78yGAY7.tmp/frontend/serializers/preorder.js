define('frontend/serializers/preorder', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var PreorderSerializer;

  PreorderSerializer = DS['default'].ActiveModelSerializer.extend(DS['default'].EmbeddedRecordsMixin, {
    attrs: {
      syurups: {
        serialize: 'ids'
      }
    }
  });

  exports['default'] = PreorderSerializer;

});