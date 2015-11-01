import Ember from 'ember';
var SyurupComponentComponent;

SyurupComponentComponent = Ember.Component.extend({
  isAdded: (function() {
    var i, isIn, j, preorder, ref, syurups;
    preorder = this.get('preorder');
    isIn = false;
    if (preorder) {
      syurups = preorder.get('syurups.content.currentState');
      if (syurups.length) {
        for (i = j = 0, ref = syurups.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
          if ((this.get('syurup.id')) === syurups[i].id) {
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
    add: function() {
      var preorder;
      preorder = this.get('preorder');
      return (preorder.get('syurups')).pushObject(this.get('syurup'));
    },
    remove: function() {
      var preorder;
      preorder = this.get('preorder');
      return (preorder.get('syurups')).removeObject(this.get('syurup'));
    }
  }
});

export default SyurupComponentComponent;