Ext.define(E.f.Tb.BY, {
  extend: "Ext.Component",
  pO: "tab-selected",
  fR: "changetab",
  mixins: {
    ka: C.core.mixins.Td
  },
  ka: {
    ".tab-item": function (c) {
      this.zia(c.getTarget(".tab-item", m, !0));
    }
  },
  KY: "widget",
  JY: "account",
  ao: "notifications",
  qj: "privacy",
  kr: "advanced",
  bo: "sounds",
  constructor: function (c) {
    this.tpl = C.k().da.ma("settings-menu-tpl");
    this.bq = [];
    this.So(this.JY, E.lang.VV, "profile");
    this.So(this.qj, E.lang.jG, "privacy");
    this.So(this.ao, E.lang.aW, "notify");
    this.So(this.bo, E.lang.vV, "sounds");
    this.So(this.kr, E.lang.eV, "advanced");
    this.So(this.KY, E.lang.LV, "widget");
    this.data = this.bq;
    this.callParent([c]);
  },
  initComponent: function () {
    this.callParent();
    this.on("afterrender", this.na, this);
    this.mixins.ka.constructor.call(this, {});
  },
  destroy: function () {
    this.callParent();
    this.eb();
  },
  na: function () {
    this.zea();
  },
  zia: function (c) {
    this.fireEvent(this.fR, c);
  },
  Wda: function (c) {
    this.Lw(this.el.select(".tab-" + this.bq[c].name).first());
  },
  Lw: function (c) {
    this.el.select(".tab-item").removeCls(this.pO);
    c.addCls(this.pO);
  },
  zea: function () {
    this.menuItems = this.el.select(".tab-item");
    this.menuItems.each(function (c, h, f) {
      this.oea(c, f);
    }, this);
  },
  oea: function (c, f) {
    c.dom.viewIndex = f;
  },
  Nma: function (c) {
    return this.bq[c].name;
  },
  zL: function (c) {
    C.Ca("settings/" + this.bq[c].Vm);
  },
  Vla: function (c) {
    var f = 0;
    Ext.Array.each(this.bq, function (e, b) {
      if (e.Vm === c) {
        return f = b, !1;
      }
    });
    return f;
  },
  So: function (c, h, f) {
    this.bq.push({
      name: c,
      swa: h,
      Vm: f
    });
  }
});