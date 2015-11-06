define('frontend/tests/unit/models/syurup-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('syurup', 'Unit | Model | syurup', {
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model;
    model = this.subject();
    return assert.ok(!!model);
  });

});