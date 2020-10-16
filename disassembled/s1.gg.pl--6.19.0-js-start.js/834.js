Ext.define(E.stores.zF, {
  extend: "Ext.data.Store",
  model: E.models.rf,
  sorters: [{
    sorterFn: E.models.rf.compare
  }],
  id: "NotificationsWidgetStore",
  proxy: {
    type: "memory"
  },
  preferences: m,
  YBa: !1,
  constructor: function () {
    this.callParent(arguments);
    this.addEvents("blockwidget", "unblockwidget");
    this.Wpa = Ext.StoreManager.lookup("NotificationsStore");
    this.Wpa.on("injected", this.aha, this);
    this.on("update", this.ig, this);
  },
  clearData: function () {
    var c = this;
    this.data.each(function (b) {
      b.unjoin(c);
    });
    this.data.clear();
  },
  Tf: function () {
    this.data.sortBy(E.models.rf.compare);
  },
  aha: function (c, p) {
    for (var o = [], n = 0, f = p.length; n < f; n++) {
      p[n].get("state") === "NS_RELEASED" && p[n].get("showOnTray") && o.push(p[n]);
    }

    o.length > 0 && (this.add(o), this.nk(o["0"]));
  },
  ig: function (c, f) {
    (f.get("state") != "NS_RELEASED" || f.get("showOnTray") == !1) && this.remove(f);
  },
  nk: function (c) {
    c = typeof c.get("muteSound") !== "undefined" ? c.get("muteSound") : !1;
    C.k().Co("playOnNotify") && !c && C.k().Dqa();
  },
  bva: function () {
    this.fireEvent("unblockwidget");
  },
  ava: function () {
    this.fireEvent("blockwidget");
  }
});