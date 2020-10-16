Ext.define(E.stores.ZA, {
  extend: "Ext.data.Store",
  model: E.models.YA,
  proxy: {
    type: "memory"
  },
  constructor: function () {
    this.callParent(arguments);
  }
});