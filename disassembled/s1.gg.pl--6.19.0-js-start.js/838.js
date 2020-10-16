Ext.define(E.stores.nE, {
  extend: "Ext.data.Store",
  model: E.models.mE,
  sorters: [{
    property: "sorter",
    direction: "ASC"
  }],
  id: "InstancesStore",
  proxy: {
    type: "memory"
  },
  constructor: function () {
    this.callParent(arguments);
  }
});