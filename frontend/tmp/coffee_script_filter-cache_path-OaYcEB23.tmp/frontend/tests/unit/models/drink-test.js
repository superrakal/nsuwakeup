import { moduleForModel, test } from 'ember-qunit';
moduleForModel('drink', 'Unit | Model | drink', {
  needs: []
});

test('it exists', function(assert) {
  var model;
  model = this.subject();
  return assert.ok(!!model);
});
