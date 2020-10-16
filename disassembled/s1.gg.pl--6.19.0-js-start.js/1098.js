Ext.define(E.f.profile.vc.aF, {
  extend: E.f.profile.$h,
  textarea: m,
  $d: !1,
  bDa: !1,
  zAa: "",
  vb: m,
  description: "",
  cls: "my-profile-description",
  gJ: !1,
  ka: {
    ".btn-description-change": function () {
      this.$a.Mj();
      this.Gc();
    },
    ".btn-description-set": function () {
      this.Zm();
    },
    ".btn-description-cancel": function () {
      this.tM();
    },
    ".btn-description-old": function (c, h, f) {
      if (!this.gJ) {
        this.gJ = Ext.create(E.f.profile.vc.bF, {
          store: this.lg,
          renderTo: this.el.select(".last-descriptions").first(),
          parent: this
        });
      }

      this.gJ.open(c, h, f);
    }
  },
  constructor: function () {
    this.data = {};
    this.ta = C.k().ta;
    this.tpl = C.k().da.ma("my-profile-description");
    this.Lna();
    this.callParent(arguments);
  },
  initComponent: function () {
    this.items = [this.$a = Ext.create(E.f.layout.va.al, {
      El: this.Gc,
      wi: this,
      Ei: this.ps,
      si: function () {
        this.Cj(!0);
      },
      cls: "my-profile-desc",
      emptyText: E.lang.bw,
      maxLength: 255,
      multiline: !0,
      Dp: !0,
      ae: 700
    })];
    this.callParent(arguments);
  },
  hc: function (c) {
    if (!this.$a.Ce) {
      this.description = (c = c.get("protoInfo")) && c.description || "", this.$a.setText(this.description);
    }
  },
  na: function () {
    var c = this.el.select(".btn-description-change").first();
    c && (c.on("mouseenter", this.GI, this), c.on("mouseleave", this.HI, this));
    this.Gc();
    this.callParent();
  },
  GI: function () {
    this.$a.addCls("hover");
  },
  HI: function () {
    this.$a.removeCls("hover");
  },
  Gc: function () {
    this.$a.Ce ? (this.el.select(".btn-description-change").first().addCls("d-none"), this.el.select(".btn-description-set").first().removeCls("d-none"), this.el.select(".btn-description-cancel").first().removeCls("d-none")) : (this.el.select(".btn-description-change").first().removeCls("d-none"), this.el.select(".btn-description-set").first().addCls("d-none"), this.el.select(".btn-description-cancel").first().addCls("d-none"));
    this.Sqa() > 0 ? this.el.select(".btn-description-old").first().removeCls("d-none") : this.el.select(".btn-description-old").first().addCls("d-none");
  },
  Zm: function (c) {
    this.$a.oh();
    c = c || this.$a.getText();
    (c = Ext.String.trim(c)) ? (this.Fea(c), this.ta.qua(c), this.description = c) : this.ta.Iga();
    this.description = c;
    this.Gc();
  },
  tM: function () {
    this.$a.setText(this.description);
    this.$a.close();
    this.Gc();
  },
  destroy: function () {
    this.Yx.un("mouseenter", this.Pua, this);
    this.Yx.un("mouseleave", this.Pua, this);
    this.gAa();
  },
  Gza: function () {
    this.Zm();
  },
  Cx: function () {
    this.Gc();
  },
  ps: function () {
    clearTimeout(this.vb);
    this.vb = m;
    this.Zm();
    this.Gc();
  },
  Cj: function (c) {
    clearTimeout(this.vb);
    this.vb = m;

    if (c) {
      var f = this;
      this.vb = setTimeout(function () {
        f.tM();
      }, 700);
    } else {
      f.tM();
    }
  },
  Zg: t(),
  Lna: function () {
    try {
      this.lg = Ext.create(E.stores.FC, {
        uin: C.k().fa.get("uin")
      }), this.lg.on("load", this.Cx, this), this.lg.on("datachanged", this.Cx, this);
    } catch (c) {
      this.lg = m;
    }
  },
  hAa: function () {
    this.lg && (this.lg.un("load", this.Cx, this), this.lg.un("datachanged", this.Cx, this), this.lg.destroy());
  },
  Fea: function (c) {
    this.lg && this.lg.add(Ext.create(E.models.Jv, {
      description: c
    }));
  },
  Sqa: function () {
    if (this.lg) {
      return this.lg.getCount();
    }

    return 0;
  }
});