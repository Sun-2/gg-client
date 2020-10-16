Ext.define(E.f.cG, {
  extend: C.f.Jb,
  mixins: {
    Qd: E.core.mixins.ei,
    ka: C.core.mixins.Td,
    ea: C.core.mixins.kb
  },
  tn: 200,
  cls: "roulette-container",
  html: "",
  data: {},
  header: m,
  tj: m,
  Fa: m,
  ka: {
    ".btn-change-avatar": function (c) {
      this.getAnchor().addCls("active");

      if (!this.Fa) {
        this.Fa = Ext.create(E.f.profile.vc.Vq, {
          anchor: this.getAnchor(),
          event: c,
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
    ".btn-edit-profile": function () {
      C.Ca("settings/profile");
    },
    ".btn-back": function () {
      C.Ca("roulette");
    },
    ".btn-search-options": function () {
      C.Ca("roulette/search");
    }
  },
  constructor: function (c) {
    this.addEvents("afterexecute");
    this.tpl = C.k().da.ma("roulette-other-container");
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd,
      uf: ["addedavatars"],
      Fk: !0
    }]];
    this.callParent(arguments);
    this.mixins.Qd.constructor.call(this);
    this.mixins.ka.constructor.call(this, c);
    this.mixins.ea.constructor.call(this, c);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.mixins.Qd.initComponent.call(this);
    this.data = {
      label: this.data.label,
      personalDataText: this.W6(this.data),
      avatarUrl: this.data.avatarUrl,
      statusDescription: this.data.statusDescription
    };
    this.on("afterrender", this.na, this);
    this.on("refresh", this.Nw, this);
  },
  getAnchor: function () {
    return Ext.get(this.el.select(".btn-change-avatar").first());
  },
  yl: function () {
    this.Fa && this.Fa.qb && (this.Fa.qb.on("openavataruploader", this.Wg, this), this.Fa.qb.on("removeavatar", this.ah, this), this.Fa.qb.on("avatarpicked", this.Jg, this));

    if (this.Fa) {
      this.Fa.on("beforedestroy", this.Fc, this);
    }
  },
  Fc: function () {
    this.getAnchor().removeCls("active");
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
  Ql: t(),
  Cg: t(),
  EI: function () {
    this.header.IM(this.tj);
  },
  na: function () {
    this.Nw();
  },
  $va: function (c) {
    var h = c.label,
        f = c.lua || "",
        c = this.W6(c),
        h = '<p class="info">' + C.ca.Dc.htmlText(h) + "</p>";
    h += '<p class="aditionalInfo">' + c + "</p>";
    h += '<p class="statusDescription">' + f + "</p>";
    this.getEl().select(".interlocutor").item(0).replaceWith({
      cls: "interlocutor",
      html: h
    });
  },
  W6: function (c) {
    var n = c.age ? ("" + c.age).trim() : "",
        l = c.city ? c.city.trim() : "",
        c = [(c.gender === 1 ? E.lang.Cu : E.lang.Du).toLowerCase()],
        f = "";
    n !== "" && (n = C.ca.Dc.htmlText(n.trim()) + " " + C.ca.xa.aK(n, E.lang.Lu, E.lang.Ku, E.lang.sq), c.push(n));
    l !== "" && (f = "<br>" + C.ca.Dc.htmlText(l.trim()));
    return c.join(", ") + f;
  },
  Mc: A(m),
  vd: t(),
  Nw: function () {
    var c = this.getEl().query(".roulette-user-avatar")[0];
    this.fireEvent("addedavatars", {
      object: {
        uin: C.k().fa.get("uin"),
        zb: [{
          user: C.k().fa,
          avatar: c,
          size: this.tn
        }]
      }
    });
  }
});