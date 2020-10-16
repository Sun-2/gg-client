Ext.define(E.f.profile.conference.HQ, {
  extend: E.f.profile.wn,
  tpl: "conference-header",
  cls: "profile-header",
  yc: m,
  Hr: m,
  iz: m,
  ef: m,
  $d: !1,
  constructor: function () {
    this.app = C.k();
    this.ta = this.app.ta;
    this.callParent(arguments);
    this.ro({
      ".conference-profile-change-avatar": function (c) {
        this.Bp(m, c);
      }
    });
    this.ef = Ext.create(C.stores.Store, {
      model: E.models.Ya
    });
  },
  destroy: function () {
    this.callParent();
    this.ef.destroy();
  },
  NJ: function () {
    return {
      cid: this.record.get("cid"),
      type: "conference"
    };
  },
  wt: function () {
    return [{
      text: "<div>" + E.lang.FP + "</div>",
      click: {
        fn: this.Ti,
        scope: this
      }
    }, {
      text: "<div>" + E.lang.NP + "</div>",
      click: {
        fn: this.rp,
        scope: this
      }
    }];
  },
  hc: function (c) {
    this.callParent(arguments);
    this.yc && (this.yc.destroy(), this.Hr.destroy(), this.iz.destroy());
    this.yc = this.createComponent(".conference-title", E.f.profile.conference.kj, {
      ae: 440,
      conferenceId: c.get("uin"),
      $d: this.$d
    });
    this.Hr = this.createComponent(".user-data-btns", E.f.profile.conference.av, {
      Oa: c
    });
    this.iz = this.createComponent(".members-list", E.f.profile.conference.jC, {
      store: this.ef
    });
    this.yc.conferenceId = c.get("uin");
    this.yc.Np(c);
    this.Hr.hc(c);
    this.Rva(c.get("extdata").members);
    this.refresh();
  },
  Rva: function (c) {
    var n = [],
        l = m,
        f = Ext.getStore("UsersStore");
    Ext.Object.getSize(c) == 1 ? n.push(C.k().fa) : c && Ext.each(c || {}, function (e) {
      l = e.yb == C.k().fa.get("uin") ? C.k().fa : f.xb(e.yb).Hb();
      n.push(l);
    }, this);
    this.ef.removeAll();
    n.length > 0 && this.ef.add(n);
  },
  Ti: function () {
    C.k().Ti({
      conferenceId: this.record.get("uin")
    });
  },
  rp: function () {
    C.k().rp(this.record);
  },
  Ot: function () {
    var c = this.record.get("uin");
    this.wf = Ext.create(E.f.windows.wq, {
      conferenceId: c
    });
    this.Er();
  },
  Er: function () {
    this.wf.on("changeavatarsuccess", this.Ig, this);
    this.wf.on("destroy", this.Vt, this);
  },
  Vt: function () {
    this.wf.un("changeavatarsuccess", this.Ig, this);
  },
  Ig: function (c, n) {
    if (this.record && this.record.get("protoInfo")) {
      var l = this.record.get("protoInfo"),
          f = this.record.jy();
      l.avatar = f;
      Ext.getStore("ContactsStore").Ek([{
        uin: n,
        protoInfo: l,
        type: 4
      }]);
      this.ta.Bj(n, {
        avatar: l.avatar
      });
    }
  },
  Bp: function (c, h) {
    var f = Ext.get(this.el.select(".conference-profile-change-avatar").first());
    f.addCls("active");

    if (!this.Fa && this.record.get("visible")) {
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
    Ext.get(this.el.select(".conference-profile-change-avatar").first()).removeCls("active");
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
    this.Cg(1);
    this.Fc();
    this.Fa && this.Fa.destroy();
    var f = h.get("id");
    E.api.Re.fO({
      id: this.record.get("uin"),
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
    var c = this.record.get("uin");
    E.api.Re.Wx({
      id: c,
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
    this.g7();
  },
  Pl: function () {
    this.Cg(0);
    C.k().qa.sa({
      msg: E.oa.ji
    });
  },
  Gl: function () {
    this.Cg(0);
    C.k().qa.sa({
      msg: E.oa.VW
    });
  },
  Hl: function () {
    Ext.defer(this.g7, 100, this);
    Ext.defer(this.Cg, 100, this, [0]);
  },
  g7: function () {
    this.Ig(m, this.record.get("uin"));
  },
  Cg: function (c) {
    var f = this.el.select(".conference-avatar-preloader-" + this.record.get("uin")).elements[0] || m;
    this.el.select(".sr-user-avatar");
    f && (c ? Ext.get(f).removeCls("d-none") : Ext.get(f).addCls("d-none"));
  }
});