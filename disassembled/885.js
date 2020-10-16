Ext.define(E.f.notifications.zC, {
  extend: E.f.notifications.Xq,
  tj: "notifications-conversation-tab",
  runner: m,
  constructor: function () {
    this.callParent(arguments);
  },
  initComponent: function () {
    this.items.push(Ext.create(E.f.notifications.CC, {
      store: this.store,
      header: this.header
    }));
    this.callParent(arguments);
  }
});