Ext.define(E.stores.rT, {
  extend: "Ext.data.Store",
  model: E.models.rf,
  sorters: [{
    sorterFn: E.models.rf.compare
  }],
  proxy: {
    type: "memory",
    reader: {
      type: "ggpl.notifications.json"
    }
  },
  Hh: m,
  Km: m,
  NK: m,
  type: m,
  constructor: function () {
    this.callParent(arguments);
    this.Hh = Ext.getStore("NotificationsStore");
    this.Hh.on("add", this.s6, this);
    this.addEvents("beforeadd", "loading", "beforecreate");
    this.Hh.on("beforeAdd", this.t6, this);
  },
  destroy: function () {
    this.Hh.un("add", this.s6, this);
    this.Hh.un("beforeAdd", this.t6, this);
    this.callParent();
  },
  Tf: function () {
    this.data.sortBy(E.models.rf.t_);
  },
  s6: function (c, h) {
    var f = this.K3(h);
    f.length > 0 && this.add(f);
  },
  t6: function (c, f) {
    this.fireEvent("beforecreate", [c, f]);
  },
  add: function (c) {
    this.fireEvent("beforeadd", this, c);
    this.suspendEvents(!0);
    this.callParent(arguments);
    this.Tf();
    this.resumeEvents();
  },
  afterEdit: function () {
    this.suspendEvents(!0);
    this.callParent(arguments);
    this.Tf();
    this.resumeEvents();
  },
  init: function () {
    var c = this.K3(this.Hh.getRange());
    c.length > 0 && this.add(c);
  },
  ct: function (c) {
    this.Hh.ct(c);
  },
  K3: function (c) {
    for (var n = [], l = 0, f = c.length; l < f; l++) {
      (!this.NK || this.NK.apply(this, [c[l]])) && this.findExact("id", c[l].get("id")) == -1 && n.push(c[l]);
    }

    return n;
  },
  Ow: function (c, f) {
    this.Hh.Ow(c, f);
  },
  oM: function (c) {
    this.Hh.oM(c);
  },
  bJ: function (c, f) {
    this.Hh.bJ(c, f);
  }
});