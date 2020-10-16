Ext.define(E.f.profile.contact.nC, {
  extend: E.f.profile.$h,
  cls: "user-profile-description",
  ka: {
    "a.sr-anchor": function (c, f) {
      c.stopEvent();
      C.k().sg(f.href, this);
    }
  },
  initComponent: function () {
    this.data = {};
    this.tpl = C.k().da.Wa("profile-description");
    this.callParent(arguments);
  },
  na: function () {
    this.Yx = this.Yx || Ext.get("profile-description-wrap");
    this.callParent();
  },
  hc: function (c) {
    var h = this.Yx.select("span:first"),
        f = m,
        f = (c = c.get("protoInfo")) && c.description || "";

    if (f !== m && h.elements.length) {
      h.elements[0].innerHTML = C.ca.xa.wd(f, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]), f !== "" ? this.el.removeCls("d-none") : this.el.addCls("d-none");
    }
  },
  Zg: t()
});