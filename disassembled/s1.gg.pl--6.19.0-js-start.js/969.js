Ext.define(E.f.layout.va.Zc, {
  extend: C.f.Jb,
  cls: "sr-notifications-widget-container",
  data: {},
  header: m,
  Vc: {
    Yqa: 5,
    Zqa: 10,
    Be: 5
  },
  JH: !1,
  dndMode: !1,
  g3: !0,
  constructor: function () {
    this.store = Ext.create(E.stores.zF);
    this.Gm = Ext.create(E.f.layout.va.qT, {
      store: this.store,
      Vc: this.Vc,
      parent: this
    });
    this.items = [this.Gm, Ext.create(E.f.layout.va.wF, {
      store: this.store,
      Vc: this.Vc,
      Gm: this.Gm
    })];
    this.store.on("blockWidget", this.hha, this);
    this.store.on("unblockWidget", this.Cia, this);
    this.rga();
    this.callParent(arguments);
  },
  initComponent: function () {
    this.callParent(arguments);
  },
  hha: function () {
    this.Hy();
    this.JH = !0;
  },
  Cia: function () {
    this.JH = !1;
  },
  Hy: function (c) {
    var f = Ext.get(this.el).parent();
    f.addCls("anim-hidden");
    c && f.addCls("hidden");
  },
  q8: function () {
    if (!this.JH && !this.dndMode) {
      var c = Ext.get(this.el).parent();
      c.hasCls("anim-hidden") && (c.removeCls("hidden"), c.removeCls("anim-hidden"));
    }
  },
  rga: function () {
    var c = C.k().fa,
        f = C.k().ia.ob("selfstatus");

    if (f && f.dndMode == 0 && c.get("status") === "dnd") {
      this.dndMode = !0, this.Hy();
    }

    c.on("datachanged", this.Iia, this);
  },
  Iia: function (c, h, f) {
    if (h || f) {
      if (c = C.k().ia.ob("selfstatus"), !(c && c.dndMode == 1) && h == "status") {
        if (f == "dnd") {
          if (!this.dndMode) {
            this.dndMode = !0, this.Hy(this.g3);
          }
        } else {
          if (this.dndMode) {
            this.dndMode = !1, this.q8(), this.Gm && this.Gm.hideTimer();
          }
        }

        this.g3 = !1;
      }
    }
  }
});