import { moduleForModel, test } from 'ember-qunit';
moduleForModel('preorder', 'Unit | Model | preorder', {
  needs: []
});

test('it exists', function(assert) {
  var model;
  model = this.subject();
  return assert.ok(!!model);
});
