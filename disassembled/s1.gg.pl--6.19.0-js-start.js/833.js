Ext.define(E.stores.xF, {
  extend: "Ext.data.Store",
  model: E.models.rf,
  id: "NotificationsStore",
  proxy: {
    type: "memory",
    reader: {
      type: "ggpl.notifications.json"
    }
  },
  nb: {},
  im: m,
  cz: 0,
  tH: 0,
  ho: m,
  xo: [],
  vH: {},
  loading: !1,
  mixins: {
    Ik: C.core.mixins.jr
  },
  xN: m,
  wA: m,
  defer: !0,
  bm: m,
  constructor: function (c) {
    c = c || {};
    this.bm = [];
    this.callParent([c]);
    this.mixins.Ik.constructor.call(this, c);
    C.k().og.on("notifications/list", this.d1, this);
    C.k().og.on("notifications/new", this.Z0, this);
    C.k().og.on("notifications/state", this.f1, this);
    this.on("remove", this.Qo, this);
    this.addEvents("newnotification", "counterschanged", "beforeadd", "loading", "loaded");
    this.nb = Ext.create(E.core.events.rF);
    this.Ow(this.Oka, this);
  },
  destroy: function () {
    this.mixins.Ik.destroy.call(this);
    C.k().og.on("notifications/list", this.d1, this);
    C.k().og.on("notifications/new", this.Z0, this);
    C.k().og.on("notifications/state", this.f1, this);
    this.callParent();
  },
  vJ: function () {
    var c = 0;
    this.each(function (b) {
      (b.get(this.Nj) | 0) == this.Fm && (this.tz(b), c++);
    }, this);
    c > 0 && this.nb.change("_all", -c);
    this.sN();
    this.au(this.getRange());
  },
  clearData: function () {
    var c = this;
    this.data.each(function (b) {
      b.unjoin(c);
    });
    this.data.clear();
    this.tH = this.cz = 0;
    this.ho = m;
  },
  beforeEdit: function (c, n, l, f) {
    n == "state" && l == "NS_RELEASED" && l != f && (this.nb.ds("_allnew"), this.nb.Sm(c));
  },
  Tf: function () {
    this.data.sortBy(E.models.rf.t_);
  },
  loadData: function (c) {
    var w = this.model,
        q = c.notifications.length,
        o,
        f = [];
    o = 0;

    for (var y = C.k().pg.getTime(), u = 0; u < q; u++) {
      o = c.notifications[u], o instanceof Ext.data.Model || (c.notifications[u] = Ext.ModelManager.create(o, w)), o = o.id, this.findExact("id", c.notifications[u].get("id")) == -1 && c.notifications[u].get("expiresAt") > y && f.push(c.notifications[u]);
    }

    if (o) {
      this.cz = o;
    }

    this.tH += c.notifications.length;
    this.add(f, c.counters);
    this.fireEvent("loaded");
    this.loading = !1;
  },
  remove: function (c) {
    if (!Ext.isEmpty(c)) {
      return this.defer && (Ext.isArray(c) || (c = [c]), Ext.Array.each(this.bm, function (b) {
        Ext.Array.each(c, function (e) {
          Ext.Array.remove(b.Yw, e);
        }, this);
      }, this), Ext.Array.each(this.bm, function (e) {
        e && e.Yw && e.Yw.length == 0 && Ext.Array.remove(this.bm, e);
      }, this)), this.callParent(arguments);
    }
  },
  add: function (aa, S, Q) {
    if (this.defer) {
      this.bm.push({
        Yw: aa,
        as: S,
        loa: Q
      });

      if (this.wA == m) {
        this.wA = this.y3();
      }

      if (this.xN == m) {
        this.xN = new Ext.util.DelayedTask(function () {
          this.O7(!1);
          this.wA = m;
          Ext.Array.each(this.bm, function (e) {
            this.add(e.Yw, e.as, e.loa);
          }, this);
          this.bm = [];
        }, this);
      }

      this.y3() - this.wA < 2500 && this.xN.delay(500);
    } else {
      var Q = Q || !1,
          N = S = !1,
          L = [],
          I = [],
          G = {},
          f = C.k().ia.ob("notifications"),
          ac = f.showWhenBusy,
          ab = C.k().fa.get("status");

      if ((ac == 0 || ac == "0") && ab == "dnd") {
        ac = 0;

        for (ab = aa.length; ac < ab; ac++) {
          aa[ac].set("showOnTray", !1);
        }
      }

      if (f) {
        f.muted.hasOwnProperty("subtypes") && (S = f.muted.subtypes), f.muted.hasOwnProperty("senders") && (N = f.muted.senders);
      }

      f = C.k().qz;
      ac = 0;

      for (ab = aa.length; ac < ab; ac++) {
        var T = !1;

        if (f.Fua(aa[ac].get("template"))) {
          for (var Y in this.xo) {
            if (this.xo.hasOwnProperty(Y) && this.xo[Y].call(this.vH[Y] || this, this, aa[ac]) === !1) {
              T = !0;
              break;
            }
          }

          if (!T) {
            aa[ac].get("state") == "NS_RELEASED" && (aa[ac].set("highlight", !0), I.push(aa[ac]));

            if (S && aa[ac].get("showOnTray")) {
              for (var T = 0, c = S.length; T < c; T++) {
                var o = S[T].replace(/[$^[\]().+?]/g, "\\$&").replace("*", "[^/]+");
                RegExp("^" + o + "(/.+)?$").test(aa[ac].get("subtype")) && aa[ac].set("showOnTray", !1);
              }
            }

            N && N.length > 0 && aa[ac].get("showOnTray") && N.indexOf(parseInt(aa[ac].get("sender").id)) > -1 && aa[ac].set("showOnTray", !1);
            L.push(aa[ac]);
          }
        }
      }

      if (!(L.length <= 0)) {
        this.fireEvent("beforeadd", this, L), this.suspendEvents(!0), this.callParent([L]), this.Tf(), this.resumeEvents(), this.nb.change("_allnew", I.length), this.nb.Uw(I), G.items = L, this.fireEvent("newnotification", this, G), Q && this.fireEvent("injected", this, L);
      }
    }
  },
  y3: function () {
    return new Date().getTime();
  },
  wo: !1,
  oZ: function (c) {
    var w = c.items,
        q,
        o;

    if (Ext.isArray(w)) {
      q = 0;

      for (o = w.length; q < o; q++) {
        w.local && delete w.local, w[q] = Ext.create(E.models.rf, w[q]);
      }
    }

    var f = [],
        y = [],
        u = Math.round(new Date().getTime() / 1000);
    q = 0;

    for (o = w.length; q < o; q++) {
      this.findExact("id", w[q].get("id")) == -1 && w[q].get("expiresAt") > u && (f.push(w[q]), y.push(w[q].get("id")));
    }

    f.length > 0 && (c.hasOwnProperty("counters") ? this.add(f, c.counters, !0) : this.add(f, !1, !0), E.api.Zc.$M({
      id: y,
      state: "NS_RECEIVED"
    }));
  },
  ct: function (c) {
    var f = this,
        c = c || {};

    if (this.wo || !this.Tfa()) {
      return !1;
    }

    c.uin = C.k().fa.get("uin");

    if (this.cz) {
      c.lastNotificationId = this.cz;
    }

    this.wo = !0;
    this.fireEvent("loading");
    this.loading = !0;
    E.api.Zc.lma(c, {
      fn: function (e) {
        if (e.result.status == 0) {
          f.loadData(f.proxy.reader.extractData(e), !0), f.wo = !1;
        }
      },
      scope: this
    });
    return !0;
  },
  Tfa: function () {
    return this.ho == m || this.tH < this.ho;
  },
  f1: function (c) {
    var c = c.content.items,
        h;

    for (h in c) {
      var f = this.getById(c[h].id);

      if (f) {
        switch (c[h].state) {
          case "NS_DELETED":
          case "NS_READ":
          case "NS_EXPIRED":
            f.vg();
            break;

          case "NS_POSTPONED":
            f.set("highlight", !1);
        }

        f.Op(c[h].state, !1);
      }
    }
  },
  Qo: function (c, f) {
    f.get("state") == "NS_RELEASED" && (this.nb.ds("_allnew"), this.nb.Sm(f));
  },
  rea: function (c) {
    var p = C.k().pg.getTime(),
        p = {
      priority: 5,
      releaseAt: p,
      expiresAt: p + 86400,
      args: {},
      state: "NS_RELEASED",
      muteSound: typeof c.muteSound !== "undefined" ? c.muteSound : !1,
      showOnTray: typeof c.showOnTray !== "undefined" ? c.showOnTray : !0,
      appType: 0
    },
        o = ["target", "action", "subtype", "template"];
    c.id = new Date().getTime() + "" + Math.floor(Math.random() * 9001 + 1000);
    c.local = !0;

    for (var n = "", f = 0; f < o.length; f++) {
      c.hasOwnProperty(o[f]) || (n += '"' + o[f] + '", ');
    }

    n != "" && j(Error("Notifications - missing required fields: " + n.substr(0, n.length - 3)));
    Ext.applyIf(c, p);
    c = Ext.ModelManager.create(c, this.model);
    this.add([c], !0, !0);
    return c;
  },
  d1: function (c) {
    this.oZ(c.content);
  },
  Z0: function (c) {
    this.oZ(c.content);
  },
  Bk: function (c) {
    E.api.Zc.Bk({
      subtype: c,
      state: "NS_DELETED"
    });
  },
  clearAll: function () {
    this.ho = 0;
    this.Bk("*");
    this.each(function (c) {
      c.vg();
    });
  },
  g_: function (c, h) {
    var f = this;
    h || this.Bk(c);
    this.each(function (b) {
      b.get("subtype") == c && (b.vg(), b.isLocal() || f.ho--);
    });
  },
  nza: function (c) {
    var f = this;
    this.each(function (e) {
      if (e.get("target") == c) {
        var b = e.get("subtype");
        f.Bk(b);
        e.vg();
        e.isLocal() || f.ho--;
      }
    });
  },
  bJ: function (c, h) {
    var f = this;
    this.each(function (b) {
      c.call(h || f, f, b) === !1 && b.vg();
    });
  },
  Ow: function (c, f) {
    this.vH[this.xo.push(c) - 1] = f;
  },
  oM: function (c) {
    c = this.xo.indexOf(c);
    delete this.vH[c];
    delete this.xo[c];
  },
  wDa: function (c) {
    var c = c || {},
        f = m,
        f = this.queryBy(function (b) {
      if (b.isLocal()) {
        if (typeof c.Lsa !== "undefined" && c.Lsa != b.get("sender").id) {
          return !1;
        }

        if (typeof c.subtype !== "undefined") {
          if (Ext.isArray(c.subtype)) {
            if (c.subtype.indexOf(b.get("subtype")) === -1) {
              return !1;
            }
          } else {
            if (c.subtype !== b.get("subtype")) {
              return !1;
            }
          }
        }

        if (typeof c.action !== "undefined") {
          if (Ext.isArray(c.action)) {
            if (c.action.indexOf(b.get("action")) === -1) {
              return !1;
            }
          } else {
            if (c.action !== b.get("action")) {
              return !1;
            }
          }
        }

        return !0;
      }

      return !1;
    }, this);
    return f.getRange();
  },
  tz: function (c) {
    this.Mm = !0;
    c.vg();
    this.Mm = !1;
  },
  Oka: function (c, f) {
    if (f.get("subtype") == "mail/ubik_wp/message") {
      return !1;
    }
  },
  O7: v("defer"),
  pCa: x("defer")
});