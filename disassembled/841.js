Ext.define(E.stores.DE, {
  extend: "Ext.data.Store",
  model: E.models.Tn,
  sorters: [{
    property: "name",
    direction: "ASC"
  }],
  proxy: {
    type: "memory"
  },
  constructor: function () {
    this.callParent(arguments);
  }
});