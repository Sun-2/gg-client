Ext.define(E.services.dB, {
  mixins: {
    observable: Ext.util.Observable
  },
  Fl: m,
  Ja: m,
  Xda: m,
  Yp: m,
  constructor: function (c) {
    c = c || {};
    (!c.Fl || !c.Ja) && j(Error(this.$className + "::constructor all dependencies must be provided!"));
    this.Fl = c.Fl || m;
    this.Ja = c.Ja || m;
    this.Yp = this.Xda = !0;
    this.Py();
  },
  Py: function () {
    this.Fl.on("cleanchatwindows", this.oha, this);
    this.Fl.on("soundnotifications", this.tia, this);
  },
  yk: function () {
    this.Fl.yk();
  },
  Vja: function () {
    this.Yp = !1;
  },
  wka: function () {
    this.Yp = !0;
  },
  lCa: x("Yp"),
  oha: function () {
    Ext.Array.each(this.Ja.hd().items.items, function (c) {
      c.clearAll();
    });
  },
  tia: function (c, f) {
    f ? this.wka() : this.Vja();
  }
});