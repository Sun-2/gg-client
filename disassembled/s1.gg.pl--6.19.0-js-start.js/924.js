Ext.define(E.controllers.Wv, {
  extend: E.controllers.nc,
  name: "notifications-controller",
  tasks: [],
  Gh: "latest",
  nO: [],
  constructor: function () {
    this.callParent(arguments);
  },
  execute: function (c) {
    c.token && this.hia(c);
    C.k().mf(C.k().config.ab.ph);
    C.k().fireEvent("latest:load");
    var f = this.store.getRange();
    this.C5(f);
    this.iu(this.Ks(f));
    this.store.on("beforeadd", this.onBeforeAdd, this);
    this.store.on("add", this.onAdd, this);
    this.store.on("remove", this.onStoreRemove, this);
    Ext.getStore("NotificationsWidgetStore").ava();
    this.document.on("mousemove", this.onMouseMove, this);
    Ext.EventManager.addListener(window, "scroll", this.GL, this);
    this.callParent(arguments);
    this.view.fireEvent("afterexecute");
  },
  init: function () {
    this.store = Ext.getStore("NotificationsStore");
    this.callParent(arguments);
    this.document = Ext.get(window.document);
    this.store.ct();
  },
  kd: function () {
    this.view = Ext.create(E.f.notifications.oF, {
      store: this.store
    });
  },
  onBeforeAdd: function (c, f) {
    this.C5(f);
  },
  kH: !1,
  onAdd: function (c, n) {
    var l = this;
    this.jH = !1;

    if (!this.kH) {
      var f = this.Ks(n);
      f == !1 ? setTimeout(function () {
        var e = l.Ks(n);
        l.kH = !0;
        e.length > 0 && l.iu(e);
      }, 500) : (l.kH = !0, f.length > 0 && l.iu(f));
    }
  },
  pr: !1,
  GL: function () {
    var c = this;

    if (c.pr) {
      clearTimeout(c.pr), c.pr = setTimeout(function () {
        c.GL();
        c.pr = !1;
      }, 500);
    } else {
      c.pr = !0;
      var f = this.Ks();
      f.length > 0 && this.iu(f);
    }
  },
  jH: !1,
  lH: !1,
  onMouseMove: function () {
    var c = this;

    if (!this.lH && !this.jH) {
      setTimeout(function () {
        c.lH = !1;
      }, 500);
      this.lH = !0;
      var f = this.Ks();
      f.length > 0 && this.iu(f);
      this.jH = !0;
    }
  },
  C5: function (c) {
    for (var n = [], l = 0, f = c.length; l < f; l++) {
      c[l].get("state") == "NS_RELEASED" && n.push(c[l]);
    }

    l = 0;

    for (f = n.length; l < f; l++) {
      n[l].lN("highlight", !0);
    }
  },
  iu: function (c) {
    for (var p = this, o = [], n = 0, f = c.length; n < f; n++) {
      c[n].get("state") == "NS_RELEASED" && this.nO.indexOf(c[n].getId()) == -1 && o.push(c[n]);
    }

    p.vta(c);

    if (o.length != 0) {
      n = 0;

      for (f = o.length; n < f; n++) {
        this.nO.push(o[n].getId());
      }

      c = new Ext.util.DelayedTask(function () {
        for (var e = 0, g = o.length; e < g; e++) {
          o[e].get("highlight") && o[e].set("highlight", !1);
        }

        p.uta(o);
      });
      c.delay(5000);
      this.tasks.push(c);
    }
  },
  vta: function (c) {
    for (var n = [], l = 0, f = c.length; l < f; l++) {
      c[l].get("state") == "NS_RELEASED" && !c[l].get("viewed") && !c[l].isLocal() && (c[l].lN("viewed", !0), n.push(c[l].get("id")));
    }

    n.length > 0 && E.api.Zc.$M({
      id: n,
      state: "NS_VIEWED"
    });
  },
  uta: function (c) {
    for (var p = [], o = 0, n = c.length; o < n; o++) {
      var f = this.store.getById(c[o].getId());
      f && f.get("state") == "NS_RELEASED" && f.Op("NS_POSTPONED", !1) && p.push(f.get("id"));
    }

    p.length > 0 && E.api.Zc.Bk({
      id: p,
      state: "NS_POSTPONED"
    });
  },
  Ks: function (c) {
    var z = this.view.getComponent(1);

    if (!z || z.el.dom.children.length < 1) {
      return !1;
    }

    var u = Ext.get(z.el.dom.children[0]).query("li.item-body");

    if (u.length == 0) {
      return !1;
    }

    var o = Ext.get(u[0]).getHeight() - 1,
        f = this.document.getScroll().top - z.el.getY(),
        B = f > 0 ? f : 0,
        y = Ext.Element.getViewportHeight(),
        z = y + f - Math.floor(o / 2),
        y = Math.floor((y + (f < 0 ? f : 0)) / o),
        o = Math.floor(B / o);

    if (o > 0) {
      for (f = o - 1; f <= 0; f--) {
        if (Ext.get(u[f]).getY() < B) {
          o = f;
        } else {
          break;
        }
      }
    }

    B = y + o - 1;

    if (B > 0) {
      for (f = B - 1; f <= 0; f--) {
        if (Ext.get(u[f]).getY() > z) {
          B = f;
        } else {
          break;
        }
      }
    }

    B = B > u.length ? u.length - 1 : B;
    z = [];
    y = [];

    if (c) {
      for (var f = 0, w = c.length; f < w; f++) {
        y.push(this.store.indexOf(c[f]));
      }
    }

    for (f = o; f <= B; f++) {
      u[f] && !(y.length > 0 && y.indexOf(f) == -1) && (c = this.store.getAt(f)) && z.push(c);
    }

    return z;
  },
  onStoreRemove: function () {
    var c = this.view.getComponent(1);

    if (!c || c.el.dom.children.length < 1) {
      return !1;
    }

    c.el.dom.children[0].children.length == 0 && this.store.ct();
  },
  M2: function (c) {
    var f = c.token.split("?")[0].split("/"),
        c = f[0],
        f = f[1];
    C.k().fa.get("uin") == c && Ext.defer(function (e) {
      E.api.Zc.kma({
        uin: C.k().fa.get("uin"),
        c6: e
      }, {
        fn: function (g) {
          g.result.status == 0 && (g = Ext.create(E.models.rf, g.result.notification)) && g.ms();
        },
        scope: this
      });
    }, 1000, this, [f]);
  },
  hia: function (c) {
    C.k().UM("splash", !0);

    if (C.k().isReady()) {
      this.M2(c);
    } else {
      C.k().on("appready", function () {
        this.M2(c);
      }, this, {
        single: !0
      });
    }
  },
  rg: function () {
    this.p6();
  },
  destroy: function () {
    this.p6();
  },
  p6: function () {
    for (var c = 0, f = this.tasks.length; c < f; c++) {
      this.tasks[c] && this.tasks[c].cancel();
    }

    this.tasks = [];
    this.nO = [];
    this.store.un("beforeadd", this.Cza, this);
    this.store.un("add", this.onAdd, this);
    this.store.on("remove", this.onStoreRemove, this);
    this.document.un("mousemove", this.onMouseMove, this);
    Ext.getStore("NotificationsWidgetStore").bva();
    Ext.EventManager.removeListener(window, "scroll", this.GL, this);
  }
});