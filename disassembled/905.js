Ext.define(E.f.windows.BG, {
  extend: C.f.windows.cc,
  da: m,
  constructor: function (c) {
    c = c || {};
    this.store = c.store;
    this.da = c.da || C.k().da;
    this.tpl = c.tpl;
    this.callParent([{
      Gb: this.tpl,
      Ab: c.Ab,
      cls: "settings-instances-wnd",
      Sb: c.Sb,
      buttons: c.buttons
    }]);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.callParent();
  },
  na: function () {
    this.Ota();
  },
  Ota: function () {
    this.V4 = this.V4 || Ext.create("Ext.view.View", {
      store: this.store,
      Pt: !0,
      tpl: this.da.ma("instances-list"),
      cls: "instances-list",
      itemSelector: ".session-item",
      emptyText: this.da.Wa("instances-list-no-results"),
      deferEmptyText: !1,
      renderTo: this.el.select(".body").first()
    });
    this.V4.on("itemclick", this.mb, this);
  },
  mb: function (c, p, o, n, f) {
    f.getTarget(".close-button") && this.store.remove(p);
  }
});