define('frontend/tests/integration/components/steps-components-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('steps-components', 'Integration | Component | steps components', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{steps-components}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#steps-components}}\n  template block text\n{{/steps-components}}"));
    return assert.equal(this.$().text().trim(), 'template block text');
  });

});