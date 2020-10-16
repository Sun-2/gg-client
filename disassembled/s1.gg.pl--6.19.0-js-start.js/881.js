Ext.define(E.f.notifications.uF, {
  extend: E.f.notifications.Xq,
  tj: "notifications-invitation-tab",
  Li: m,
  constructor: function () {
    this.callParent(arguments);
    this.Sh.on("datachanged", this.Nl, this);
    this.Nl(this.Sh);
  },
  initComponent: function () {
    this.Li = Ext.create(E.f.notifications.Xv, {
      hideMode: "display",
      store: this.Sh,
      header: this.header,
      emptyText: ""
    });
    this.Li.hide();
    this.jA = Ext.create(E.f.notifications.tE, {
      hideMode: "display",
      Li: this.Li
    });
    this.jA.hide();
    this.items.push(Ext.create(E.f.notifications.Xv, {
      store: this.Jk,
      header: this.header
    }), this.jA, this.Li);
    this.callParent(arguments);
  },
  Nl: function (c) {
    c.getCount() > 0 ? this.jA.show() : this.jA.hide();
  }
});