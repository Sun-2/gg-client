Ext.define(E.f.sb.YE, {
  extend: "Ext.Container",
  cls: "main-container",
  mixins: {
    Qd: E.core.mixins.ei
  },
  Ja: m,
  Fo: m,
  constructor: function () {
    this.Ja = C.k().Ja;
    this.callParent(arguments);
    this.mixins.Qd.constructor.call(this);
  },
  initComponent: function () {
    this.html = "&nbsp;";
    this.Fo = this.Ja.hja(E.f.layout.Ga.rd.zq);
    this.app = C.k();
    this.xe = this.app.bI.url;
    this.h8 = this.xe.length == 0 ? !1 : !0;
    this.so = Ext.create(E.f.sb.hB, {});
    this.sp = Ext.create(E.f.sb.wE, {});
    this.Ip = Ext.create(E.f.sb.YF, {});
    this.Awa = Ext.create(E.f.sb.cH, {
      I9: this.app.Sma()
    });
    this.items = [this.so, this.sp, this.Ip, this.Awa, this.Fo, Ext.create(E.f.layout.va.FG, {})];
    this.callParent(arguments);
    this.mixins.Qd.initComponent.call(this);
    this.on("show", this.Lx, this);
  },
  Bga: function () {
    this.h8 && (this.so.clear(), this.sp.clear(), this.Ip.clear());
  },
  destroy: function () {
    this.callParent();
    this.un("show", this.Lx, this);
  },
  Lx: function () {
    this.h8 && (this.so.reload(), this.sp.reload(), this.Ip.reload());
    var c = this.Fo.getActiveItem();
    c && (c.nsa(), C.k().af.Ak(c.Aa), C.k().Lc.setOwner(c));
  }
});