Ext.define(E.f.layout.va.hb.nF, {
  extend: E.f.layout.va.hb.Tk,
  HJ: function (c) {
    var f = "";
    c.title && (f += '<div class="title">' + Ext.htmlEncode(c.title) + "</div>");
    c.subtitle && (f += '<div class="subtitle">' + E.lang.lT + ': <span class="notify-message">' + Ext.htmlEncode(c.subtitle) + "</span></div>");
    c.label && (f += '<div class="label">' + Ext.htmlEncode(c.label) + "</div>");
    f += '<div class="contents"></div>';
    return f;
  },
  initItems: function () {
    if (this.Ul) {
      this.pc = Ext.create(this.nDa || E.f.layout.va.hb.yq, {
        renderTo: this.Ul,
        Qe: this.Qe,
        Of: this.Of,
        Ke: this.Ke,
        Ef: this.Ef,
        Fd: this.Fd,
        jc: this.jc,
        yg: this.yg,
        Db: this.Db,
        Tg: this.Tg,
        Ug: this.Ug,
        Xm: this.Xm
      }), this.o3();
    }
  }
});