Ext.define(E.f.notifications.oF, {
  extend: E.f.notifications.Xq,
  tj: "notifications-all-tab",
  iI: !0,
  constructor: function () {
    this.callParent(arguments);
  },
  initComponent: function () {
    this.items.push(Ext.create(E.f.notifications.pF, {
      store: this.store,
      header: this.header
    }), Ext.create(E.f.notifications.qF, {
      store: this.store
    }));
    this.callParent(arguments);
  }
});