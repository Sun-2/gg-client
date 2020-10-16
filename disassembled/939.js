Ext.define(E.controllers.profile.$E, {
  extend: E.controllers.profile.vn,
  execute: function () {
    this.yN();
    C.k().ff.m9(this.Gh);
    this.rs(C.k().fa.get("uin"), function (c, f) {
      this.Sd(c, f);
    }.bind(this));
    C.k().fireEvent("profile:load");
    C.k().be.avatar.P8();
  },
  rg: function () {
    C.k().be.avatar.P8();
  },
  kd: function () {
    this.view = Ext.create(E.f.profile.vc.cF, {});
  },
  rs: function (c, f) {
    c == C.k().fa.get("uin") ? f(C.k().fa, !0) : this.callParent(arguments);
  }
});