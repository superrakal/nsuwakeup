define('frontend/components/syurup-component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var SyurupComponentComponent;

  SyurupComponentComponent = Ember['default'].Component.extend({
    isAdded: (function () {
      var i, isIn, j, preorder, ref, syurups;
      preorder = this.get('preorder');
      isIn = false;
      if (preorder) {
        syurups = preorder.get('syurups.content.currentState');
        if (syurups.length) {
          for (i = j = 0, ref = syurups.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
            if (this.get('syurup.id') === syurups[i].id) {
              isIn = true;
            }
          }
        }
        return isIn;
      } else {
        return false;
      }
    }).property('preorder.syurups.length', 'preorder'),
    actions: {
      add: function add() {
        var preorder;
        preorder = this.get('preorder');
        return preorder.get('syurups').pushObject(this.get('syurup'));
      },
      remove: function remove() {
        var preorder;
        preorder = this.get('preorder');
        return preorder.get('syurups').removeObject(this.get('syurup'));
      }
    }
  });

  exports['default'] = SyurupComponentComponent;

});