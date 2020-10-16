Ext.define(E.controllers.lC, {
  extend: E.controllers.nc,
  Lk: m,
  yr: m,
  md: m,
  ll: m,
  Fna: function () {
    this.ll = {
      ignore: {
        fn: C.k().Ts,
        target: this.G6,
        callback: this.oA
      },
      unignore: {
        fn: C.k().Yt,
        target: this.G6,
        callback: this.oA
      },
      enableContactAOL: {
        fn: C.k().ska,
        target: this.mk,
        callback: this.oA
      },
      disableContactAOL: {
        fn: C.k().Uja,
        target: this.mk,
        callback: this.oA
      }
    };
  },
  constructor: function () {
    this.yr = {};
    this.Fna();
  },
  init: function () {
    this.callParent(arguments);
    C.k().UM("splash", !0);
  },
  execute: function (c) {
    this.callParent(arguments);

    if (!this.Tqa(c.params)) {
      return !1;
    }

    this.Vga = Ext.create(E.f.Uc.mC, {});
    this.ll[this.Lk].target.call(this, this.yr.uin);
  },
  Tqa: function (c) {
    if (c.length == 3) {
      this.Lk = c[1];
      c = c[2];
      c.indexOf("?") == 0 && (c = c.substr(1));

      for (var c = c.split("&"), n = 0, l = c.length; n < l; n++) {
        var f = c[n].split("=");
        this.yr[f[0]] = f[1];
      }
    } else {
      return C.Ca(""), !1;
    }

    return !0;
  },
  Yea: function () {
    this.md && (this.md.on("destroy", this.Hx, this), this.md.on("confirmed", this.j1, this), this.md.on("canceled", this.Hx, this));
  },
  Qja: function () {
    this.md.un("destroy", this.Hx, this);
    this.md.un("confirmed", this.j1, this);
    this.md.un("canceled", this.Hx, this);
  },
  Hx: function () {
    this.Qja();
    this.md = m;
  },
  j1: function (c) {
    this.ll[this.Lk].fn(Ext.merge(this.yr, c));
  },
  mk: function (c) {
    C.Ca("");
    var h = Ext.getStore("ContactsStore").Ba(c);
    C.k().fc(h);
    var f = this;
    Ext.Function.defer(function () {
      var g = C.k().Ja.mk(c),
          b = C.k().Ja.hd(),
          o = b.getItem(c);
      o || (b.qo(g), o = b.getItem(c));
      o.expand();

      if (C.k().Zw) {
        f.ll[f.Lk].callback.call(f);
      } else {
        C.k().on("appready", f.ll[f.Lk].callback.bind(f));
      }
    }, 200, this);
  },
  G6: function (c) {
    C.Ca("profile/" + c);

    if (C.k().Zw) {
      this.ll[this.Lk].callback.call(this);
    } else {
      C.k().on("appready", this.ll[this.Lk].callback.bind(this));
    }
  },
  oA: function () {
    this.md = this.Vga.createPopup(this.Lk, Ext.clone(this.yr));
    this.Yea();
  }
});