Ext.define(E.f.$F, {
  extend: C.f.Jb,
  mixins: {
    Qd: E.core.mixins.ei,
    ka: C.core.mixins.Td
  },
  U9: 201,
  T9: 202,
  tn: 200,
  cls: "roulette-container",
  html: "",
  data: m,
  header: m,
  tj: m,
  Ft: m,
  zM: m,
  Uy: !1,
  $s: 0,
  at: 0,
  Ws: m,
  yM: m,
  eu: m,
  kc: m,
  Bt: m,
  CA: m,
  ka: {
    ".roulette-spinner-1": function (c) {
      this.gk(c) && this.zr();
    },
    ".roulette-spinner-2 .idle": function (c) {
      this.gk(c) && this.zr();
    },
    ".roulette-avatar": function () {
      C.Ca("profile/" + this.Ft.user.uin);
    },
    ".btn-cancel": function () {
      this.Kw();
      C.k().fireEvent("roulette:load");
    },
    ".btn-start-chat": function () {
      var c = Ext.getStore("UsersStore").xb(this.Ft.user.uin).yd();
      C.k().fc(c);
    },
    ".btn-see-how-you-are-seen": function () {
      this.Uy || this.Kw();
      C.Ca("roulette/others");
    },
    ".btn-back": function () {
      C.Ca("roulette");
    },
    ".btn-search-options": function () {
      this.Uy || this.Kw();
      C.Ca("roulette/search");
    },
    ".report-abuse": function () {
      var c = Ext.getStore("UsersStore").xb(this.Ft.user.uin),
          c = Ext.create(E.f.windows.iw, {
        Sb: !0,
        user: c
      });
      c.on(c.eR, this.Xga, this);
    }
  },
  constructor: function (c) {
    this.eu = Ext.create(E.f.sb.$G, {
      id: "rmpPlayer",
      width: 640,
      height: 360,
      PA: C.k().IJ().roulette["vast-url"]
    });
    this.kc = Ext.create(E.stores.Qc, {
      id: C.k().fa.get("uin")
    });
    this.Nqa();
    this.xga();
    var f = this.Gma();
    this.ro(f);
    this.data = this.Oma(f);
    this.addEvents("afterexecute");
    this.tpl = C.k().da.ma("roulette-container");
    this.Wua = C.k().da.ma("roulette-container-additional-info");
    this.XH = new Ext.util.DelayedTask(function () {
      C.k().qa.sa({
        msg: E.oa.uw,
        timeout: 3000
      });
      this.Kw();
    }, this);
    this.callParent(arguments);
    this.mixins.Qd.constructor.call(this);
    this.mixins.ka.constructor.call(this, c);
    this.getPosition();
  },
  initComponent: function () {
    this.callParent(arguments);
    this.mixins.Qd.initComponent.call(this);
    this.on("activate", this.Lx, this);
    this.on("afterrender", this.na, this);
    C.k().fa.on("aclsettingschanged", this.$ga, this);

    if (this.kCa == k) {
      var c = {};
      c.uin = C.k().fa.get("uin");
      E.api.Pb.Tj(c, {
        fn: function (e, l, f) {
          this.Uea(e, l, f);
        },
        scope: this
      }, {
        fn: function () {
          C.k().qa.sa({
            msg: E.oa.uw,
            timeout: 3000
          });
        },
        scope: this
      });
    }
  },
  Wj: function () {
    return this.getEl().select(".roulette-spinner-1").item(0);
  },
  Vj: function () {
    return this.getEl().select(".roulette-spinner-2").item(0);
  },
  RAa: function () {
    return this.getEl().select(".roulette-avatar").item(0);
  },
  XM: v("Ft"),
  YM: function (c) {
    this.Uy = !1;
    this.zM = c;
  },
  setPosition: function (c) {
    this.$s = c.coords.latitude;
    this.at = c.coords.longitude;
  },
  getPosition: function () {
    navigator.geolocation && navigator.geolocation.getCurrentPosition(Ext.bind(this.setPosition, this));
  },
  L7: function (c) {
    this.Ws = c;
    this.r9();
  },
  Lx: function () {
    this.r9();
  },
  na: function () {
    this.eu.Pqa();
    this.eu.Xf.container.addEventListener("addestroyed", function (c) {
      c.Bt = 20;
      c.l9();
    }.bind(m, this));
  },
  Uea: function (c) {
    Ext.Array.each(c.result["privacy-settings"].settings[1].items, function (e, l, f) {
      f[l].name == "im_privacy" && this.L7(f[l].value == "ON");
    }, this);
  },
  $ga: function (c) {
    this.L7(c.im_privacy == "ON");
  },
  EI: function () {
    this.header.IM(this.tj);
  },
  r9: function () {
    this.isVisible() && this.Ws != k && this.Ws && this.yM && this.yM.Xa();
  },
  pia: function (c) {
    this.zM != k && this.zM === c.roulette_id && (this.XH.cancel(), this.XM(c), c = this.Wj(), this.Vj(), this.isVisible() ? (c.addListener("webkitAnimationIteration", Ext.bind(this.SH, this)), c.addListener("animationiteration", Ext.bind(this.SH, this)), this.CA || (--this.Bt, this.l9())) : this.SH());
  },
  zr: function () {
    var c = C.k().AM;

    if (this.Ws != k) {
      this.Ws ? C.k().IJ().roulette.enabled && !this.CA && this.Bt <= 0 ? this.eu.Voa() : (c.uin = C.k().fa.get("uin"), c.$s = this.$s, c.at = this.at, E.api.ZF.create(c, {
        fn: function (e) {
          if (e.result.appStatus) {
            switch (e.result.appStatus) {
              case this.U9:
                e = E.oa.Pca;
                break;

              case this.T9:
                e = E.oa.Oca;
                break;

              default:
                e = E.oa.uw;
            }

            Ext.isObject(e) && C.k().qa.sa({
              msg: e
            });
          } else {
            this.YM(e.result.roulette_id);
            this.XH.delay(30000);
            this.getEl().select(".state-1").each(function (g) {
              g.setStyle("display", "none");
            });
            var e = this.Wj(),
                f = this.Vj();
            e.addCls("rotating-ccw");
            f.removeCls("idle").addCls("rotating");
            this.getEl().select(".state-2").each(function (g) {
              g.setStyle("display", "block");
            });
          }
        },
        scope: this
      }, {
        fn: function () {
          C.k().qa.sa({
            msg: E.oa.uw
          });
        },
        scope: this
      })) : this.yM = Ext.create(E.f.windows.bG, {});
    }
  },
  Kw: function () {
    this.XM(m);
    this.YM(m);
    this.XH.cancel();
    this.getEl().select(".state-2").each(function (e) {
      e.setStyle("display", "none");
    });
    this.getEl().select(".state-1").each(function (e) {
      e.setStyle("display", "block");
    });
    var c = this.Wj(),
        f = this.Vj();
    c.removeCls(["rotating-ccw", "hide"]);
    f.removeCls(["rotating", "hide"]).addCls("idle");
  },
  Sda: function () {
    this.XM(m);
    this.YM(m);
    this.getEl().select(".state-2").each(function (e) {
      e.setStyle("display", "none");
    });
    this.getEl().select(".state-3").each(function (e) {
      e.setStyle("display", "none");
    });
    this.getEl().select(".state-1").each(function (e) {
      e.setStyle("display", "block");
    });
    var c = this.getEl().select(".roulette-avatar .roulette-user-avatar").first();
    c && c.remove();
    var c = this.Wj(),
        f = this.Vj();
    c.removeCls(["d-none", "rotating-ccw", "hide"]);
    f.removeCls(["d-none", "rotating", "hide"]).addCls("idle");
  },
  jZ: function () {
    var c = this.Wj(),
        h = this.Vj();
    this.getEl().select(".user-btns").first().hide();
    c.removeAllListeners();
    this.getEl().select(".state-2").each(function (e) {
      e.setStyle("display", "none");
    });
    this.getEl().select(".state-3").each(function (e) {
      e.setStyle("display", "none");
    });
    this.getEl().select(".state-1").each(function (e) {
      e.setStyle("display", "block");
    });
    var f = this.getEl().select(".roulette-avatar .roulette-user-avatar").first();
    f && f.remove();
    c.removeCls(["d-none", "rotating-ccw", "rotating-ccw-match"]);
    h.removeCls(["d-none", "rotating", "rotating-match"]);
  },
  SH: function () {
    var c = this.Wj(),
        f = this.Vj();
    c.removeCls("rotating-ccw").removeAllListeners();
    f.removeCls("rotating");
    c.addCls("rotating-ccw-match");
    f.addCls("rotating-match");
    this.isVisible() ? (c.addListener("webkitAnimationEnd", Ext.bind(this.RH, this)), c.addListener("animationend", Ext.bind(this.RH, this))) : this.RH();
  },
  RH: function () {
    function c() {
      u.removeAllListeners();
      u.removeCls("avatar-show");
    }

    var w = this.Wj(),
        q = this.Vj();
    w.removeAllListeners();
    this.getEl().select(".state-1").each(function (e) {
      e.setStyle("display", "none");
    });
    this.getEl().select(".state-2").each(function (e) {
      e.setStyle("display", "none");
    });
    this.getEl().select(".state-3").each(function (e) {
      e.setStyle("display", "block");
    });
    var o = this.Ft,
        f = o.user.gender == "1" ? 1 : 2;
    this.Uy = !0;
    this.Wua.overwrite(this.getEl().select(".interlocutor").item(0), {
      label: o.user.label,
      age: o.user.age || m,
      city: o.user.city || m,
      uin: o.user.uin || m,
      H8: o.user.status_description || m,
      gender: f
    });
    var o = C.k().zc({
      uin: o.user.uin,
      size: this.tn,
      gender: f
    }),
        y = C.ca.Da.A3(f == "1" ? "female" : "male", this.tn),
        f = this.getEl().select(".roulette-avatar").item(0),
        u = new Ext.Element(document.createElement("img"));
    u.on("error", function () {
      this.set({
        src: y
      });
    }, u);
    this.isVisible() ? (u.addListener("webkitAnimationEnd", Ext.bind(c, this)), u.addListener("animationend", Ext.bind(c, this)), u.set({
      src: o,
      "class": "roulette-user-avatar avatar-show"
    })) : u.set({
      src: o,
      "class": "roulette-user-avatar"
    });
    f.appendChild(u);
    w.removeCls("rotating-ccw-match").addCls("hide");
    q.removeCls("rotating-match").addCls("hide");
    this.isVisible() ? (w.addListener("webkitAnimationEnd", Ext.bind(this.QH, this)), w.addListener("animationend", Ext.bind(this.QH, this))) : (c(), this.QH());
    this.getEl().select(".user-btns").first().show();
  },
  QH: function () {
    var c = this.Wj(),
        f = this.Vj();
    c.removeAllListeners();
    c.addCls("d-none").removeCls("hide");
    f.addCls("d-none").removeCls("hide");
  },
  Xga: function () {
    this.Sda();
    this.getEl().select(".user-btns").first().hide();
  },
  Gma: function () {
    return {
      btnSpin: {
        className: "btn-" + Math.random().toString(36).substring(2),
        callback: function (c) {
          this.gk(c) && (this.zr(), C.k().fireEvent("roulette:load"));
        }
      },
      btnSpinAgain: {
        className: "btn-" + Math.random().toString(36).substring(2),
        callback: function (c) {
          this.gk(c) && (this.jZ(), this.zr(), C.k().fireEvent("roulette:load"));
        }
      }
    };
  },
  ro: function (c) {
    Ext.Object.each(c, function (e, f) {
      this.ka["." + f.className] = f.callback;
    }, this);
  },
  Oma: function (c) {
    var f = {};
    f.counter = this.nb;
    Ext.Object.each(c, function (e, g) {
      f[e] = g.className;
    }, this);
    return f;
  },
  gk: function (c) {
    (c = c.browserEvent.isTrusted) || this.Jt();
    return c;
  },
  Jt: function () {
    C.k().et.send({
      type: "Untrusted event roullete",
      uin: C.k().fa.get("uin"),
      userAgent: navigator.userAgent || navigator.vendor
    });
  },
  Nqa: function () {
    this.Bt = this.kc.get(E.stores.Qc.rU, 20);
  },
  l9: function () {
    this.kc.set(E.stores.Qc.rU, this.Bt);
  },
  xga: function () {
    Ext.Ajax.request({
      url: C.k().IJ()["udstatus-url"],
      method: "GET",
      params: {
        uid: C.k().fa.get("uin")
      },
      success: function (c, f) {
        c.CA = JSON.parse(f.responseText);
      }.bind(this, this),
      failure: function (c) {
        c.CA = !1;
      }.bind(this, this)
    });
  }
});