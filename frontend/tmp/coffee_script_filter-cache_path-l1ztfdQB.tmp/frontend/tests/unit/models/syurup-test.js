import { moduleForModel, test } from 'ember-qunit';
moduleForModel('syurup', 'Unit | Model | syurup', {
  needs: []
});

test('it exists', function(assert) {
  var model;
  model = this.subject();
  return assert.ok(!!model);
});
