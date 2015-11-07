define('frontend/tests/integration/components/comments-component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('comments-component', 'Integration | Component | comments component', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);
    this.render(hbs("{{comments-component}}"));
    assert.equal(this.$().text().trim(), '');
    this.render(hbs("{{#comments-component}}\n  template block text\n{{/comments-component}}"));
    return assert.equal(this.$().text().trim(), 'template block text');
  });

});