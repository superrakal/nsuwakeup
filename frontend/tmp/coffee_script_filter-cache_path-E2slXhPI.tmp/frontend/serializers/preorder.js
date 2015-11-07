import DS from 'ember-data';
var PreorderSerializer;

PreorderSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    syurups: {
      serialize: 'ids'
    }
  }
});

export default PreorderSerializer;
