Ext.define(E.f.profile.vc.$S, {
  extend: E.f.profile.wn,
  tpl: "profile-header",
  Dy: m,
  Tp: !0,
  Kb: m,
  constructor: function () {
    this.callParent(arguments);
    this.addCls("my-profile-header");
    this.ro({
      ".my-profile-change-avatar": function (c) {
        this.Bp(m, c);
      }
    });
    this.uea({
      ".sr-user-gvc": function (c) {
        this.iqa(c);
      }
    });
  },
  wt: function () {
    return [{
      text: "<div><span>" + E.lang.JF + "</span></div>",
      click: function () {
        C.Ca("settings/profile");
      }
    }, {
      text: "<div><span>" + E.lang.KT + "</span></div>",
      click: {
        fn: function (c) {
          this.Bp(m, c);
        },
        scope: this
      }
    }, {
      text: "<div><span>" + E.lang.cU + "</span></div>",
      click: function () {
        C.Ca("settings/privacy");
      }
    }];
  },
  iqa: function (c) {
    if (c.type === "mouseout") {
      this.Dy && this.Dy.destroy();
    } else {
      if (c.type === "mouseover") {
        this.Dy = Ext.create(C.f.ai, {
          anchor: Ext.select(".sr-user-gvc").first(),
          Ss: !0,
          content: C.k().da.Wa("GVC-desription-template"),
          position: "rc",
          offset: {
            x: 0,
            y: 0
          },
          listeners: {
            destroy: function () {
              this.Dy = m;
            }.bind(this)
          }
        });
      }
    }
  },
  hc: function (c, h, f) {
    this.record = c;
    this.callParent(arguments);
    this.data.ZH = !0;
    this.data.hA = !1;

    if (this.Tp) {
      if (!this.Kb) {
        this.Kb = this.createComponent(".user-data-btns", E.f.profile.contact.lj, {});
      }

      this.Kb.Pg(c, h, f);
    }

    this.refresh();
  },
  Bp: function (c, h) {
    var f = Ext.get(this.el.select(".my-profile-change-avatar").first());
    f.addCls("active");

    if (!this.Fa) {
      this.Fa = Ext.create(E.f.profile.vc.Vq, {
        anchor: f,
        event: h,
        position: "bl",
        offset: {
          x: -9,
          y: -3
        },
        Jh: {
          width: 400
        },
        record: this.record
      }), this.yl();
    }
  },
  yl: function () {
    this.Fa && this.Fa.qb && (this.Fa.qb.on("openavataruploader", this.Wg, this), this.Fa.qb.on("removeavatar", this.ah, this), this.Fa.qb.on("avatarpicked", this.Jg, this));

    if (this.Fa) {
      this.Fa.on("beforedestroy", this.Fc, this);
    }
  },
  Fc: function () {
    Ext.get(this.el.select(".my-profile-change-avatar").first()).removeCls("active");
    this.Fa && this.Fa.qb && (this.Fa.qb.un("openavataruploader", this.Wg, this), this.Fa.qb.un("removeavatar", this.ah, this), this.Fa.qb.un("avatarpicked", this.Jg, this));
    this.Fa && this.Fa.un("beforedestroy", this.Fc, this);
    Ext.defer(this.Qm, 10, this);
  },
  Qm: function () {
    this.Fa = !1;
  },
  Wg: function () {
    this.Fc();
    this.Fa && this.Fa.destroy();
    C.ca.Da.Sy(C.k().hy.My) && Ext.create(E.f.windows.Tv, {
      fa: this.fa
    });
  },
  ah: function () {
    this.Fc();
    this.Fa.destroy();
    var c = C.k().fa.get("uin");
    E.api.Re.Wx({
      id: c,
      type: "user"
    }, {
      fn: this.Ql,
      scope: this
    }, {
      fn: this.Pl,
      scope: this
    });
  },
  Pl: function () {
    C.k().qa.sa({
      msg: E.oa.ji
    });
  },
  Ql: t(),
  Jg: function (c, n) {
    this.Fc();
    this.Fa && this.Fa.destroy();
    var l = n.get("id"),
        f = C.k().fa.get("uin");
    this.Cg(1);
    E.api.Re.eO({
      uin: f,
      xl: l
    }, {
      fn: this.Hl,
      scope: this
    }, {
      fn: this.Gl,
      scope: this
    });
  },
  Hl: function () {
    this.Cg(0);
  },
  Gl: function () {
    this.Cg(0);
    C.k().qa.sa({
      msg: E.oa.ji
    });
  },
  Cg: function (c) {
    var h = this.el.select(".user-avatar-preloader-" + C.k().fa.get("uin")).elements[0] || m,
        f = this.el.select(".sr-user-avatar").elements[0] || m;
    h && (c ? (Ext.get(f).addCls("d-none"), Ext.get(h).removeCls("d-none")) : (Ext.get(f).removeCls("d-none"), Ext.get(h).addCls("d-none")));
  },
  refresh: function () {
    this.callParent();

    if (Ext.isIE) {
      this.Kb && this.Kb.destroy(), this.Kb = this.createComponent(".user-data-btns", E.f.profile.contact.lj, {});
    }

    this.Kb && this.Kb.Pg(this.record, this.Od, this.Bd);
    this.fireEvent("afterrefresh", this);
  },
  destroy: function () {
    this.Kb && this.Kb.destroy();
    this.callParent();
  }
});