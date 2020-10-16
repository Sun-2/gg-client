Ext.define(E.f.notifications.Yq, {
  extend: "Ext.view.View",
  itemSelector: "li.item-body",
  cls: "sr-notifications-list",
  deferEmptyText: !1,
  loadingText: "",
  Vg: m,
  Oy: !0,
  Yj: m,
  mixins: {
    ea: C.core.mixins.kb
  },
  constructor: function (c) {
    c = c || {};
    c.disableSelection = !0;
    this.Vg = new E.Vg.Zc();
    var f = [[C.core.ea.oj, {}], [C.core.ea.Yc, {
      uc: C.k().sd,
      tk: ["removeAllAvatars"]
    }]];
    this.emptyText = '<div class="sr-notifications-empty">' + E.lang.jT + "</div>";
    this.ea = this.ea ? this.ea.concat(f) : f;
    this.callParent(arguments);
  },
  Mc: A(m),
  initComponent: function () {
    this.mixins.ea.constructor.call(this);
    this.callParent(arguments);
    this.Yj != m && (this.header.on("group", this.Vha, this), this.header.Zj());
    this.on("afterrender", this.iia, this);
    this.on("itemclick", this.mb, this);
    this.on("itemmouseenter", this.onItemMouseEnter, this);
    this.on("itemmouseleave", this.onItemMouseLeave, this);
    this.on("refresh", this.Kg, this);
    this.store.on("loading", this.O0, this);
    this.store.on("loaded", this.eia, this);
    this.store.on("datachanged", this.Hd, this);
  },
  collectData: function () {
    return this.callParent(arguments);
  },
  prepareData: function (c, h, f) {
    f && Ext.apply(c, f.getAssociatedData());
    return c = this.Vg.prepareData(c);
  },
  mb: function (c, q, p, o, f) {
    for (var u in this.ka) {
      if (f.getTarget(u)) {
        this.ka[u].call(c, q, p, o, f);
        break;
      }
    }
  },
  Kg: function () {
    var c = [],
        f = this.store.getRange();
    Ext.each(f, function (n) {
      var g = n.get("sender");

      if (g.type === "user") {
        var b = Ext.get(this.getNode(n)).query(".sr-user-avatar")[0] || m,
            n = Ext.get(this.getNode(n)).query(".sender")[0];
        c.push({
          uin: g.id,
          zb: [{
            avatar: b,
            name: n,
            size: 50
          }]
        });
      }
    }, this);
    this.Oy || this.fireEvent("removeAllAvatars");
    this.fireEvent("addedavatars", {
      object: c
    });
    this.Oy = !0;
  },
  onItemMouseEnter: function (c, h, f) {
    if (c = Ext.get(f)) {
      c = Ext.get(c.query(".sr-notifications-releaseat")[0]), h = c.query(".relativeDate"), h.length < 1 || (Ext.get(h[0]).addCls("d-none"), Ext.get(c.query(".fullDate")[0]).removeCls("d-none"));
    }
  },
  onItemMouseLeave: function (c, h, f) {
    if (c = Ext.get(f)) {
      c = Ext.get(c.query(".sr-notifications-releaseat")[0]), h = c.query(".relativeDate"), h.length < 1 || (Ext.get(h[0]).removeCls("d-none"), Ext.get(c.query(".fullDate")[0]).addCls("d-none"));
    }
  },
  CL: m,
  Vha: function (c) {
    if (this.Yj) {
      if (!this.CL) {
        this.CL = this.tpl;
      }

      this.tpl = c ? this.Yj : this.CL;
      this.refresh();
    }
  },
  O0: function () {
    this.store.getCount() == 0 && this.rendered && this.fireEvent("showpreloader");
  },
  eia: function () {
    this.fireEvent("hidepreloader");
  },
  Hd: function () {
    this.fireEvent("hidepreloader");
  },
  iia: function () {
    this.mixins.ea.constructor.call(this, {});
    this.store.loading && this.fireEvent("showpreloader");
  },
  vd: t(),
  destroy: function () {
    this.mixins.ea.destroy.call(this);
    this.un("itemmouseenter", this.onItemMouseEnter, this);
    this.un("itemmouseleave", this.onItemMouseLeave, this);
    this.un("refresh", this.Kg, this);
    this.store.un("loading", this.O0, this);
    this.store.un("datachanged", this.Hd, this);
  }
});