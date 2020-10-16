Ext.define(E.ye.lB, {
  extend: C.core.ye.rB,
  name: "ggpl",
  lang: "pl",
  config: m,
  da: m,
  et: m,
  AM: {},
  ZM: v("AM"),
  DBa: x("AM"),
  vf: m,
  sd: m,
  Ja: m,
  af: m,
  Ww: m,
  ff: m,
  so: m,
  sp: m,
  Ip: m,
  Lc: m,
  ue: m,
  preferences: m,
  r_: m,
  Vl: m,
  B8: m,
  Mfa: m,
  rn: !1,
  V$: new Date(new Date().getTime() + 31536000000),
  PK: !1,
  yQ: "ggpl-<uin>-",
  sounds: m,
  Kya: m,
  AAa: "focus",
  s_: {},
  hy: {
    xEa: "10.2.0",
    QBa: "10.0.0",
    My: "10.0.0"
  },
  GEa: [["/", "0sWQAiOSGy4rj.Qzp5Tj1pYUPzMRfTsK6j3.6gAMp27.I7"], ["__unknown__", "bQ.lFg9BEXKAeMyixdBvz_VDTDOpYywjQt9JRMsRKSb.G7"]],
  FEa: [],
  OL: m,
  Zw: !1,
  jg: m,
  kg: m,
  oH: m,
  nM: m,
  Poa: m,
  o5: {},
  SL: {},
  Ha: m,
  oo: m,
  hq: m,
  Pf: m,
  kN: !0,
  Bca: 10000,
  Cca: 10000,
  ey: m,
  pba: "england_migration_timestamp_{0}",
  jBa: function (c) {
    typeof c !== "string" && j(Error("getFeatureConfig(): keyString name must be a string"));

    for (var c = c.split("."), p = this.ey, o = 0, n = c.length; o < n; o++) {
      var f = c[o];

      if (typeof p[f] !== "undefined") {
        p = p[f];
      } else {
        return m;
      }
    }

    return p;
  },
  j6: function () {
    this.ia = Ext.create(C.core.Yb.OF, {});
    this.ia.Zna(this.preferences);
    this.At = window.rawReactComponents;
    delete window.rawReactComponents;
    this.af = Ext.create(C.core.Yb.lD, {});
    this.Ed = Ext.create(C.core.Yb.JG, {
      renderTo: Ext.getBody(),
      sounds: this.preferences.sounds
    });
    this.fa = Ext.create(C.models.Bw, this.Kh);
    this.callParent(arguments);
    this.ta.init({
      uin: this.Kh.uin,
      fa: this.fa,
      la: Ext.data.StoreManager.lookup("ContactsStore"),
      lang: this.lang
    });
    this.og.init();
    this.Eta();
    this.Ed.on("soundstart", this.nN, this, "soundstart");
    this.Ed.on("soundend", this.nN, this, "soundend");
    this.Ed.on("soundloadstart", this.nN, this, "soundloadstart");
    this.ta.on("connected", this.Ml, this);
    this.ta.on("cantconnect", this.Jl, this);
    this.ta.on("logout", this.logout, this);
    this.on("appfocus", this.Ox, this);
    window.localStorage.setItem("window_lock", !1);
  },
  Eta: function () {
    if (!this.Mea) {
      this.Mea = !0;
      this.addEvents("appfocus", "appblur");

      var c = this,
          w,
          q = !1,
          o = function () {
        w && clearTimeout(w);

        if (!c.rn) {
          c.rn = !0, c.fireEvent("appfocus");
        }
      },
          f = function () {
        w && clearTimeout(w);
        w = setTimeout(function () {
          if (c.rn) {
            q = !1, c.rn = !1, c.fireEvent("appblur");
          }
        }, 500);
      },
          y = function () {
        f();
      },
          u = function () {
        if (!this.onblur) {
          this.onblur = y;
        }

        if (!this.contentWindow.onblur) {
          this.contentWindow.onblur = y;
        }

        o();
      };

      if (!Ext.isIE) {
        Ext.getBody().on("click", function () {
          q = !0;
          o();

          if (document.activeElement && document.activeElement.tagName === "IFRAME" && !document.activeElement.contentWindow.onblur) {
            document.activeElement.contentWindow.onblur = y, document.activeElement.contentWindow.onfocus = u, document.activeElement.onblur = y, document.activeElement.onfocus = u;
          }
        });
      }

      Ext.getBody().on("mouseleave", function () {
        (Ext.isGecko || Ext.isIE || !q) && f();
      });
      Ext.getBody().on("mouseenter", function () {
        o();
      });

      (function (e) {
        HTMLIFrameElement.prototype.focus = function () {
          e.apply(this, arguments);
          u.apply(this);
        };
      })(HTMLIFrameElement.prototype.focus);

      (function (e) {
        HTMLIFrameElement.prototype.blur = function () {
          e.apply(this, arguments);
          y.apply(this);
        };
      })(HTMLIFrameElement.prototype.blur);

      Ext.EventManager.addListener(window, "focus", function () {
        o();
      });
      Ext.EventManager.addListener(window, "blur", function () {
        f();
      });
    }
  },
  zCa: x("rn"),
  f3: function () {
    if (!this.Sya) {
      this.fireEvent("appready"), this.Zw = !0;
    }
  },
  logout: function () {
    this.kc.set(E.stores.Qc.DB, !0);
    this.ta.logout();
    ggplAuth.auth.embeddedLogout();
    Ext.defer(ggplAuth.auth.embeddedLogout, 200, this);
  },
  Ml: function () {
    if (this.PK === !1) {
      this.PK = !0, this.oo.yk();
    }

    this.kc.set(E.stores.Qc.DB, !1);
    this.f3();
    this.Mfa = Ext.create(E.core.xi.vB, {
      documentElement: Ext.fly(document.documentElement)
    });
    this.afa();
  },
  afa: function () {
    var c = Ext.getStore("ContactsStore");
    c.each(function (f) {
      if (f.Rg()) {
        var b = f.get("protoInfo");
        b.status = "avail";
        Ext.Array.each(c.Va[f.get("cid")], function (e) {
          e.set("protoInfo", b);
        }, this);
      }
    });
  },
  Jl: function () {
    this.f3();
  },
  s0: function () {
    this.Co("playOnError") && this.Az(!0, !1);
    this.callParent();
  },
  nN: function (c, h, f) {
    this.fireEvent(f, this, h, f);
  },
  onLaunch: t(),
  mf: function (c) {
    var f = C.k().config.Nk[c].cls,
        c = C.k().config.Nk[c].jp;
    Ext.get("sr-main").removeCls([this.config.Nk["template-1"].cls, this.config.Nk["template-2"].cls, this.config.Nk["template-3"].cls]);
    Ext.get("sr-main").addCls(f);
    Ext.get("sr-header").removeCls([this.config.Nk["template-1"].jp, this.config.Nk["template-2"].jp, this.config.Nk["template-3"].jp]);
    Ext.get("sr-header").addCls(c);
  },
  I4: function () {
    var c = Ext.create(this.config.be, {
      fa: this.fa
    });
    c.init();
    return c;
  },
  nm: function () {
    return this.ia.preferences;
  },
  VM: function (c) {
    this.ia.VM(c);
  },
  ob: function (c) {
    return this.nm().preferences.iapps[c] ? this.nm().preferences.iapps[c] : k;
  },
  oCa: function (c, f) {
    return typeof c !== "undefined" && c instanceof f ? !0 : !1;
  },
  fc: function (c, n, l, f) {
    l = typeof l !== "undefined" ? l : !0;
    f = f || !1;
    this.cp().name == "default" ? this.be.Zl.fc(c, n, l, f) : C.Ca("", {
      fc: [c, n, l, f]
    });
  },
  o_: function (c) {
    var f;
    var h = this.Ja.hd();

    if (!h) {
      return !0;
    }

    if (f = (h = h.getRef(this.Ja.Ld(c))) ? h.item : h, h = f) {
      h.destroy(), this.Mz(c);
    }
  },
  A8: function () {
    C.Ca("roulette");
  },
  constructor: function (c) {
    this.sounds = {};
    this.callParent(arguments);
    this.jg = {};
    this.kg = {};
    this.config = E.config;
    this.ey = c.ey;
    this.hta(c.lang);
    E.oa = E.oa.init();
    this.da = Ext.create(this.config.Gua);
    this.ta = Ext.create(E.core.xi.cC, {
      xx: c.r_,
      Pk: c.Pk,
      C4: c.Qga.inactivityTimeout | 0
    });
    this.Vl = c.Vl;
    this.og = Ext.create(E.core.events.HC);
    this.addEvents("startchat", "peeksinserted", "activechatitemset", "usercontrollercreated", "elementpositionchanged", "ringingstart", "ringingstop", "dialingstart", "dialingstop", "appready");
    Ext.Ajax.defaultHeaders = {
      "Content-Language": this.lang
    };
  },
  cp: function () {
    return this.be && this.be && this.be.cp();
  },
  setCookie: function (c, h, f) {
    f = f || this.V$;
    Ext.util.Cookies.set(this.yQ.replace("<uin>", this.Kh.uin) + c, h, f);
  },
  lm: function (c) {
    return (c = Ext.util.Cookies.get(this.yQ.replace("<uin>", this.Kh.uin) + c)) && c !== "NaN" ? c : m;
  },
  Co: function (c) {
    var h = C.k().ob("notifications").sounds,
        f = C.k().fa;

    if (h[c] && h[c] == 1 && f.get("status") !== "dnd") {
      return !0;
    }

    return !1;
  },
  rA: function (c) {
    return this.Ed.rA(c);
  },
  Bz: function (c, f) {
    return this.Ed.Bz(c, f);
  },
  Cz: function (c, f) {
    return this.Ed.Cz(c, f);
  },
  zz: function (c, f) {
    return this.Ed.zz(c, f);
  },
  Az: function (c, f) {
    return this.Ed.Az(c, f);
  },
  T6: function (c, f) {
    return this.Ed.T6(c, f);
  },
  RL: function (c, f) {
    return this.Ed.RL(c, f);
  },
  I6: function () {
    this.lf();
    this.RL(1, 5);
  },
  Dz: function (c, f) {
    return this.Ed.Dz(c, f);
  },
  E4: function () {
    this.Co("playOnAVCall") && (this.lf(), this.Dz(1, 5));
  },
  R6: function (c, f) {
    return this.Ed.R6(c, f);
  },
  S6: function (c, f) {
    return this.Ed.S6(c, f);
  },
  yz: function () {
    this.lf();
    return this.Ed.yz(1, 1);
  },
  lf: function () {
    return this.Ed.stopAll();
  },
  Cqa: function (c, f) {
    if (!this.oo.Yp) {
      return !1;
    }

    return this.Bz(c, f);
  },
  Dqa: function (c, f) {
    if (!this.oo.Yp) {
      return !1;
    }

    return this.Cz(c, f);
  },
  Pp: function (c) {
    return this.Ed.Pp(c);
  },
  sm: function () {
    return this.Ed.sm();
  },
  RM: function (c) {
    return this.Ed.RM(c);
  },
  UJ: function () {
    return this.Ed.UJ();
  },
  Usa: function (c) {
    this.s_ = {};
    Ext.each(c, function (e) {
      this.s_["" + e.uin] = e.type;
    }, this);
  },
  $da: function (c, f) {
    V.iM(c, f);
  },
  aea: function (c) {
    this.$da("" + c, O.Zaa);
  },
  fDa: function (c) {
    c = c || {};
    return Ext.create(E.f.layout.va.hb.Tk, c);
  },
  gDa: function (c) {
    c = c || {};
    return Ext.create(E.f.layout.va.hb.vC, c);
  },
  iDa: function (c) {
    c = c || {};
    return Ext.create(E.f.layout.va.hb.nF, c);
  },
  B6: function (c) {
    Ext.create(E.f.windows.ZD, {
      width: 258,
      gid: c
    });
  },
  Ti: function (c) {
    c = c || {};
    c.Ef = !0;
    Ext.create(E.f.windows.hC, c);
  },
  ML: function (c) {
    c = c || {};
    c.Kh = this.Kh;
    c.Dh = this.Dh;
    var f = window.localStorage.getItem("window_lock");

    if (c.type === this.Ja.ud.of) {
      if (f === m || f === "false") {
        this.vf = Ext.create(E.f.windows.Zv, c), this.vf.show();
      }

      if (f === "true" && c.ix === "incoming") {
        this.vf !== m && (this.vf.lta(!0), this.vf.close()), this.vf = Ext.create(E.f.windows.Zv, c), this.vf.show();
      }
    }

    if (c.type === this.Ja.ud.Hc && (f === "false" || f === m)) {
      c.ix === "incoming" ? (this.vf = Ext.create(E.f.windows.$u, c), this.vf.show()) : (c.x_ = c.members, c.conferenceId = c.Db[0], Object.keys(c.x_).length > 16 ? this.Hta() : (this.vf = Ext.create(E.f.windows.$u, c), this.vf.show()));
    }
  },
  Hta: function () {
    var c = Ext.String.format(E.lang.yO, 16);
    alert(c);
  },
  Rja: function () {
    this.OL = Ext.isWindows ? "x-win" : Ext.isLinux ? "x-lin" : Ext.isMac ? "x-mac" : "x-non";
  },
  mma: function () {
    this.OL === m && this.Rja();
    return this.OL;
  },
  zc: function (c) {
    Ext.getStore("ContactsStore");
    return C.ca.Da.zc(c);
  },
  $m: function (c, w) {
    var q = Ext.getStore("ContactsStore");

    if (!q.Ba(c)) {
      return !1;
    }

    var o = q.Ba(c).get("cid");

    if (!o) {
      return !1;
    }

    var f = q.Ba(c).get("extdata"),
        y = y || {
      fn: w ? function (b, e) {
        f.NoArchive = w;
        q.Ba(c).set("extdata", f);
        this.zta(b, e);
      } : function (b, e) {
        f.NoArchive = w;
        q.Ba(c).set("extdata", f);
        this.Eva(b, e);
      },
      scope: this
    },
        u = u || {
      fn: function () {
        var b = Ext.getStore("ContactsStore").Ba(c);
        m === b || b.get("extdata").NoArchive == w || (w ? C.k().qa.sa({
          msg: E.oa.pw,
          timeout: 15000
        }) : C.k().qa.sa({
          msg: E.oa.qw,
          timeout: 15000
        }));
      },
      scope: this
    };

    if (typeof f.NoArchive !== "undefined") {
      if (f.NoArchive == w) {
        return !1;
      }

      E.api.bb.yd({
        uin: c,
        cid: o
      }, {
        fn: function (e, n, h) {
          var B = {};

          try {
            var G = Ext.JSON.decode(n.responseText).result;
            G.contacts[0] ? (Ext.Object.each(G.contacts[0], function (g, l) {
              l.aid && (B[g] = l.aid);
            }, this), E.api.bb.$m({
              cid: o,
              NoArchive: w,
              oT: B.NoArchive
            }, y, u)) : u.fn.call(u.scope, e, n, h);
          } catch (p) {
            u.fn.call(u.scope, e, n, h);
          }
        },
        scope: this
      }, u);
    } else {
      E.api.bb.$m({
        cid: o,
        NoArchive: w
      }, y, u);
    }

    return !0;
  },
  zta: function (c) {
    try {
      E.api.bb.mi(c.result.version | 0), Ext.getStore("ContactsStore").rk(c.result.version | 0);
    } catch (f) {}
  },
  Eva: function (c) {
    try {
      E.api.bb.mi(c.result.version | 0), Ext.getStore("ContactsStore").rk(c.result.version | 0);
    } catch (f) {}
  },
  aka: function () {
    var c = {
      cids: [],
      confCids: [],
      type: "contact"
    };
    Ext.iterate(this.jg, function (f, b) {
      b.params.type == "conference" ? c.confCids.indexOf(f) === -1 && c.confCids.push(f) : c.cids.indexOf(f) === -1 && c.cids.push(f);
    }, this);
    E.api.bb.Cr(c, {
      fn: function (e, l, f) {
        this.dea(e, l, f);
        Ext.iterate(this.jg, function (b, g) {
          Ext.each(g.listeners, function (h) {
            h.success.fn.call(h.success.scope, e, l, f);
          }, this);
          delete this.jg[b];
        }, this);
      },
      scope: this
    }, {
      fn: function (e, l, f) {
        Ext.iterate(this.jg, function (b, g) {
          Ext.each(g.listeners, function (h) {
            h.failure.fn.call(h.failure.scope, e, l, f);
          }, this);
          delete this.jg[b];
        }, this);
      },
      scope: this
    });
  },
  eka: function () {
    var c = {
      cids: [],
      confCids: [],
      type: "contact"
    };
    Ext.iterate(this.kg, function (f, b) {
      b.params.type == "conference" ? c.confCids.indexOf(f) === -1 && c.confCids.push(f) : c.cids.indexOf(f) === -1 && c.cids.push(f);
    }, this);
    E.api.bb.vra(c, {
      fn: function (e, l, f) {
        this.rra(e, l, f);
        Ext.iterate(this.kg, function (b, g) {
          Ext.each(g.listeners, function (h) {
            h.success.fn.call(h.success.scope, e, l, f);
          }, this);
          delete this.kg[b];
        }, this);
      },
      scope: this
    }, {
      fn: function (e, l, f) {
        Ext.iterate(this.kg, function (b, g) {
          Ext.each(g.listeners, function (h) {
            h.failure.fn.call(h.failure.scope, e, l, f);
          }, this);
          delete this.kg[b];
        }, this);
      },
      scope: this
    });
  },
  kZ: function (c, n, l) {
    var n = n || {
      fn: t(),
      scope: this
    },
        l = l || {
      fn: t(),
      scope: this
    },
        f = {
      type: c.type ? c.type : "contact",
      cids: [c.cid]
    },
        c = c.cid;
    typeof this.kg[c] !== "undefined" && this.kg[c] ? delete this.kg[c] : (this.jg[c] = this.jg[c] || {
      params: f,
      listeners: []
    }, this.jg[c].listeners.push({
      success: n,
      failure: l
    }));
    this.oH = this.oH || new Ext.util.DelayedTask();
    this.oH.delay(1000, this.aka, this);
    (n = E.ca.gi.Cea([c])) && Ext.getStore("ContactsStore").ak(n);
  },
  dea: function (c) {
    try {
      E.api.bb.mi(c.result.version | 0), Ext.getStore("ContactsStore").rk(c.result.version | 0);
    } catch (f) {}
  },
  Hya: t(),
  i7: function (c, n, l) {
    var n = n || {
      fn: t(),
      scope: this
    },
        l = l || {
      fn: t(),
      scope: this
    },
        f = {
      type: c.type ? c.type : "contact",
      cids: [c.cid]
    },
        c = c.cid;
    typeof this.jg[c] !== "undefined" && this.jg[c] ? delete this.jg[c] : (this.kg[c] = this.kg[c] || {
      params: f,
      listeners: []
    }, this.kg[c].listeners.push({
      success: n,
      failure: l
    }));
    this.nM = this.nM || new Ext.util.DelayedTask();
    this.nM.delay(1000, this.eka, this);
    (n = E.ca.gi.ura([c])) && Ext.getStore("ContactsStore").ak(n);
  },
  rra: function (c) {
    try {
      E.api.bb.mi(c.result.version | 0), Ext.getStore("ContactsStore").rk(c.result.version | 0);
    } catch (f) {}
  },
  JDa: t(),
  vBa: function (c) {
    Ext.isArray(c) || (c = [c]);

    for (var n = {
      result: {
        groups: {
          changed: [],
          deleted: []
        },
        contacts: {
          changed: [],
          deleted: []
        },
        conferences: {
          changed: [],
          deleted: []
        },
        version: "0"
      }
    }, l = 0, f = c.length; l < f; l++) {
      n.result.contacts.changed.push({
        gids: c[l].gids || [2],
        ShowName: c[l].ShowName,
        FirstName: c[l].FirstName || "",
        LastName: c[l].LastName || "",
        MobilePhone: c[l].MobilePhone || "",
        Email: c[l].Email || "",
        uin: c[l].uin,
        isFavourite: !0,
        WwwAddress: c[l].WwwAddress || ""
      });
    }

    return n;
  },
  le: function (c, f) {
    f.Ea = f.Ea || t();
    f.ya = f.ya || t();
    f.scope = f.scope || this;
    Ext.getStore("ContactsStore").le(c, {
      Ea: function (e, n, g) {
        this.cea(e, n, g);
        f.Ea.call(f.scope, e, n, g);
      },
      ya: function (e, n, g) {
        f.ya.call(f.scope, e, n, g);
      },
      scope: this
    });
  },
  cea: function (c) {
    try {
      E.api.bb.mi(c.result.version | 0), Ext.getStore("ContactsStore").rk(c.result.version | 0);
    } catch (f) {}
  },
  Gya: t(),
  qea: function (c) {
    for (var n = this.kc.get(E.stores.Qc.Pq, []), l = 0, f = n.length; l < f; l++) {
      if (n[l] == c) {
        return !1;
      }
    }

    n.push(c);
    return this.kc.set(E.stores.Qc.Pq, n);
  },
  Mz: function (c) {
    for (var n = this.kc.get(E.stores.Qc.Pq, []), l = 0, f = n.length; l < f; l++) {
      if (n[l] == c) {
        return n.splice(l, 1), this.kc.set(E.stores.Qc.Pq, n), !0;
      }
    }

    return !1;
  },
  Rra: function () {
    for (var c = this.kc.get(E.stores.Qc.Pq, []), n = 0, l = c.length; n < l; n++) {
      var f = Ext.getStore("ContactsStore").Ba(c[n]);
      f && this.fc(f, m, !1);
    }
  },
  rp: function (c) {
    var p = Ext.getStore("ContactsStore"),
        o = this.Ja,
        n = c.get("cid"),
        f = c.get("uin");
    n === 0 ? (c = {}, c.id = f, p.rp(c, {
      Ea: function () {
        C.k().qa.sa({
          msg: E.oa.PP,
          timeout: 2000
        });
        C.Ca("");
        var e = o.hd().getRef(o.Ld(f));
        (e = e ? e.item : e) && e.jI();
        this.Mz(f);
      },
      ya: function () {
        C.k().qa.sa({
          msg: E.oa.OP,
          timeout: 2000
        });
      },
      scope: this
    })) : (C.Ca(""), o.hd() && (n = (n = o.hd().getRef(o.Ld(f))) ? n.item : n) && n.jI(), this.Mz(f), p.hs(c, {
      Ea: function () {
        C.k().qa.sa({
          msg: E.oa.HP,
          timeout: 2000
        });
      },
      ya: function () {
        C.k().qa.sa({
          msg: E.oa.GP
        });
      },
      scope: this
    }));
  },
  kEa: function (c, f) {
    this.o5[c] = f;
  },
  rBa: function (c) {
    if (c) {
      return this.o5[c];
    }
  },
  UM: function (c, f) {
    this.SL[c] = f;
  },
  qma: function (c) {
    if (c) {
      if (typeof this.SL[c] == "undefined") {
        return !1;
      }

      return this.SL[c];
    }
  },
  dCa: function () {
    Ext.fly("sr-header").addCls("d-none");
  },
  tEa: function () {
    Ext.fly("sr-header").removeCls("d-none");
  },
  $Ba: function () {
    Ext.fly("sr-footer").addCls("d-none");
  },
  pEa: function () {
    Ext.fly("sr-footer").removeCls("d-none");
  },
  jra: function () {
    this.so.reload();
  },
  kra: function () {
    this.sp.reload();
  },
  lra: function () {
    this.Ip.reload();
  },
  lqa: function () {
    Ext.create(E.f.sb.XS, {
      xe: this.Ww
    });
  },
  JBa: x("Ww"),
  TAa: function () {
    return this.bI.url;
  },
  sBa: function () {
    return this.q5.url;
  },
  CBa: function () {
    return this.y7.url;
  },
  wta: function (c) {
    this.Ja.fireEvent("windowtitlechange", c);
  },
  c9: function (c) {
    this.Ja.fireEvent("windowtitleremove", c);
  },
  hDa: function () {
    C.Ca("shop");
  },
  disconnect: function () {
    this.PK = !1;
    this.ta.logout();
  },
  Pm: function () {
    this.ta.If() || (C.k(), this.ta.on("connected", t(), this, {
      single: !0
    }), this.ta.Pm());
  },
  If: function () {
    return this.ta.If();
  },
  vma: function () {
    return this.Ni.configuration.iapps.authcenter.restoreUrl;
  },
  Cla: function () {
    return this.Ni.configuration.iapps.authcenter.editProfileUrl;
  },
  vla: function () {
    return this.Ni.configuration.iapps.ggwidget.localizedCreateUrl[C.k().lang || "pl"].replace("%s", C.k().lang || "pl") || this.Ni.configuration.iapps.ggwidget.createUrl;
  },
  Ela: function () {
    return this.Ni.configuration.iapps.authcenter.englandMigrationUrl;
  },
  H3: function () {
    return this.Ni.configuration.iapps["england-migration"];
  },
  IJ: function () {
    return this.Ni.configuration.iapps.ads;
  },
  Zga: function (c) {
    c == 1 ? this.Oja() : c == 8 && this.gja({
      closable: !1
    });
  },
  csa: function (c) {
    c = Ext.decode(c);
    this.kc.set(E.stores.Qc.Hv, c);
  },
  gja: function (c) {
    if (!this.Jw) {
      this.Jw = Ext.create(E.f.sb.AO, {
        Ab: c.closable
      });
    }
  },
  Oja: function () {
    this.Jw && (this.Jw.destroy(), delete this.Jw);
  },
  mqa: function (c, f) {
    if (!this.eM) {
      C.k().disconnect(), this.eM = Ext.create(E.f.windows.VF, {
        renderTo: Ext.getBody()
      }), this.eM.on("destroy", function (b) {
        this.eM = m;
        b.refreshed && (b = JSON.stringify(f), b = new gg.aa.hj().encode(b), Ext.Ajax.request({
          url: "/api/log/options/" + b,
          method: "GET"
        }), c.request(f));
      }, this, {
        single: !0
      });
    }
  },
  d8: v("token"),
  sg: function (c, f) {
    C.ca.xa.pp(c) ? (C.Ca(C.ca.xa.cma(c)), f && f.fireEvent("redirect")) : window.open(c);
  },
  isReady: x("Zw"),
  qza: function () {
    var c = this.Iy.V3();
    c === m ? C.Ca("") : C.Ca(c);
  },
  gBa: function () {
    return this.config.applications[C.k().lang || "pl"].filedownload;
  },
  wh: function (c) {
    if (Ext.getStore("ContactsStore").Ba(c)) {
      var f = Ext.getStore("ContactsStore").refs;

      if (!f[c]) {
        return !1;
      }

      return f[c];
    } else {
      f = Ext.getStore("UnknownContactsStore").refs;

      if (!f[c]) {
        return !1;
      }

      return [f[c]];
    }
  },
  py: function (c) {
    var f = Ext.getStore("ContactsStore").Ba(c);
    return f ? f : Ext.getStore("UnknownContactsStore").Ba(c);
  },
  dEa: v("Yya"),
  Ts: function (c) {
    var h = Ext.getStore("ContactsStore"),
        f = h.Ba(c.uin),
        c = f.get("cid") ? {
      data: {
        cids: f.get("cid")
      }
    } : {
      data: {
        uins: f.get("uin")
      }
    };
    h.Ts(c, {
      Ea: function () {
        C.k().qa.sa({
          msg: E.oa.uQ,
          timeout: 1500
        });
      },
      ya: function () {
        C.k().qa.sa({
          msg: E.oa.VB,
          mc: {
            text: E.lang.Pc,
            fn: function () {
              this.Ts(c);
            },
            scope: this
          }
        });
      },
      scope: this
    });
  },
  Yt: function (c) {
    var f = Ext.getStore("ContactsStore"),
        c = {
      data: {
        cidsToRemove: f.Ba(c.uin).get("cid")
      }
    };
    f.Yt(c, {
      Ea: function () {
        C.k().qa.sa({
          msg: E.oa.xQ,
          timeout: 1500
        });
      },
      ya: function () {
        C.k().qa.sa({
          msg: E.oa.Owa,
          mc: {
            text: E.lang.Pc,
            fn: function () {
              this.Yt(c);
            },
            scope: this
          }
        });
      },
      scope: this
    });
  },
  ska: function (c) {
    C.k().$m(c.uin, !1);
  },
  Uja: function (c) {
    C.k().$m(c.uin, !0);
  },
  Ox: function () {
    this.oo.yk();
  },
  LAa: x("oo"),
  SAa: x("PZ"),
  doa: function () {
    this.Pf = new gg.aa.zG();
  },
  EBa: x("Pf"),
  Bka: function () {
    return parseInt(this.H3().enabled, 10);
  },
  GBa: x("kN"),
  a8: function (c) {
    if (Ext.isBoolean(c)) {
      this.kN = c;
    }
  },
  XJ: function () {
    return Ext.String.format(this.pba, this.Kh.uin);
  },
  Jta: function (c) {
    c || !this.Bka() ? (Ext.util.Cookies.clear(this.XJ()), this.a8(!1)) : Ext.util.Cookies.get(this.XJ()) === m && Ext.Function.defer(function () {
      if (!this.Zo) {
        this.Zo = Ext.create(E.f.sb.iR, {}), this.Zo.on(this.Zo.OC, this.d0, this);
      }

      var e = Ext.Date.now(),
          f = parseInt(this.H3().frequency, 10);
      f *= 1000;
      f = e + f;
      Ext.util.Cookies.set(this.XJ(), e, new Date(f));
    }, this.Bca, this);
  },
  Kta: function () {
    Ext.Function.defer(function () {
      Ext.create(E.f.windows.PF);
    }, this.Cca, this);
  },
  d0: function () {
    C.k().a8(!1);
    this.Zo.un(this.Zo.OC, this.d0, this);
    this.Zo = m;
  },
  BBa: x("At"),
  Sma: function () {
    return this.Ni.configuration.iapps.wosp;
  },
  hta: function (c) {
    this.lang = c;
    E.lang = typeof c !== "undefined" && Ext.Object.getSize(E.lang[c]) ? E.lang[c] : E.lang.pl;
  },
  nBa: x("lang"),
  wla: function () {
    return this.Ni.configuration.iapps["status-custom-images"];
  },
  Wi: function (c, h) {
    var f = this.wla();

    if (!Ext.isEmpty(f) && parseInt(f.enabled, 10) === 1 && f.affectedStatuses.indexOf(c) !== -1) {
      return f = "status-" + c + "-" + f.name, h && h.classList.add(f), f;
    }

    return "";
  }
});