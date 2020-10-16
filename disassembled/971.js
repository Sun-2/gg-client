Ext.define(E.f.layout.va.qT, {
  extend: "Ext.view.View",
  cls: "sr-notifications-widget-list",
  itemSelector: "li.item-body",
  d6: m,
  io: m,
  mixins: {
    ea: C.core.mixins.kb
  },
  animations: {
    B2: {
      duration: 1000,
      timeout: 200
    },
    Tw: {
      duration: 5000,
      timeout: 200
    }
  },
  yna: 20000,
  ka: {
    ".sr-notifications-widget-close": function (c, h, f) {
      this.fireEvent("notificationCancel", c, h, f);
    },
    ".item-body": function (c, h, f) {
      this.fireEvent("notificationConsume", c, h, f);
    }
  },
  constructor: function (c) {
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd
    }]];
    c = c || {};
    c.blockRefresh = !0;
    this.tpl = C.k().da.ma("notifications-widget-list");
    this.d6 = new E.Vg.Zc();
    this.callParent(arguments);
  },
  initComponent: function () {
    this.mixins.ea.constructor.call(this);
    this.callParent(arguments);
    this.on("afterrender", this.na, this);
    this.on("itemclick", this.mb, this);
    this.on("notificationCancel", this.a1, this);
    this.on("notificationConsume", this.c1, this);
    this.on("itemadd", this.Mo, this);
    this.on("refresh", this.Ar, this);
  },
  onAdd: function (c, n, l, f) {
    n.length == 1 && typeof f == "undefined" || f ? (this.Tf(), this.callParent([c, n, this.store.indexOf(n[0])])) : this.callParent(arguments);
    this.io && clearTimeout(this.io);
    this.parent.q8();

    if (C.k().rn) {
      this.hideTimer();
    } else {
      C.k().on("appfocus", this.hideTimer, this);
    }
  },
  hideTimer: function (c) {
    this.io && clearTimeout(this.io);
    var f = this;
    this.io = setTimeout(function () {
      f.store.getCount() > 0 && f.parent.Hy();
    }, f.yna);
    c && C.k().un("appfocus", this.hideTimer, this);
  },
  doAdd: function (c, h, f) {
    if (h.length == 1 && this.all.getCount() >= this.Vc.Be) {
      if (f > this.Vc.Be) {
        return;
      }

      this.updateIndexes(this.Vc.Be - 1);
      this.doRemove(m, this.Vc.Be - 1);
    }

    this.callParent(arguments);
  },
  onRemove: function (c, n, l) {
    this.callParent(arguments);

    if (this.Vc.Be == this.Vc.Yqa || this.Vc.Be == this.Vc.Zqa) {
      this.refresh(!0);
    } else {
      if (this.all.getCount() > l && l <= this.Vc.Be) {
        var f = this.store.getAt(this.Vc.Be);

        if (f) {
          this.onAdd(m, [f], this.Vc.Be - 1);
        }
      }
    }
  },
  onUpdate: function (c, n) {
    var l = this.store.indexOf(n),
        f;
    l > -1 && (f = this.all.elements[l]);
    f && this.callParent(arguments);
  },
  m6: !1,
  onDataChanged: function () {
    this.callParent(arguments);

    if (!this.m6) {
      this.m6 = !0;
    }
  },
  k5: function (c, q, p) {
    var o = this,
        c = typeof c == "object" ? c : [c];

    if (c.length < 1) {
      return !1;
    }

    for (var p = typeof p == "undefined" ? this.animations.B2.timeout : p, q = typeof q == "undefined" ? this.animations.B2.duration : q, f = c.length - 1; f >= 0; f--) {
      var u = Ext.get(c[f]);
      p ? function (h, y, w, n) {
        new h.util.DelayedTask(function () {
          o.j5(y, w);
        }).delay(n);
      }(Ext, u, q, p * (-(f - c.length) - 1)) : o.j5(u, q);
    }

    return !0;
  },
  j5: function (c) {
    c.addCls("hover");
    setTimeout(function () {
      c.removeCls("hover");
    }, 5000);
  },
  an: function (c) {
    for (var f = c.length - 1; f >= 0; f--) {
      Ext.get(c[f]).show();
    }
  },
  refresh: function (c) {
    var h,
        f,
        c = c || !1;

    if (this.rendered) {
      this.fireEvent("beforerefresh", this), h = this.getTargetEl(), f = this.store.getRange(0, this.Vc.Be - 1), h.update(""), f.length < 1 ? ((!this.deferEmptyText || this.hasSkippedEmptyText) && h.update(this.emptyText), this.all.clear()) : (this.tpl.overwrite(h, this.collectData(f, 0)), this.all.fill(Ext.query(this.getItemSelector(), h.dom)), this.updateIndexes(0), this.Yva(f)), this.selModel.refresh(), this.hasSkippedEmptyText = !0, this.fireEvent("refresh", this), this.el.dom.children[0] && (c ? this.an(this.el.dom.children[0].children) : this.k5(this.el.dom.children[0].children, this.animations.Tw.duration, this.animations.Tw.timeout));
    }
  },
  Yva: function (c) {
    for (var n = [], l = 0, f = c.length; l < f; l++) {
      c[l].get("state") == "NS_RELEASED" && !c[l].get("viewed") && !c[l].isLocal() && (n.push(c[l].get("id")), c[l].lN("viewed", !0));
    }

    n.length > 0 && E.api.Zc.$M({
      id: n,
      state: "NS_VIEWED"
    });
  },
  Nga: function () {
    for (var c = this.store.getRange(), n = [], l = 0, f = c.length; l < f; l++) {
      c[l].isLocal() || n.push(c[l].getId());
    }

    E.api.Zc.Bk({
      id: n,
      state: "NS_POSTPONED"
    });
    this.store.clearData();
    this.refresh();
  },
  Tf: function () {
    this.store.data.sortBy(E.models.rf.compare);
  },
  Mo: function (c, h, f) {
    this.Ar(c);
    this.k5(f, this.animations.Tw.duration, this.animations.Tw.timeout);
  },
  mb: function (c, q, p, o, f) {
    for (var u in this.ka) {
      if (f.getTarget(u)) {
        this.ka[u].call(c, q, p, o, f);
        break;
      }
    }
  },
  c1: function (c) {
    this.store.remove(c);
    c.ms();
  },
  a1: function (c) {
    c.Op("NS_POSTPONED");
  },
  Ar: function (c) {
    var f = [];
    c instanceof Ext.data.Model || (c = this.store.getRange());
    Ext.each(c, function (e) {
      var g = e.get("sender");

      if ((e = this.getNode(e)) && g.type === "user") {
        e = Ext.get(e).query(".sender")[0], f.push({
          uin: g.id,
          zb: [{
            name: e
          }]
        });
      }
    }, this);
    this.fireEvent("addedavatars", {
      object: f
    });
  },
  prepareData: function (c, h, f) {
    f && (Ext.apply(c, f.getAssociatedData()), c = this.d6.prepareData(c));
    return c;
  },
  vd: t(),
  Mc: A(m),
  destroy: function () {
    this.mixins.ea.destroy.call(this);
    this.un("itemclick", this.mb, this);
    this.un("notificationCancel", this.a1, this);
    this.un("notificationConsume", this.c1, this);
    this.un("itemadd", this.Mo, this);
    this.un("afterrender", this.na, this);
    this.getEl().un("mouseenter", this.rh, this);
    this.getEl().un("mouseleave", this.Gj, this);
  },
  na: function () {
    this.getEl().on("mouseenter", this.rh, this);
    this.getEl().on("mouseleave", this.Gj, this);
  },
  rh: function () {
    clearTimeout(this.io);
  },
  Gj: function () {
    this.hideTimer();
  }
});