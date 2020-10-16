Ext.define(E.stores.HG, {
  extend: E.stores.Ma.MG,
  id: "ShareLinksStore",
  loaded: !1,
  mixins: {
    Zj: E.core.mixins.LG
  },
  constructor: function () {
    this.callParent(arguments);
    this.mixins.Zj.constructor.call(this, arguments);
    this.dta(this.$ma);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.mixins.Zj.initComponent.call(this, arguments);
  },
  W_: function (c) {
    var h,
        f = [];
    (h = this.eg.indexOf(c)) != -1 && this.eg.splice(h, 1);

    if (this.eg.length == 0 && this.Nf.length) {
      Ext.each(this.Nf, function (e) {
        this.Xy(e) && e.xh() && f.push(e);
      }, this), this.mp(this.getCount(), f), this.Nf = [], this.fireEvent("databufferflushed");
    }
  },
  po: function (c, h) {
    var h = h || !1,
        f = [];
    Ext.each(c, function (e) {
      this.Xy(e) && e.xh() && f.push(e);
    }, this);
    h ? (this.Nf = this.Nf.concat(f), this.fireEvent("databuffered", "aol", this.Nf)) : this.mp(this.getCount(), f);
  },
  Nz: function (c, h) {
    c = c || !1;

    if (!this.wp) {
      c && this.eg.push("aol");
      this.wp = !0;
      var f = this.Jd,
          h = h || {};
      this.Em.Nz(f, h, {
        fn: function (b) {
          this.po(b, c);
          this.wp = !1;
        },
        scope: this
      }, {
        fn: function () {
          this.wp = !1;
          this.fireEvent("loaderror");
        },
        scope: this
      });
    }
  },
  DCa: function (c) {
    c = c || !1;

    if (!this.wp) {
      c && this.eg.push("aol");
      this.dt = !0;
      var h = this.Jd,
          f = {
        lastId: this.ama()
      };
      this.Em.Nz(h, f, {
        fn: function (b) {
          this.po(b, c);
          this.wp = !1;
        },
        scope: this
      }, {
        fn: function () {
          this.wp = !1;
        },
        scope: this
      });
    }
  },
  h1: function (c, f) {
    f = Ext.isArray(f) ? f : [f];
    Ext.each(f, function (e) {
      this.Xy(e) && e.xh() && this.mp(this.getCount(), e);
    }, this);
  },
  bra: function (c, f) {
    return +c.get("createdTime") - +f.get("createdTime");
  },
  ana: function (c, n, l, f) {
    if (n.length > 1 && f.length == 0) {
      return 1;
    }

    if (n.length == 0 && f.length > 1) {
      return -1;
    }

    if (n.length == 0 && f.length == 0) {
      return 0;
    }

    return +f[0].get("createdTime") - +n[0].get("createdTime");
  },
  $ma: function (c) {
    for (var w, c = c.get("attachments"), q = 0, o = c.length; q < o; q++) {
      for (var f = c[q], y = 0, u = f.length; y < u; y++) {
        if (w = f[y].link, typeof w != "undefined") {
          break;
        }
      }
    }

    return w;
  }
});