Ext.define(E.f.layout.Ga.Xu, {
  extend: E.f.layout.Ga.jj,
  members: m,
  A_: m,
  Lr: m,
  wf: m,
  Tt: m,
  Ra: m,
  $e: m,
  G4: ia,
  constructor: function (c) {
    this.app = C.k();
    this.ta = this.app.ta;
    this.addEvents("changeavatar", "unknownconferenceadded");
    this.callParent([c]);
    this.sk = this.Ha.De(this.Aa).qe();
    Ext.each(this.sk.get("extdata").members, function (e) {
      this.Sa.Rw(e);
    }, this);
    this.members = this.Sa.ema();
    this.Tt = [];
    this.Lr = m;
  },
  initComponent: function () {
    this.fb();
    this.tb = this.initialConfig.tb;
    this.callParent(arguments);
  },
  destroy: function () {
    this.eb();
    this.callParent(arguments);
  },
  ka: Ext.apply({
    ".conf-tbar-leave-btn": function (c) {
      c.preventDefault();
      this.pb.get("visible") === !1 ? this.fireEvent("leavechat", this, this.Aa) : this.qra();
    },
    ".change-avatar-btn": function (c) {
      this.Bp(m, c);
    }
  }, E.f.layout.Ga.jj.prototype.ka),
  fb: function () {
    this.on("unknownconferenceadded", this.Zr, this);
    this.ta.on("conferencepropertieschanged", this.k1, this);
  },
  eb: function () {
    this.ta.un("conferencepropertieschanged", this.k1, this);
    this.un("unknownconferenceadded", this.Zr, this);
    this.$e && this.$e.un("newstatusadded", this.$0, this);
  },
  MZ: function () {
    this.callParent();
    this.Sa.on("memberadded", this.P0, this);
    this.Sa.on("memberremoved", this.R0, this);
  },
  Y8: function () {
    this.Sa.un("memberadded", this.P0, this);
    this.Sa.un("memberremoved", this.R0, this);
    this.callParent();
  },
  k1: function () {
    this.zs("", m, !0);
  },
  expand: function () {
    this.callParent(arguments);
    this.Tm();
    this.pb.get("visible") === !1 && !this.Ra && this.vea();
    this.Ra && this.Ra.rendered && this.pb.get("visible") === !1 && (this.pb.set("ShowName", this.Sj(this.Sa.members)), this.Ra.Np(this.pb));
    this.$e && this.$e.rendered ? this.$e.Zm(this.pb.get("extdata") ? this.pb.get("extdata").title : m) : this.iea();
  },
  qra: function () {
    this.la.hs(this.Ha.De(this.Aa).qe(), {
      Ea: function () {
        C.k().qa.sa({
          msg: E.oa.HP,
          timeout: 2000
        });
        this.jI();
      },
      ya: function () {
        C.k().qa.sa({
          msg: E.oa.GP,
          timeout: 2000
        });
      },
      scope: this
    });
  },
  jI: function () {
    this.destroy();
  },
  YI: function () {
    if (this.Mf) {
      return this.Mf;
    }

    this.callParent();
    this.Tm();
    this.pb.get("visible") === !1 && this.Nta(this.EK.RG);
    return this.Mf;
  },
  Tm: function () {
    if (!this.rendered || !this.Je) {
      return !1;
    }

    Ext.Array.each(this.Tt, function (e) {
      e.un("memberchanged", this.Q0, this);
    }, this);
    this.A_ = [];
    this.Tt = [];
    var c = m;
    Ext.iterate(this.members, function (l, f) {
      c = this.getUserData(l);
      f && this.A_.push(f);
      var b = Ext.create(E.f.layout.Ga.YB, {
        data: c
      });
      b.on("memberchanged", this.Q0, this);
      this.Tt.push(b);
    }, this);

    if (this.Lr = this.Lr || this.el.select(".conf-tbar").first()) {
      if (this.nK) {
        this.nK.destroy(), this.nK = m;
      }

      this.nK = Ext.create(E.f.layout.Ga.ZB, {
        renderTo: this.Lr,
        items: this.Tt
      });
    }

    return !0;
  },
  Q0: function () {
    this.Tm();
  },
  Zr: function () {
    var c = this.T3(E.f.layout.Ga.jj.prototype.EK.RG);
    c && c.wm && c.wm.destroy();
    this.zs("", m, !0);
  },
  P0: function () {
    this.Tm();
  },
  R0: function () {
    this.Tm();
  },
  yEa: t(),
  kua: t(),
  Er: function () {
    this.wf.on("changeavatarsuccess", this.Ig, this);
    this.wf.on("destroy", this.Vt, this);
  },
  Vt: function () {
    this.wf.un("changeavatarsuccess", this.Ig, this);
  },
  zs: function (c, n, l) {
    this.sk.get("visible") && this.el.select(".change-avatar-btn").elements[0] && Ext.get(this.el.select(".change-avatar-btn").elements[0]).removeCls("d-none");
    n = n || this.Aa;
    l = l || !1;
    c = [];

    if (this.el.select(".sr-user-avatar").elements[0]) {
      var f = this.el.select(".sr-user-avatar").elements[0];
      c.push({
        uin: n,
        zb: [{
          user: this.sk,
          avatar: f,
          size: 50,
          name: ""
        }]
      });

      if (l) {
        Ext.Function.defer(this.fireEvent, 300, this, ["addedavatars", {
          object: c
        }]);
      } else {
        return c;
      }
    }
  },
  Ig: function (c, n) {
    if (this.sk && this.sk.get("protoInfo")) {
      var l = this.sk.jy(),
          f = this.sk.get("protoInfo");
      f.avatar = "" + l;
      Ext.getStore("ContactsStore").Ek([{
        uin: n,
        protoInfo: f,
        type: 4
      }]);
      this.ta.Bj(n, {
        avatar: f.avatar
      });
    }
  },
  Ot: function () {
    this.wf = Ext.create(E.f.windows.wq, {
      conferenceId: this.Aa
    });
    this.Er();
  },
  ZBa: function () {
    this.wf.Xa();
  },
  $0: function (c, f) {
    this.fireEvent("changestatus", this, f, {
      fn: this.updateStatus,
      scope: this
    }, {
      fn: this.kua,
      scope: this
    });
  },
  Ej: function (c, n, l) {
    this.callParent(arguments);
    "extdata" === n && (typeof l.title !== "undefined" && this.updateStatus(), l.members && this.Qva());
    var f = Ext.get(this.getEl().query(".title")[0]);
    f && this.pb.get("visible") === !1 ? f.addCls("not-saved") : f && f.removeCls("not-saved");
  },
  updateStatus: function () {
    this.$e && this.$e.rendered && this.$e.Ok(this.pb.get("extdata").title);
  },
  Qva: function () {
    this.nra();
    Ext.iterate(this.pb.get("extdata").members, function (c) {
      this.members[c.yb] = !0;
    }, this);
    this.Ra && this.Ra.rendered && this.pb.get("visible") === !1 && (this.pb.set("ShowName", this.Sj(this.Sa.members)), this.Ra.Np(this.pb));
    this.Tm();
  },
  nra: function () {
    this.members = this.Sa.members = {};
  },
  vea: function () {
    var c = this.pb.get("uin");
    this.Qpa = Ext.get(this.getEl().query(".name")[0]);
    this.Qpa.addCls("d-none");
    this.Ra = Ext.create(E.f.conference.kj, {
      renderTo: this.el.select(".title").first(),
      ae: 335,
      conferenceId: c
    });
  },
  iea: function () {
    this.$e = Ext.create(E.f.layout.Ga.XB, {
      renderTo: this.el.select(".description.conference").first(),
      ae: 312
    });
    this.$e.Ok(this.pb.get("extdata").title);
    this.$e.on("newstatusadded", this.$0, this);
  },
  Sj: function (c) {
    var h = [],
        f = [];
    Ext.iterate(c, function (e) {
      f.indexOf(parseInt(e)) === -1 && (e == C.k().fa.get("uin") ? h.push(E.lang.Bn) : h.push(this.getUserData(e).get("ShowName")), f.push(parseInt(e)));
    }, this);
    return E.lang.tq + h.join(", ");
  },
  q9: function () {
    var c;
    this.Ck = this.Ck || this.Xd.select(".nick").first();
    this.Qh = this.Qh || this.Nc.select(".title").first();
    this.bn = this.bn || this.Nc.select(".indicator .label").first();
    c = eht(this.pb.get("ShowName"));
    this.Ck && this.Ck.update(c);
    this.pb.get("visible") == !0 && this.Qh ? (this.Qh && this.Qh.select(".name").update(c), this.Qh.select(".name").removeCls("d-none")) : this.Ra && this.Ra.Np(this.pb);
    this.bn && this.bn.update(c);
  },
  n9: function () {
    var c = this.Nc.select(".settings-btn").first();

    if (!c) {
      return !1;
    }

    var f = !1;
    (f = C.k().ia.Rj(this.Aa) ? !0 : !1) ? c.addCls("hl") : c.removeCls("hl");
  },
  Bp: function (c, h) {
    var f = Ext.get(this.Nc.select(".change-avatar-btn").first());
    f.addCls("active");

    if (!this.Fa && this.sk.get("visible")) {
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
        }
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
    Ext.get(this.Nc.select(".change-avatar-btn").first()).removeCls("active");
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
    C.ca.Da.Sy(C.k().hy.My) && this.Ot();
  },
  Jg: function (c, h) {
    this.Fc();
    this.Fa && this.Fa.destroy();
    var f = h.get("id");
    E.api.Re.fO({
      id: this.Aa,
      type: "conference",
      xl: f
    }, {
      fn: this.Hl,
      scope: this
    }, {
      fn: this.Gl,
      scope: this
    });
  },
  ah: function () {
    this.Fc();
    this.Fa.destroy();
    E.api.Re.Wx({
      id: this.Aa,
      type: "conference"
    }, {
      fn: this.Ql,
      scope: this
    }, {
      fn: this.Pl,
      scope: this
    });
  },
  Ql: function () {
    this.Ig(m, this.Aa);
  },
  Pl: function () {
    C.k().qa.sa({
      msg: E.oa.ji
    });
  },
  Gl: function () {
    C.k().qa.sa({
      msg: E.oa.VW
    });
  },
  Hl: function () {
    Ext.defer(this.Ig, 100, this, [m, this.Aa]);
  }
});