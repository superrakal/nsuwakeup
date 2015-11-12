import { moduleForModel, test } from 'ember-qunit';
moduleForModel('preorder', 'Unit | Serializer | preorder', {
  needs: ['serializer:preorder']
});

test('it serializes records', function(assert) {
  var record, serializedRecord;
  record = this.subject();
  serializedRecord = record.serialize();
  return assert.ok(serializedRecord);
});
