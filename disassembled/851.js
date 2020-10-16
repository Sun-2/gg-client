Ext.define(E.stores.LC, {
  extend: C.stores.Store,
  model: E.models.KC,
  id: "EDiskFilesStore",
  proxy: {
    type: "memory"
  },
  constructor: function () {
    this.callParent(arguments);
  }
});