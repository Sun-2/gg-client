Ext.define(C.core.mixins.jr, {
  im: m,
  Nj: "expiresAt",
  Fm: m,
  Mm: !1,
  hz: Math.pow(2, 31) - 1,
  constructor: function (c) {
    c = c || {};
    this.Nj = c.Nj || this.Nj;
    this.on("add", this.I_, this);
    this.on("remove", this.p1, this);
    this.on("update", this.W1, this);
  },
  destroy: function () {
    this.im && this.sN();
    this.un("add", this.I_, this);
    this.un("remove", this.p1, this);
    this.un("update", this.W1, this);
  },
  iua: function (c) {
    c = c || this.Upa;
    this.im = new Ext.util.DelayedTask();
    c = (c - C.k().pg.getTime()) * 1000;

    if (c > this.hz) {
      c = this.hz;
    }

    this.im.delay(c, this.vJ, this);
  },
  Aja: function (c) {
    c = c || this.Upa;

    if (this.im) {
      c = (c - C.k().pg.getTime()) * 1000;

      if (c > this.hz) {
        c = this.hz;
      }

      this.im.delay(c, this.vJ, this);
    } else {
      this.iua(c);
    }
  },
  vJ: function () {
    this.each(function (c) {
      (c.get(this.Nj) | 0) == this.Fm && this.tz(c);
    }, this);
    this.sN();
    this.au(this.getRange());
  },
  sN: function () {
    this.im.cancel();
  },
  tz: function (c) {
    this.Mm = !0;
    this.remove(c);
    this.Mm = !1;
  },
  I_: function (c, f) {
    this.au(f);
  },
  p1: function () {
    this.au(this.getRange());
  },
  W1: function () {
    this.au(this.getRange());
  },
  uBa: function (c) {
    return c * 1000;
  },
  au: function (c) {
    if (this.Mm) {
      return m;
    }

    var f = !1;
    Ext.each(c, function (e) {
      e = e.get(this.Nj) || 0;
      parseInt(e, 10) && (this.Fm === m ? (this.X7(e), f = !0) : e < this.Fm && (this.X7(e), f = !0));
    }, this);
    f && this.Aja(this.Fm);
    return f;
  },
  X7: v("Fm"),
  xBa: x("Fm")
});