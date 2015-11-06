`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'steps-components', 'Integration | Component | steps components', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{steps-components}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#steps-components}}
      template block text
    {{/steps-components}}
  """

  assert.equal @$().text().trim(), 'template block text'
