Ext.define(E.services.$q, {
  Eua: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  Woa: C.ca.Da.Pj() + "/images/loader_30_2.gif",
  hx: m,
  KH: m,
  $ua: 10000,
  constructor: function (c) {
    c = c || {};
    this.callParent([c]);

    if (typeof c.Jp !== "undefined") {
      this.Jp = c.Jp;
    }

    if (typeof c.lp !== "undefined") {
      this.lp = c.lp;
    }

    if (typeof c.Ep !== "undefined") {
      this.Ep = c.Ep;
    }

    this.hx = {};
    this.KH = [];
  },
  ez: function () {
    this.Jp.select(".load-peeks").each(function (c) {
      this.u5(c, 1);
    }, this);
  },
  u5: function (c, w) {
    var q = this.Ama(c),
        o = this.Bma(q),
        f = this.Cma(q),
        y = f.parent();

    if (this.tga(o)) {
      return this.j8(y, f), !0;
    }

    if (!f) {
      return !1;
    }

    if (this.Toa(o, f)) {
      return !0;
    }

    var u = f.getAttribute("data-src");
    f.removeCls("load-peeks").addCls("loading-peeks");

    if (!this.sga(o)) {
      return !1;
    }

    q = new Image();

    q.onload = function () {
      this.Wz(f, u);
      y.removeCls("loading");
      f.removeCls("loading-peeks");
      this.hx[o] = u;
    }.bind(this);

    q.onerror = function () {
      w > 0 ? (this.Wz(f, this.Woa), y.addCls("loading"), u += "&_t=" + new Date().getTime(), Ext.defer(function () {
        this.u5(f, 0);
      }, this.$ua, this)) : (this.KH.push(o), this.YCa === m && this.j8(y, f));
    }.bind(this);

    q.src = u;
  },
  Toa: function (c, f) {
    if (this.hx[c]) {
      return this.Wz(f, this.hx[c]), !0;
    }

    return !1;
  },
  Ama: function (c) {
    return c.parent(this.Ep);
  },
  Bma: function (c) {
    return c.dom.id;
  },
  Cma: function (c) {
    c = c.select(this.lp);

    if (!c.getCount()) {
      return !1;
    }

    return c.first();
  },
  Wz: function (c, f) {
    c.dom.src = f;
  },
  sga: function (c) {
    return Ext.get(c) !== m ? !0 : !1;
  },
  tga: function (c) {
    return this.KH.indexOf(c) !== -1;
  },
  j8: function (c, f) {
    c.removeCls("loading");
    f.removeCls("peeks-loading");
    this.Wz(f, this.Eua);
    f.dom.width = "60";
    f.dom.height = "60";
  }
});