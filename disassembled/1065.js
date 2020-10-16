Ext.define(E.f.windows.VF, {
  extend: C.f.pd,
  da: m,
  id: "refresh-session-wnd",
  cls: "refresh-session-wnd",
  refreshed: !1,
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.tpl = this.da.ma("refresh-session-window");
    this.data = {};
    this.callParent(arguments);
  },
  initComponent: function () {
    window.refreshed = this.Lz.bind(this);
    this.callParent();
  },
  destroy: function () {
    delete window.refreshed;
    this.callParent(arguments);
  },
  Lz: function (c) {
    Ext.Ajax.request({
      url: "/api/log/" + c,
      method: "GET"
    });
    c && c.length ? (this.refreshed = !0, C.k().d8(c), C.k().Pm(), this.destroy()) : (this.refreshed = !1, this.destroy(), C.k().logout());
  }
});