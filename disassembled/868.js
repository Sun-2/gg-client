Ext.define(E.f.sb.YF, {
  extend: E.f.sb.mu,
  id: "sr-advert-right",
  fg: !0,
  da: m,
  Ja: m,
  $g: m,
  ar: 1000,
  constructor: function (c) {
    c = c || {};
    this.app = C.k();
    this.xe = this.app.y7.url;
    this.Sp = this.xe.length == 0 ? !1 : !0;
    this.fg = c.fg || this.fg;
    this.da = this.app.da;
    this.Ja = this.app.Ja;
    this.fa = this.app.fa;
    this.app.Ip = this;
    this.callParent(arguments);
  }
});