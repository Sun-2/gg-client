Ext.define(E.stores.wG, {
  extend: "Ext.data.Store",
  model: E.models.hl,
  sorters: [{
    property: "sorter",
    direction: "ASC"
  }],
  id: "SearchStore",
  proxy: {
    type: "memory"
  },
  constructor: function () {
    this.callParent(arguments);
  }
});