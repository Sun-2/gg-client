Ext.define(C.stores.Store, {
  extend: "Ext.data.Store",
  constructor: function () {
    this.callParent(arguments);
    this.addEvents("fieldupdate");
  },
  dO: function (c, n, l, f) {
    this.fireEvent("fieldupdate", c, n, l, f);
  }
});