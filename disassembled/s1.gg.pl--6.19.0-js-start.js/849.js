Ext.define(E.stores.qB, {
  extend: "Ext.data.Store",
  model: E.models.oB,
  sorters: [{
    property: "sorter",
    direction: "ASC"
  }],
  id: "AvatarsStore",
  proxy: {
    type: "memory"
  },
  constructor: function () {
    this.callParent(arguments);
  }
});