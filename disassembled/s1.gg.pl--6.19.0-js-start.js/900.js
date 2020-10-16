Ext.define(E.f.Tb.AY, {
  extend: C.f.Jb,
  cls: "settings-container",
  Vv: "notifications",
  lh: "privacy-settings",
  nj: "others",
  UQ: "england-terms",
  Vba: "send_email_with_messages",
  IB: "communication_settings_group",
  $A: "aol_enabled",
  gca: "play-sound",
  Fca: "soundSet",
  NW: "playOnMessage",
  OW: "playOnNotify",
  KW: "playOnAvailable",
  MW: "playOnError",
  LW: "playOnAVCall",
  hR: "play-sound",
  e$: "clear-aol",
  gR: "clear-aol",
  Vk: "save-settings",
  jw: "save-preferences",
  YU: "save-missionary",
  ZU: "save-privacy",
  XU: "save-england",
  Gn: "restore-settings",
  AU: "restore-missionary",
  fw: "restore-preferences",
  BU: "restore-privacy",
  saveDelay: 1000,
  store: m,
  soa: m,
  la: m,
  Bua: E.f.Tb.BY,
  Ls: m,
  Jca: "SettingsNotifications",
  Kca: "SettingsPrivacy",
  nG: "SettingsSounds",
  Hca: "SettingsAdvanced",
  Ica: "EnglandRulesStore",
  Gk: {},
  Hp: {},
  ng: m,
  eJ: m,
  mixins: {
    ka: C.core.mixins.Td
  },
  WV: {
    im_privacy: E.lang.NV
  },
  Aca: ["terms_marketing_england", "no_spam"],
  T2: m,
  ka: {
    ".settings-close": function () {
      C.Ca("");
    },
    ".instances-window": function () {
      this.Pta();
    },
    ".btn-restore": function () {
      this.Gr || (this.LH(), this.restore());
    },
    ".btn-save": function () {
      this.Gr || (this.LH(), this.Kj.Jj.C7.call(this));
    },
    ".btn-save-england-terms": function () {
      this.Gr || (this.LH(), this.asa());
    },
    ".btn-remove-account": function () {
      this.Gr || C.Ca("settings/profile/migration");
    },
    ".england-terms-more": function (c) {
      c.preventDefault();
      c = Ext.get(c.target).getAttribute("class").replace("england-terms-more", "").trim();
      Ext.create(E.f.windows.TC, {
        xqa: c
      });
    }
  },
  constructor: function (c) {
    this.ia = C.k().ia;
    this.app = C.k();
    this.da = C.k().da;
    this.fa = C.k().fa;
    this.uin = this.fa.get("uin");
    this.la = Ext.data.StoreManager.lookup("ContactsStore");
    this.df = c.df || Ext.data.StoreManager.lookup("InstancesStore");
    this.volume = c.volume || this.app.sm();
    this.Kf = c.Kf;
    this.ksa = new Ext.util.DelayedTask(this.E7, this);
    this.eJ = !1;
    this.Bg = {};
    this.T2 = this.Fla();
    this.callParent(arguments);
    this.mixins.ka.constructor.call(this, {});
  },
  initComponent: function () {
    this.Ph();
    this.data = {};
    this.callParent(arguments);
    this.fb();
  },
  destroy: function () {
    this.eb();
    this.callParent(arguments);
  },
  Ph: function () {
    this.tpl = this.da.Wa("settings-container");
  },
  fb: function () {
    this.on("afterrender", this.gb, this);
    this.ia.on(this.ia.Uk, this.Ur, this);
    this.on(this.Vk, this.v1, this);
    this.on(this.Gn, this.t1, this);
  },
  eb: function () {
    this.un("afterrender", this.gb, this);
    this.un(this.Vk, this.v1, this);
    this.un(this.Gn, this.t1, this);
    this.ng && this.ng.un("update", this.r0, this);
  },
  gb: function () {
    this.opa = this.opa || this.el.child(".settings-tabs");
    this.YH = this.YH || this.el.child(".settings-cards .settings-content");
    this.jf = Ext.get(Ext.select(".btn-save"));
    this.v7 = Ext.get(Ext.select(".btn-restore"));
    this.tabs = Ext.create(this.Bua, {
      renderTo: Ext.getDom("settings-tabs")
    });
    this.tabs.on(this.tabs.fR, this.pga, this);
    this.Uo(this.tabs.KY, "settings-ggwidget-tab", this.Nna);
    this.Uo(this.tabs.JY, "settings-myprofile-tab", this.w5);
    this.Uo(this.tabs.ao, "settings-notify-tab", this.Sta, Ext.emptyFn, this.Sra, this.gsa, this.Jca);
    this.Uo(this.tabs.qj, "settings-privacy-tab", this.Uta, this.fra, this.Tra, this.isa, this.Kca);
    this.Uo(this.tabs.kr, "settings-advanced-tab", this.Gta, Ext.emptyFn, this.Ora, this.$ra, this.Hca);
    this.Uo(this.tabs.bo, "settings-sounds-tab", this.Vta, Ext.emptyFn, this.Ura, this.jsa, this.nG);
  },
  v1: function (c) {
    this.ksa.delay(this.saveDelay, this.E7, this, [c]);
  },
  Ur: function () {
    this.$fa();
    this.bga();
    this.Vfa();
  },
  Fla: function () {
    return {
      england_migrated: E.lang.DV,
      terms_commercial_england: E.lang.FV,
      terms_marketing_england: E.lang.GV,
      terms_profiling_england: E.lang.IV
    };
  },
  Uo: function (c, w, q, o, f, y, u) {
    this.Bg[c] = {
      Gb: w,
      callback: q,
      Lz: o,
      w7: f || m,
      C7: y || m,
      loaded: !1,
      container: [],
      storeId: u || m
    };
  },
  $fa: function () {
    if (this.Bg[this.tabs.ao].loaded) {
      var c = this.getStore(this.tabs.ao);
      Ext.Object.each(this.ia.ZJ(), function (f, b) {
        c.findRecord("id", f).set("value", b.value);
      }, this);
      c.getById(this.ia.er).set("value", this.ia.Fb(this.ia.er));
      c.getById(this.ia.Wq).set("value", this.ia.Fb(this.ia.Wq));
      this.Qf(c);
    }
  },
  Zfa: function (c) {
    if (typeof c[this.Vv] !== "undefined") {
      var c = this.W3(c),
          f = this.Bg.notifications.store;
      f.getById("missionary").set("value", this.Wl(c.value));
      this.Qf(f);
    }
  },
  bga: function () {
    if (this.Bg[this.tabs.bo].loaded) {
      var c = this.getStore(this.tabs.bo);
      this.a4().forEach(function (l) {
        var f = c.getById(l.id),
            b = this.ia.Fb(l.id);
        f.set("value", this.ia.Fb(l.id));

        if (f.get("id") === this.ia.fl) {
          l = f.get("extraData"), l.form.selected = b, f.set("extraData", l);
        }
      }, this);
      this.ap.fireEvent(this.ap.Uk, {
        fontFamily: this.ia.Fb(this.ia.yu),
        fontSize: this.ia.Fb(this.ia.Au),
        BAa: this.ia.Fb(this.ia.xu),
        CAa: this.ia.Fb(this.ia.zu)
      });
      this.Qf(c);
    }
  },
  Vfa: function () {
    if (this.Bg[this.tabs.kr].loaded) {
      var c = this.getStore(this.tabs.kr),
          h = c.getById(this.ia.Zn),
          f = h.get("extraData");
      f.form.selected = this.ia.Fb(this.ia.Zn);
      h.set("extraData", f);
      h.set("value", this.ia.Fb(this.ia.Zn));
      h = c.getById(this.ia.ii);
      f = h.get("extraData");
      f.form.text = this.ia.Fb(this.ia.ii);
      f.form.disabled = this.ia.Fb(this.ia.ii) === "";
      h.set("extraData", f);
      h.set("value", this.ia.Fb(this.ia.ii).length > 0 ? "1" : "0");
      h = c.getById(this.ia.pj);
      f = h.get("extraData");
      f.form.text = this.ia.Fb(this.ia.kw);
      f.form.disabled = this.ia.Fb(this.ia.pj) === "1" ? !1 : !0;
      h.set("extraData", f);
      h.set("value", this.ia.Fb(this.ia.pj));
      c.getById(this.ia.pq).set("value", this.ia.Fb(this.ia.pq));
      c.getById(this.ia.oq).set("value", this.ia.Fb(this.ia.oq));
      this.Qf(c);
    }
  },
  aga: function (c) {
    if (this.Bg[this.tabs.qj].loaded && c[this.lh] && c[this.nj]) {
      var h = c[this.lh].settings,
          c = c[this.nj].settings,
          f = this.getStore(this.tabs.qj);
      Ext.Array.each(h, function (e) {
        e.name === this.IB && Ext.Array.each(e.items, function (g) {
          var l = f.getById(g.name);
          l && l.set("value", this.Wl(g.value));
        }, this);
      }, this);
      Ext.Array.each(c, function (e) {
        e.name === this.$A && f.getById(e.name).set("value", this.Wl(e.value));
      }, this);
      this.Qf(f);
    }
  },
  E7: function (c) {
    var c = Ext.isPrimitive(c) ? [c] : c,
        h = c.length,
        f = !1;
    c.indexOf(this.jw) !== -1 && this.fireEvent("widgetsubmit", this, {}, {
      fn: function () {
        h--;
        this.o8(h);
        this.vi();
      },
      scope: this
    }, {
      fn: function () {
        f === !1 && (f = !0, this.n8());
        this.vi();
      },
      scope: this
    });
    (c.indexOf(this.YU) !== -1 || c.indexOf(this.ZU) !== -1 || c.indexOf(this.XU) !== -1) && Ext.Object.getSize(this.Gk) > 0 && E.api.Pb.Zz(this.Gk, {
      fn: function () {
        h--;
        this.o8(h);
        this.Gk = {};
        var e = this.getStore(this.tabs.qj);
        e && (this.Qf(e), e = this.VI(e.getById("im_privacy").get("value")), C.k().fa.fireEvent("aclsettingschanged", {
          im_privacy: e
        }));
        this.ng && this.Qf(this.ng);
        this.vi();
      },
      scope: this
    }, {
      fn: function () {
        this.Gk = {};
        f === !1 && (f = !0, this.n8());
        this.vi();
      },
      scope: this
    });
  },
  n8: function () {
    C.k().qa.sa({
      msg: E.oa.lW
    });
  },
  o8: function (c) {
    c === 0 && C.k().qa.sa({
      msg: E.oa.lG,
      timeout: 1500
    });
  },
  t1: function (c) {
    var c = Ext.isPrimitive(c) ? [c] : c,
        h = c.length,
        f = !1;
    c.indexOf(this.fw) !== -1 && this.fireEvent("widgetsubmit", this, {}, {
      fn: function () {
        h--;
        this.m8(h);
        this.vi();
      },
      scope: this
    }, {
      fn: function () {
        f === !1 && (f = !0, this.l8());
        this.vi();
      },
      scope: this
    });

    if (c.indexOf(this.AU) !== -1 || c.indexOf(this.BU) !== -1) {
      c = {
        _method: "DELETE"
      }, Ext.Object.merge(c, this.Hp), Ext.Object.getSize(this.Hp) > 0 && E.api.Pb.Zz(c, {
        fn: function (e) {
          this.Hp = {};
          this.aga(e.result);
          this.Zfa(e.result);
          h--;
          this.m8(h);
          C.k().fa.fireEvent("aclsettingschanged");
          this.vi();
        },
        scope: this
      }, {
        fn: function () {
          f === !1 && (f = !0, this.l8());
          this.vi();
        },
        scope: this
      });
    }
  },
  l8: function () {
    C.k().qa.sa({
      msg: E.oa.ww
    });
  },
  m8: function (c) {
    c === 0 && C.k().qa.sa({
      msg: E.oa.xw,
      timeout: 3000
    });
  },
  restore: function () {
    this.win = Ext.create(E.f.windows.ir, {
      tpl: this.da.Wa("settings-dialog-window", {
        view: "restore"
      }),
      buttons: [{
        selector: "div.cancel-no",
        fn: function () {
          this.win.Xa();
          this.vi();
        },
        scope: this,
        Ib: !1
      }, {
        selector: "div.cancel-yes",
        fn: function () {
          this.win.Xa();
          this.Kj.Jj.w7.call(this);
        },
        scope: this,
        Ib: !1
      }]
    });
  },
  LH: function () {
    this.jf.addCls("disabled");
    this.v7.addCls("disabled");
    this.Qz && this.Qz.addCls("disabled");
    this.Gr = !0;
  },
  vi: function () {
    this.jf.removeCls("disabled");
    this.v7.removeCls("disabled");
    this.Qz && this.Qz.removeCls("disabled");
    this.Gr = !1;
  },
  Mma: function (c) {
    if (!this.Kj || c !== this.Kj.name) {
      this.Kj = {
        name: c,
        Jj: this.Bg[c]
      };
    }

    return this.Kj;
  },
  Yta: function (c) {
    var n = this.tabs.Nma(c),
        l = this.Mma(n),
        n = l.name;

    if (l.Jj.container.length == 0) {
      var f = this.da.Wa(l.Jj.Gb, l.Jj.data || {});
      l.Jj.container = f;
      Ext.core.DomHelper.append(Ext.get(this.YH), {
        id: "form-" + n,
        tag: "div",
        cls: "form-card-container",
        html: f
      });
      this.BZ(n);
    }

    this.tabs.Wda(c);
    this.openTab(n);
  },
  openTab: function (c) {
    Ext.isFunction(this.Bg[c].w7) && c !== "privacy" ? Ext.get(Ext.select(".settings-buttons")).removeCls("d-none") : Ext.get(Ext.select(".settings-buttons")).addCls("d-none");
    var h = "form-" + c,
        f = this.YH.select(".form-card-container").elements;
    Ext.Array.each(f, function (b) {
      b.id != c && Ext.get(b).addCls("d-none");
    }, this);
    Ext.get(h).removeCls("d-none");
    f = this.Bg[c];

    if (f.loaded === !0 && f.Lz) {
      f.Lz.call(this, h, f.store);
    } else {
      if (f.loaded === !1 && f.callback) {
        if (f.storeId !== m) {
          f.store = this.r2(f.storeId);
        }

        f.callback.call(this, h, f.store);
        f.loaded = !0;
      }
    }
  },
  r2: function (c) {
    return Ext.create(E.stores.DG, {
      model: E.models.CG,
      id: c
    });
  },
  getStore: function (c) {
    return Ext.getStore(this.Bg[c].storeId);
  },
  Qf: function (c) {
    this.Wo = this.Wo || new Ext.util.HashMap();
    c.each(function (f) {
      var b = {
        value: f.get("value"),
        extraData: Ext.clone(f.get("extraData")),
        storeId: c.storeId
      },
          f = f.get("id");
      this.Wo.contains(f) === !1 ? this.Wo.add(f, b) : this.Wo.replace(f, b);
    }, this);
  },
  TK: function (c) {
    var f = !1;
    c.each(function (e) {
      var g = this.Wo.get(e.get("id"));

      if (e.get("value") !== g.value) {
        return f = !0, !1;
      }
    }, this);
    !f && c.storeId === this.nG && (f = this.ap.TK());
    return f;
  },
  Pra: function (c) {
    c.each(function (e) {
      var f = this.Wo.get(e.get("id"));
      e.set({
        value: f.value,
        extraData: f.extraData
      });
    }, this);
    c.storeId === this.nG && this.ap.Qra();
  },
  pga: function (c) {
    if (this.Kj.Jj.storeId) {
      var f = this.getStore(this.Kj.name);

      if (this.TK(f)) {
        return this.Lta(c, f), !1;
      }
    }

    this.tabs.Lw(c);
    this.tabs.zL(c.dom.viewIndex);
  },
  Lta: function (c, f) {
    this.l3 = Ext.create(E.f.windows.ir, {
      tpl: this.da.Wa("settings-notsaved-dialog-window"),
      Sb: !0,
      buttons: [{
        selector: "div.cancel-no",
        fn: function () {
          this.l3.Xa();
          this.Pra(f);
          this.tabs.Lw(c);
          this.tabs.zL(c.dom.viewIndex);
        },
        scope: this,
        Ib: !1
      }, {
        selector: "div.cancel-yes",
        fn: function () {
          this.l3.Xa();
          this.Kj.Jj.C7.call(this);
          this.tabs.Lw(c);
          this.tabs.zL(c.dom.viewIndex);
        },
        scope: this,
        Ib: !1
      }]
    });
  },
  BZ: function (c) {
    this.Bg[c].Sea && this.Bg[c].Sea.call(this);
  },
  Zra: function (c) {
    return this.tabs.Vla(c);
  },
  P7: function (c) {
    if (Ext.isBoolean(c)) {
      this.eJ = c;
    }
  },
  w5: function () {
    if (!this.Qi) {
      var c = Ext.get("settings-myprofile-iframe-container");

      if (c) {
        this.Qi = Ext.get(document.createElement("iframe"));
      }
    }

    if (this.Qi) {
      try {
        this.Qi.dom.src = (C.k().Cla() || C.k().config.applications.profilesettings) + "&_dc" + new Date().getTime() + "&lang=" + C.k().lang, this.eJ && (this.P7(!1), this.Qi.dom.src += "&migration=1"), this.Qi.dom.frameBorder = "no", c && c.insertFirst(this.Qi);
      } catch (f) {}
    }
  },
  Bva: function () {
    if (this.Qi) {
      this.Qi.destroy(), this.Qi = m;
    }
  },
  Nna: function () {
    if (!this.Ls) {
      var c = Ext.get("settings-ggwidget-container");

      if (c) {
        this.Ls = Ext.get(document.createElement("iframe")), this.Ls.dom.src = C.k().vla(), this.Ls.dom.frameBorder = "no", c.insertFirst(this.Ls);
      }
    }

    this.wga({
      fn: function (e) {
        Ext.Object.getSize(e) && e.r7.length > 0 && Ext.create(E.f.windows.PD, {
          yDa: e
        });
      },
      scope: this
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.Mca
        });
        C.xL(!0);
      },
      scope: this
    });
  },
  wga: function (c, f) {
    E.api.Pb.Tj({
      uin: this.uin
    }, {
      fn: function (n) {
        var g = E.api.Pb.N6(n.result[this.lh].settings),
            n = {};

        if ("undefined" !== typeof g[E.api.Pb.Mu]) {
          var b = [],
              g = g[E.api.Pb.Mu];
          E.api.Pb.ZG !== g[E.api.Pb.Nu] && b.push(E.api.Pb.Nu);
          E.api.Pb.ZG !== g[E.api.Pb.JB] && b.push(E.api.Pb.JB);

          if (b.length > 0) {
            n.r7 = b;
          }
        } else {
          n.r7 = [E.api.Pb.Nu, E.api.Pb.JB];
        }

        c.fn.call(c.scope, n);
      },
      scope: this
    }, {
      fn: function (e) {
        f.fn.call(f.scope, e);
      },
      scope: this
    });
  },
  Wl: function (c) {
    return c === "ON" ? "1" : "0";
  },
  VI: function (c) {
    return c === "1" ? "ON" : "OFF";
  },
  Jx: function (c) {
    this.qDa && this.getStore(this.tabs.qj).getById(this.$A).set("value", c.enabled ? "1" : "0");
  },
  Tj: function (c, f) {
    E.api.Pb.Tj({
      uin: this.uin
    }, {
      fn: c,
      scope: this
    }, {
      fn: f,
      scope: this
    });
  },
  a7: function (c) {
    this.xt = c.result;
    var c = this.xt[this.nj].settings,
        n = this.xt[this.UQ].settings,
        l = [],
        f = [];
    Ext.Array.each(this.xt[this.lh].settings, function (e) {
      e.name === this.IB && Ext.Array.each(e.items, function (g) {
        var h = g.title;
        this.WV[g.name] && (h = this.WV[g.name]);

        if (this.Aca.indexOf(g.name) !== -1) {
          return !0;
        }

        f.push({
          id: g.name,
          name: g.name,
          label: h,
          value: this.Wl(g.value),
          type: this.lh
        });
      }, this);
    }, this);
    Ext.Array.each(c, function (e) {
      e.name === this.$A && f.push({
        id: e.name,
        name: e.name,
        label: e.title,
        value: this.Wl(e.value),
        type: this.nj,
        extraData: {
          Zi: {
            text: E.lang.fV,
            Vo: this.e$,
            fireEvent: this.gR
          }
        }
      });
    }, this);
    Ext.Array.each(n, function (g) {
      var h = {
        id: g.name,
        name: g.name,
        label: this.T2[g.name],
        value: this.Wl(g.value),
        type: "england"
      };
      g.name === "england_migrated" && g.value === "ON" && (h.extraData = {
        disabled: !0
      });
      l.push(h);
    }, this);
    return [f, l];
  },
  fra: function (c, f) {
    this.Tj(function (e) {
      f.removeAll();
      e = this.a7(e);
      f.add(e[0]);
      this.ng.removeAll();
      this.ng.add(e[1]);
      this.aO();
      this.Qf(f);
      this.Qf(this.ng);
    }, t());
  },
  r0: function (c, h) {
    if (h.get("id") === "england_migrated") {
      var f = h.get("extraData");
      h.get("value") === "0" && f && f.disabled ? h.set("extraData", {
        disabled: !1
      }) : h.get("value") === "1" && f && !f.disabled && h.set("extraData", {
        disabled: !0
      });
    }
  },
  Uta: function (c, f) {
    this.Tj(function (e) {
      e = this.a7(e);
      this.ng = this.r2(this.Ica);
      this.ng.on("update", this.r0, this);
      this.ng.add(e[1]);
      Ext.create(E.f.Tb.il, {
        store: this.ng,
        renderTo: this.el.select("#england-terms .england-options").first()
      });
      f.add(e[0]);
      Ext.create(E.f.Tb.il, {
        store: f,
        renderTo: this.el.select(".privacy-options").first()
      }).on(this.gR, this.Dga, this);
      this.AK = Ext.create("Ext.data.Store", {
        id: "IgnoredStore",
        model: E.models.Ya
      });
      this.aO();
      Ext.create(E.f.Tb.jE, {
        renderTo: this.el.select(".ignored-list").first(),
        store: this.AK
      });
      this.Qf(f);
    }, t());
    this.Qz = Ext.get(this.el.select(".btn-save-england-terms").first());
  },
  aO: function () {
    this.AK && this.AK.loadData(this.la.Qma(1).items, !1);
  },
  Dga: function () {
    this.nx = Ext.create(E.f.windows.ir, {
      tpl: this.da.Wa("settings-clearaol-dialog-window"),
      Sb: !0,
      buttons: [{
        selector: "div.cancel-no",
        fn: function () {
          this.nx.Xa();
        },
        scope: this,
        Ib: !1
      }, {
        selector: "div.cancel-yes",
        fn: function () {
          this.nx.Xa();
          this.f_();
        },
        scope: this,
        Ib: !1
      }]
    });
  },
  f_: function () {
    var c = C.k().fa.get("uin");
    E.api.Pb.Ega({
      user: "gg/pl:" + c,
      uin: c
    }, {
      fn: function () {
        this.nx.Xa();
        C.k().qa.sa({
          msg: E.oa.vw,
          timeout: 1500
        });
      },
      scope: this
    }, {
      fn: function () {
        this.nx.Xa();
        C.k().qa.sa({
          msg: E.oa.yw,
          mc: {
            text: E.lang.Pc,
            fn: function () {
              this.f_();
            },
            scope: this
          }
        });
      },
      scope: this
    });
  },
  $I: function (c, q, p, o, f) {
    typeof f["slots[" + c + "]"] === "undefined" && (f["slots[" + c + "]"] = {});
    var u = {};
    u[q] = o ? "_RESET_" : this.VI(p);
    Ext.Object.getSize(f["slots[" + c + "]"]) > 0 && (q = Ext.JSON.decode(f["slots[" + c + "]"]), Ext.merge(u, q));
    f["slots[" + c + "]"] = Ext.JSON.encode(u);
  },
  Tx: function (c, p, o, n) {
    typeof n["slots[" + c + "]"] === "undefined" && (n["slots[" + c + "]"] = {});
    var f = {};
    f[p] = this.VI(o);
    Ext.Object.getSize(n["slots[" + c + "]"]) > 0 && (p = Ext.JSON.decode(n["slots[" + c + "]"]), Ext.merge(f, p));
    n["slots[" + c + "]"] = Ext.JSON.encode(f);
  },
  isa: function () {
    this.getStore(this.tabs.qj).each(function (c) {
      var h = c.get("value"),
          f = c.get("name");

      switch (c.get("type")) {
        case this.lh:
          this.Tx(this.lh, f, h, this.Gk);
          break;

        case this.nj:
          this.Tx(this.nj, f, h, this.Gk);
      }
    }, this);
    this.fireEvent(this.Vk, this.ZU);
  },
  asa: function () {
    this.ng.each(function (c) {
      var h = c.get("value"),
          f = c.get("name");
      c.get("type");
      this.Tx(this.UQ, f, h, this.Gk);
    }, this);
    this.fireEvent(this.Vk, this.XU);
  },
  Tra: function () {
    this.$I(this.nj, this.getStore(this.tabs.qj).queryBy(function (c) {
      if (c.get("type") === this.nj) {
        return c;
      }
    }, this).getAt(0).get("name"), "1", !1, this.Hp);
    this.$I(this.lh, this.IB, m, !0, this.Hp);
    this.fireEvent(this.Gn, this.BU);
  },
  hma: function (c, f) {
    E.api.Pb.Tj({
      uin: this.uin
    }, {
      fn: c,
      scope: this
    }, {
      fn: f,
      scope: this
    });
  },
  W3: function (c) {
    for (var c = c[this.Vv], n = m, l = 0, f = c.settings.length; l < f; l++) {
      if (c.settings[l].name === this.Vba) {
        n = c.settings[l];
        break;
      }
    }

    return n;
  },
  zpa: function (c) {
    this.xt = c.result;

    if (c = this.W3(this.xt)) {
      return {
        id: "missionary",
        name: c.name,
        label: c.title,
        value: this.Wl(c.value)
      };
    }
  },
  Sta: function (c, f) {
    Ext.Object.each(this.ia.ZJ(), function (e, g) {
      f.add({
        id: e,
        name: e,
        label: g.label,
        value: g.value,
        type: this.ia.Uv
      });
    }, this);
    f.add({
      id: this.ia.er,
      name: "dndMode",
      label: E.lang.bW,
      value: this.ia.Fb(this.ia.er)
    }, {
      id: this.ia.Wq,
      name: "showMessagePreview",
      label: E.lang.$V,
      value: this.ia.Fb(this.ia.Wq)
    });
    Ext.create(E.f.Tb.il, {
      store: f,
      renderTo: Ext.getDom(c)
    });
    this.hma(function (e) {
      e = this.zpa(e);
      f.add(e);
      this.Qf(f);
    }, t());
  },
  gsa: function () {
    var c = this.ia.ZJ(),
        f = this.ia.Fb(this.ia.Uv);
    this.getStore(this.tabs.ao).each(function (o) {
      var e = o.get("value"),
          b = o.get("name"),
          p = o.get("id");
      Ext.isEmpty(o.get("type")) || (p = o.get("type"));

      switch (p) {
        case this.ia.Uv:
          Ext.Array.each(c[b].items, function (h) {
            var l = f.indexOf(h);
            e === "1" ? l !== -1 && f.splice(l, 1) : l === -1 && f.push(h);
          });
          this.ia.zg(p, f);
          break;

        case "missionary":
          this.Tx(this.Vv, b, e, this.Gk);
          break;

        default:
          this.ia.zg(p, e);
      }
    }, this);
    this.fireEvent(this.Vk, [this.jw, this.YU]);
  },
  Sra: function () {
    this.ia.xM([this.ia.Uv, this.ia.Wq, this.ia.er]);
    this.$I(this.Vv, this.getStore(this.tabs.ao).queryBy(function (c) {
      if (c.get("id") === "missionary") {
        return c;
      }
    }).getAt(0).get("name"), m, !0, this.Hp);
    this.fireEvent(this.Gn, [this.AU, this.fw]);
  },
  Pta: function () {
    this.soa = Ext.create(E.f.windows.BG, {
      tpl: this.da.Wa("settings-instances-window", {}),
      store: this.df,
      Ab: !0
    });
  },
  om: function () {
    return this.I8 = this.I8 || [{
      id: -1,
      name: m,
      label: E.lang.BW
    }, {
      id: O.qf,
      name: "avail",
      label: E.lang.Fu
    }, {
      id: O.Pn,
      name: "talk_to_me",
      label: E.lang.Ju
    }, {
      id: O.Ln,
      name: "busy",
      label: E.lang.Gu
    }, {
      id: O.Mn,
      name: "dnd",
      label: E.lang.Hu
    }, {
      id: O.Nn,
      name: "invisible",
      label: E.lang.Iu
    }];
  },
  jla: function () {
    var c = this.ia.Fb(this.ia.Zn),
        q = this.ia.Fb(this.ia.ii),
        p = this.ia.Fb(this.ia.kw),
        o = this.ia.Fb(this.ia.pj),
        f = this.ia.Fb(this.ia.pq),
        u = this.ia.Fb(this.ia.oq);
    return [{
      id: this.ia.Zn,
      name: "loginStatus",
      label: m,
      value: c,
      extraData: {
        showCheckbox: !1,
        form: {
          label: E.lang.mW,
          type: "select",
          options: this.om(),
          selected: c
        }
      }
    }, {
      id: this.ia.ii,
      name: "loginDescription",
      label: E.lang.BV,
      value: q.length > 0 ? "1" : "0",
      extraData: {
        form: {
          type: "textarea",
          text: q,
          mt: 255,
          disabled: q.length === 0
        }
      }
    }, {
      id: this.ia.pj,
      name: "logoutDescription",
      label: E.lang.CV,
      value: o,
      extraData: {
        form: {
          type: "textarea",
          text: p,
          mt: 255,
          disabled: o === "1" ? !1 : !0
        }
      }
    }, {
      id: this.ia.pq,
      name: "showEmots",
      label: E.lang.xV,
      value: f
    }, {
      id: this.ia.oq,
      name: "resolveLinks",
      label: E.lang.wV,
      value: u
    }];
  },
  Gta: function (c, h) {
    h.add(this.jla());
    Ext.create(E.f.Tb.il, {
      store: h,
      renderTo: this.el.select(".advanced-options").first()
    });
    var f = this.el.select(".instances").first();
    this.df.on("datachanged", function (e) {
      this.U6(e, f);
    }, this);
    this.U6(this.df, f);
    this.Qf(h);
  },
  U6: function (c, f) {
    c.getCount() > 0 ? f.addCls("exists") : f.removeCls("exists");
  },
  $ra: function () {
    this.getStore(this.tabs.kr).each(function (c) {
      var h = c.get("value"),
          f = c.get("id");

      switch (f) {
        case this.ia.ii:
          this.ia.zg(this.ia.ii, c.get("extraData").form.text);
          break;

        case this.ia.pj:
          this.ia.zg(this.ia.kw, c.get("extraData").form.text);
          this.ia.zg(this.ia.pj, h);
          break;

        default:
          this.ia.zg(f, h);
      }
    }, this);
    this.fireEvent(this.Vk, this.jw);
  },
  Ora: function () {
    this.ia.xM([this.ia.Zn, this.ia.ii, this.ia.kw, this.ia.pj, this.ia.pq, this.ia.oq]);
    this.fireEvent(this.Gn, this.fw);
  },
  Dma: function () {
    return this.v8 = this.v8 || [{
      id: "classic",
      label: E.lang.rW
    }, {
      id: "cartoon",
      label: E.lang.qW
    }, {
      id: "space",
      label: E.lang.sW
    }, {
      id: "jazz",
      label: E.lang.tW
    }, {
      id: "action",
      label: E.lang.pW
    }];
  },
  a4: function () {
    var c = [{
      id: this.ia.gF,
      name: this.NW,
      label: E.lang.vW,
      value: this.ia.Fb(this.ia.gF)
    }, {
      id: this.ia.hF,
      name: this.OW,
      label: E.lang.xW,
      value: this.ia.Fb(this.ia.hF)
    }, {
      id: this.ia.eF,
      name: this.KW,
      label: E.lang.nW,
      value: this.ia.Fb(this.ia.eF)
    }, {
      id: this.ia.fF,
      name: this.MW,
      label: E.lang.oW,
      value: this.ia.Fb(this.ia.fF)
    }, {
      id: this.ia.dF,
      name: this.LW,
      label: E.lang.uV,
      value: this.ia.Fb(this.ia.dF)
    }];
    c.forEach(function (e) {
      e.extraData = {
        Zi: {
          text: E.lang.AW,
          Vo: this.gca,
          fireEvent: this.hR
        }
      };
    }, this);
    c.unshift({
      id: this.ia.fl,
      name: this.Fca,
      label: m,
      value: this.ia.Fb(this.ia.fl),
      extraData: {
        showCheckbox: !1,
        form: {
          label: E.lang.wW,
          type: "select",
          options: this.Dma(),
          selected: this.ia.Fb(this.ia.fl)
        }
      }
    });
    return c;
  },
  Vta: function (c, h) {
    h.add(this.a4());
    this.twa = Ext.create(E.Kd.aH, {
      renderTo: Ext.get(c).select(".sound-volume-container").first(),
      volume: this.volume,
      Kf: this.Kf
    });
    this.twa.on("setvolume", this.Kx, this);
    var f = Ext.create(E.f.Tb.il, {
      store: h,
      renderTo: Ext.get(c).select(".sound-motives").first()
    });
    this.Ila(c);
    f.on(this.hR, this.nk, this);
    this.Qf(h);
  },
  Ila: function (c) {
    this.ap = Ext.create(E.f.Tb.YR, {
      fontSize: this.ia.Fb(this.ia.Au),
      renderTo: Ext.get(c).select(".fonts-container").first()
    });
  },
  Kx: function (c) {
    this.volume = c.volume;
    this.Kf = c.Kf;
    this.fireEvent("setvolume", this, this.volume);
    this.fireEvent("setlastvolume", this, this.Kf);
  },
  nk: function (c) {
    this.app.rA(this.getStore(this.tabs.bo).getById(this.ia.fl).get("value"));

    switch (c.get("name")) {
      case this.NW:
        this.app.Bz();
        break;

      case this.OW:
        this.app.Cz();
        break;

      case this.KW:
        this.app.zz();
        break;

      case this.MW:
        this.app.Az();
        break;

      case this.LW:
        this.app.Dz();
    }
  },
  jsa: function () {
    this.getStore(this.tabs.bo).each(function (e) {
      var f = e.get("value"),
          e = e.get("id");
      this.ia.zg(e, f);
      e === this.ia.fl && this.app.rA(f);
    }, this);
    var c = this.ap.getData();
    this.ia.zg(this.ia.xu, this.ia.sy(this.ia.xu));
    this.ia.zg(this.ia.zu, this.ia.sy(this.ia.zu));
    this.ia.zg(this.ia.Au, c[this.ap.ov]);
    this.ia.zg(this.ia.yu, this.ia.sy(this.ia.yu));
    this.fireEvent(this.Vk, this.jw);
  },
  Ura: function () {
    this.ia.xM([this.ia.eF, this.ia.gF, this.ia.hF, this.ia.dF, this.ia.fF, this.ia.fl, this.ia.xu, this.ia.yu, this.ia.Au, this.ia.zu]);
    this.fireEvent(this.Gn, this.fw);
  }
});