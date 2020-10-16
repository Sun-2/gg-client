Ext.define(E.f.layout.va.FG, {
  extend: C.f.An,
  name: "share-links-widget",
  cls: "share-links-widget",
  store: m,
  list: m,
  uL: 12,
  OCa: 12,
  WDa: 60,
  cFa: "visible",
  tm: m,
  constructor: function (c) {
    this.store = c.store || m;
    this.tm = c.tm || m;
    this.callParent(arguments);
  },
  initComponent: function () {
    this.da = C.k().da;
    this.html = this.da.Wa("share-links-widget", {
      links: [],
      tm: this.tm
    });
    this.blockRefresh = !0;
    this.store || (this.store = Ext.getStore("ShareLinksStore")) || (this.store = Ext.create(E.stores.HG, {
      id: "ShareLinksStore",
      Jd: {
        Cl: E.models.Ma.Event.prototype.gga.S9
      }
    }), this.store.Nz(!0, {
      maxAttachments: this.uL
    }));
    this.blockRefresh = !1;
    this.callParent(arguments);
    this.store.mea(this.Qqa);
    this.on("afterrender", this.gb, this);
    this.store.on("databufferflushed", this.n0, this);
    this.store.on("removegroup", this.n1, this);
    C.k().on("peeksinserted", this.i1, this);
    C.k().on("activechatitemset", this.E_, this);
  },
  destroy: function () {
    this.callParent(arguments);
    this.un("afterrender", this.gb, this);
    this.el.un("click", this.Ia, this);
    this.store.un("databufferflushed", this.n0, this);
    this.store.un("removegroup", this.n1, this);
    C.k().un("peeksinserted", this.i1);
    C.k().un("activechatitemset", this.E_);
  },
  n1: function () {
    this.list.refresh();
  },
  n0: function () {
    this.store.kn();
    this.list && this.list.refresh();
  },
  ka: {
    ".share-links-aol": function (c) {
      c.preventDefault();
      C.Ca("aol");
    }
  },
  Ia: function (c, h, f) {
    Ext.iterate(this.ka, function (e, b) {
      c.getTarget(e) && b.call(this, c, h, f);
    }, this);
  },
  gb: function () {
    this.el.on("click", this.Ia, this);
    this.Jm = Ext.create(E.services.$q, {
      Jp: this.el,
      lp: ".share-links-item-thumbnail",
      Ep: ".share-links-resultlist-item"
    });
    var c = this.el.select(".share-links-resultlist-container").first();
    this.store.kn();
    this.list = Ext.create(E.f.layout.va.GG, {
      store: this.store,
      renderTo: c,
      Jm: this.Jm
    });
  },
  i1: function (c) {
    c.record.senderID == m && (c.record.senderID = C.k().fa.get("uin"));
    this.list.blockRefresh = !0;
    c.record.link = c.record.$qa;
    this.store.po(Ext.getStore("LifeStreamEventsStore").po([c.record], !1), !0);
    this.list.blockRefresh = !1;
    this.list.refresh();
    this.Jm.ez();
  },
  collectData: function () {
    return {
      PEa: this.QEa.length
    };
  },
  E_: function (c, f) {
    this.list && this.list.Vsa(c, f);
  },
  Qqa: function (c, n) {
    if (c.get("dataSourceType") !== E.models.Ma.Event.prototype.A2.ub) {
      return !0;
    }

    for (var l = 0, f = n.length; l < f; l++) {
      if (n[l].get("dataSourceType") === E.models.Ma.Event.prototype.A2.ub) {
        return !1;
      }
    }

    return !0;
  }
});