Ext.define(E.controllers.profile.IC, {
  extend: E.controllers.profile.ou,
  rs: function (c, h) {
    var f = this.la.findRecord("cid", c, 0, !1, !1, !0);
    h(f || !1, f ? !0 : !1);
    this.Kz(f);
  },
  kd: function () {
    this.view = Ext.create(E.f.profile.contact.JC, {});
  },
  execute: function (c) {
    "0" == c.params[1] || !this.la.ly(c.params[1]) ? C.vs("error/404/page") : this.callParent(arguments);
  },
  rg: function () {
    this.xd && this.callParent(arguments);
  },
  Mx: function (c, f) {
    this.xd && this.xd.get("cid") == f.get("cid") && Ext.Function.defer(this.Kz, 500, this, [f]);
  },
  Kz: function (c) {
    c && c.get("uin") && (c = c.get("uin"), c.length > 0 && c != 0 && c != "0" && C.Ca("profile/" + c));
  }
});