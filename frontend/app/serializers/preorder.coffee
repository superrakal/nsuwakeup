`import DS from 'ember-data'`

PreorderSerializer = DS.ActiveModelSerializer.extend DS.EmbeddedRecordsMixin,
  attrs:
    syurups: {serialize: 'ids'}

`export default PreorderSerializer`
