Ext.define(E.Kd.xn, {
  extend: "Ext.Component",
  mixins: {
    ea: C.core.mixins.kb
  },
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
  C8: "not_avail",
  ta: m,
  od: m,
  ge: m,
  ea: m,
  HZ: m,
  E8: m,
  zEa: m,
  selected: m,
  status: m,
  description: m,
  nick: m,
  mua: m,
  connected: m,
  Le: m,
  ac: m,
  Pe: {
    description: function () {
      if (this.description !== this.PJ()) {
        this.description = this.PJ(), this.ac.store.dispatch(this.ac.operations.changeDescription(this.PJ()));
      }
    },
    nick: function () {
      if (this.nick !== this.fa.getDisplayName()) {
        this.nick = this.fa.getDisplayName(), this.ac.store.dispatch(this.ac.operations.changeName(this.fa.getDisplayName()));
      }
    },
    status: function (c) {
      c = c || this.fa.get("status");

      if (this.status !== c) {
        this.status = c, this.ac.store.dispatch(this.ac.operations.changeStatus(this.status));
      }
    },
    connected: function () {
      this.ac.store.dispatch(this.ac.operations.changeConnectionStatus(this.ta.If()));
    }
  },
  constructor: function (c) {
    c = c || {};
    this.Zx = c.Zx || !1;
    this.selected = !1;
    this.nick = this.description = this.status = "";
    this.mua = 0;
    this.connected = !1;
    this.callParent(arguments);
  },
  initComponent: function () {
    this.ta.on("reconnecting", this.Vr, this);
    this.ta.on("connected", this.Ml, this);
    this.ta.on("cantconnect", this.Jl, this);
    this.ta.on("disconnected", this.Fj, this);
    this.on("render", this.bh, this);
    this.on("afterrender", this.na, this);
    this.fa.on("datachanged", this.Rr, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.ta.un("reconnecting", this.Vr, this);
    this.ta.un("connected", this.Ml, this);
    this.ta.un("cantconnect", this.Jl, this);
    this.ta.un("disconnected", this.Fj, this);
    this.un("render", this.bh, this);
    this.un("afterrender", this.na, this);
    this.Le.destroy();
    this.fa.un("datachanged", this.Rr, this);
    this.callParent();
  },
  bh: function () {
    this.ac = C.k().At.avatarWidget;
    this.Le = this.ac.make({
      el: this.el.dom,
      props: {
        handleAvatarMounted: this.gha.bind(this),
        handleStatusMounted: this.xia.bind(this),
        handleWidgetClicked: this.Nia.bind(this),
        handleDescriptionAnchorClicked: this.Hha.bind(this),
        statuses: this.om()
      }
    });
    this.Le.render();
    this.ac.store.subscribe(function () {
      var c = this.ac.selectors.getStatus(this.ac.store.getState()),
          f = this.b4(c);

      if (f && f.name !== this.status) {
        this.wia(c), this.status = c;
      }
    }.bind(this));
  },
  na: function () {
    var c = this.el.select(".sr-user-change-status").first();
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd,
      uf: ["behaviorready"]
    }], [C.core.ea.sf, {
      fe: [c],
      ug: [0],
      Ge: function (e) {
        e.dom && Ext.get(e.dom).hasCls("sr-user-change-status") && this.ac.store.dispatch(this.ac.operations.showStatusList());
      }.bind(this)
    }]];
    this.mixins.ea.constructor.call(this, {});
  },
  gha: v("HZ"),
  xia: v("E8"),
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
  Rr: function (c, f) {
    Ext.isObject(f) ? Ext.iterate(this.Pe, function (g, b) {
      typeof c.get(g) !== "undefined" && b.call(this);
    }, this) : this.Pe[f] && this.Pe[f].call(this);
  },
  wia: function (c) {
    c = this.b4(c);
    c !== m && this.BH[c.name] && this.ta.K8(c.name);
  },
  Hha: function (c) {
    C.k().sg(c, this);
  },
  Nia: function () {
    C.Ca("profile");
  },
  P8: function () {
    this.selected = !this.selected;
    this.ac.store.dispatch(this.ac.operations.selectAvatarWidget(this.selected));
  },
  om: function () {
    C.k();
    return [{
      id: 2,
      name: "avail",
      label: E.lang.Fu
    }, {
      id: 17,
      name: "talk_to_me",
      label: E.lang.Ju
    }, {
      id: 3,
      name: "busy",
      label: E.lang.Gu
    }, {
      id: 21,
      name: "dnd",
      label: E.lang.Hu
    }, {
      id: 16,
      name: "invisible",
      label: E.lang.Iu
    }].map(function (c) {
      c.customCssClass = C.k().Wi(c.name);
      return c;
    });
  },
  b4: function (c) {
    var f = Ext.Array.filter(this.om(), function (b) {
      if (b.name === c) {
        return b;
      }
    });

    if (!f.length) {
      return m;
    }

    return f[0];
  },
  zN: function (c) {
    var f = m,
        f = c & 1 ? this.C8 : this.fa.get("status");
    this.Pe.status.call(this, f);
  },
  qL: function () {
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
    this.ge && (this.od.stop(this.ge), this.Pe.status.call(this));
    this.Pe.connected.call(this, !0);
  },
  it: function () {
    this.ge && this.od.stop(this.ge);
    this.Pe.status.call(this, this.C8);
    this.Pe.connected.call(this, !1);
  },
  kx: function () {
    this.Pe.nick.call(this);
  },
  PJ: function () {
    var c = this.fa.get("description");

    if (c === "") {
      c = E.lang.bw;
    }

    return C.ca.xa.wd(c, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]);
  },
  Mc: function () {
    var c = this.HZ,
        f = this.E8;
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
  vd: t()
});