Ext.define(E.stores.XA, {
  extend: "Ext.data.Store",
  model: E.models.WA,
  proxy: {
    type: "memory"
  },
  constructor: function () {
    this.callParent(arguments);
  }
});