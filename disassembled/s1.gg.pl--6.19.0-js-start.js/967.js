Ext.define(E.f.layout.va.xn, {
  extend: C.f.An,
  mixins: {
    ea: C.core.mixins.kb
  },
  ea: m,
  name: "avatar-widget",
  cls: "avatar-widget",
  BH: {
    avail: !0,
    busy: !0,
    talk_to_me: !0,
    dnd: !0,
    invisible: !0,
    not_avail: !0,
    advert: !1,
    hidden: !1
  },
  iv: "not_avail",
  tpl: m,
  ta: m,
  od: m,
  ge: m,
  Pe: {
    description: function () {
      var c = this.D2;

      this.Ok = function () {
        var b = this.fa.get("description");
        b === "" ? (b = E.lang.bw, c.addCls("placeholder")) : c.removeCls("placeholder");
        this.Jja.innerHTML = C.ca.xa.wd(b, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]);
      };

      this.Ok();
    },
    nick: function () {
      this.Ok = function () {
        this.Ppa.innerHTML = eha(this.fa.fp());
      };

      this.Ok();
    },
    status: function () {
      this.D8.className = "sr-user-status ";
      this.Hk.addCls("status-" + this.fa.get("status"));
    }
  },
  constructor: function (c) {
    c = c || {};
    this.Zx = c.Zx || !1;
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd,
      uf: ["behaviorready"]
    }], [C.core.ea.sf, {
      ug: [0]
    }]];
    this.callParent(arguments);
    this.mixins.ea.constructor.call(this, c);
  },
  initComponent: function () {
    this.data = this.fa;
    this.jua = this.om();
    this.tpl = C.k().da.Wa("avatar-widget", {
      data: this.data,
      $p: this.jua
    });
    this.callParent(arguments);
    this.on("afterrender", this.gb, this);
    this.fa.on("datachanged", this.Rr, this);
    this.ta.on("connecting", this.g0, this);
    this.ta.on("reconnecting", this.Vr, this);
    this.ta.on("connected", this.Ml, this);
    this.ta.on("cantconnect", this.Jl, this);
    this.ta.on("disconnected", this.Fj, this);
  },
  destroy: function () {
    this.ta.un("connecting", this.g0, this);
    this.ta.un("reconnecting", this.Vr, this);
    this.ta.un("connected", this.Ml, this);
    this.ta.un("cantconnect", this.Jl, this);
    this.ta.un("disconnected", this.Fj, this);
    this.un("afterrender", this.gb, this);
    this.fa.un("datachanged", this.Rr, this);
    this.callParent();
  },
  om: function () {
    return [{
      uA: 2,
      name: "avail",
      label: E.lang.Fu
    }, {
      uA: 17,
      name: "talk_to_me",
      label: E.lang.Ju
    }, {
      uA: 3,
      name: "busy",
      label: E.lang.Gu
    }, {
      uA: 21,
      name: "dnd",
      label: E.lang.Hu
    }, {
      uA: 16,
      name: "invisible",
      label: E.lang.Iu
    }];
  },
  gb: function () {
    this.Efa();
    this.ofa();
    this.el.on("click", this.cha, this);
    this.Pe.description.call(this);
  },
  Efa: function () {
    var c = this.el.select(".status-li").elements;
    Ext.each(c, function (e, f) {
      Ext.get(e).dom.viewIndex = f;
    }, this);
  },
  ofa: function () {
    this.Hk = Ext.get(this.el.select(".sr-user-status").first());
    this.D8 = this.Hk.dom;
    this.bfa = Ext.get(this.el.select(".sr-user-avatar").first());
    this.cfa = this.bfa.dom;
    this.WZ = Ext.get(this.el.select(".sr-user-change-status").first());
    this.hza = this.WZ.dom;
    this.D2 = Ext.get(this.el.select(".sr-user-desc").first());
    this.Jja = this.D2.dom;
    this.Opa = Ext.get(this.el.select(".sr-user-name").first());
    this.Ppa = this.Opa.dom;
  },
  g0: t(),
  Vr: function () {
    this.qL();
  },
  Ml: function () {
    this.pL();
  },
  Jl: function () {
    this.it();
  },
  Fj: function () {
    this.it();
  },
  zN: function (c) {
    var n = m,
        l = m;
    c & 1 ? (n = this.iv, l = this.fa.get("status")) : (l = this.iv, n = this.fa.get("status"));

    try {
      this.Hk.removeCls(["status-" + l]), this.Hk.addCls("status-" + n);
    } catch (f) {}
  },
  qL: function () {
    this.yza = "";
    this.od = this.od || new Ext.util.TaskRunner();
    this.ge && this.od.stop(this.ge);
    this.ge = {
      run: this.zN,
      scope: this,
      interval: 500
    };
    this.od.start(this.ge);
  },
  pL: function () {
    if (this.ge) {
      this.od.stop(this.ge);
      var c = this.iv,
          h = this.fa.get("status");

      try {
        this.Hk.removeCls("status-" + c), this.Hk.addCls("status-" + h);
      } catch (f) {}
    }
  },
  it: function () {
    this.ge && this.od.stop(this.ge);
    var c = this.fa.get("status"),
        h = this.iv;

    try {
      this.Hk.removeCls("status-" + c), this.Hk.addCls("status-" + h);
    } catch (f) {}
  },
  getEl: x("WZ"),
  cha: function (c, h, f) {
    if (c.getTarget("a.sr-anchor") !== m) {
      return c.stopEvent(), C.k().sg(h.href, this), !0;
    }

    if (m !== c.getTarget(".sr-user-status-wrap")) {
      if (!this.ta.If()) {
        return !1;
      }

      this.TL(c, h, f);
    } else {
      m !== c.getTarget(".status-li") ? this.qha(c, h, f) : m !== c.getTarget(".avatar-widget") && this.sha();
    }
  },
  TL: function (c, h, f) {
    this.el.child(".sr-user-change-status").hasCls("d-none") && (this.el.child(".sr-user-change-status").removeCls("d-none"), this.fireEvent("show", {
      event: c,
      target: h,
      caller: f
    }));
  },
  sha: function () {
    this.Zx || this.el.addCls("selected");
    C.Ca("profile");
  },
  deselect: function () {
    this.el.removeCls("selected");
  },
  qha: function (c) {
    if (!this.ta.If()) {
      return !1;
    }

    var h = m,
        f = Ext.get(c.getTarget(".status-li")).dom.viewIndex;
    Ext.each(this.om(), function (e, g) {
      if (g == f) {
        h = e.name;
      }
    }, this);
    this.BH[h] && this.ta.K8(h);
  },
  Rr: function (c, f) {
    Ext.isObject(f) ? Ext.iterate(this.Pe, function (g, b) {
      typeof c.get(g) !== "undefined" && b.call(this);
    }, this) : this.Pe[f] && this.Pe[f].call(this);
  },
  Mc: function () {
    var c = this.cfa,
        f = this.D8 || m;
    return {
      uin: C.k().fa.get("uin"),
      zb: [{
        user: this.fa,
        avatar: c,
        status: f,
        size: 50
      }]
    };
  },
  kx: function () {
    try {
      this.Pe.nick.call(this);
    } catch (c) {}
  },
  vd: t()
});