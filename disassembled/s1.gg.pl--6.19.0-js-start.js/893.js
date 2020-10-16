Ext.define(E.f.Tb.jE, {
  extend: "Ext.view.View",
  itemSelector: ".ignored-item",
  deferEmptyText: !1,
  constructor: function (c) {
    this.da = c.da || C.k().da;
    this.tpl = this.da.ma("ignored-item-list");
    this.emptyText = "<p>" + E.lang.fW + "</p>";
    this.callParent([c]);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent();
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.callParent();
  },
  na: function () {
    this.on("itemclick", this.mb, this);
  },
  mb: function (c, p, o, n, f) {
    f.getTarget(".btn-unignore") !== m && (C.k().hq.mn(Ext.getStore("UsersStore").xb(p.get("uin"))), this.store.remove([p]), this.fireEvent("unignore"));
  }
});