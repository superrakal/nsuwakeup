`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'steps-component', 'Integration | Component | steps component', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{steps-component}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#steps-component}}
      template block text
    {{/steps-component}}
  """

  assert.equal @$().text().trim(), 'template block text'
