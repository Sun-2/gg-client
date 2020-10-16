Ext.define(E.stores.DG, {
  extend: C.stores.Store,
  constructor: function () {
    this.callParent(arguments);
  },
  destroy: function () {
    this.callParent();
  }
});