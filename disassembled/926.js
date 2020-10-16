Ext.define(E.controllers.AC, {
  extend: E.controllers.nc,
  name: "notifications-controller",
  store: m,
  Qza: m,
  Gh: "latest",
  Ao: {},
  IH: {},
  constructor: function () {
    this.callParent(arguments);
  },
  init: function () {
    this.store = Ext.getStore("ConversationsStore");
    this.callParent(arguments);
    this.store.init();
  },
  execute: function () {
    C.k().mf(C.k().config.ab.ph);
    C.k().fireEvent("latest:load");
    this.callParent(arguments);
    this.store.on("add", this.yf, this);
    this.store.on("update", this.ig, this);
    this.wj(this.store.getRange());
  },
  kd: function () {
    this.callParent(arguments);
    this.view = Ext.create(E.f.notifications.zC, {
      store: this.store
    });
  },
  yf: function (c, f) {
    this.wj(f);
  },
  ig: function (c, f) {
    this.wj([f]);
  },
  wj: function (c) {
    var n = this.view.getComponent(1);

    if (!n) {
      return !1;
    }

    for (var l = 0; l < c.length; l++) {
      var f = c[l];
      this.Ao[f.internalId] && (clearInterval(this.Ao[f.internalId]), delete this.Ao[f.internalId], clearInterval(this.IH[f.internalId]), delete this.IH[f.internalId]);
      f.get("highlight") && function (o, y, w, q, p) {
        o.IH[w.internalId] = setTimeout(function () {
          clearInterval(o.Ao[w.internalId]);
          delete o.Ao[w.internalId];
          var b = Ext.get(y.getNode(w));
          b && b.removeCls("blink");
        }, q);
        o.Ao[w.internalId] = setInterval(function () {
          var e = Ext.get(y.getNode(w));
          e && (e.hasCls("blink") ? e.removeCls("blink") : e.addCls("blink"));
        }, p);
      }(this, n, f, E.config.animations.status.wj.duration, E.config.animations.status.wj.interval);
    }
  },
  BEa: t(),
  NAa: function () {
    var c = this.view.getComponent(1);

    if (!c || c.el.dom.children.length < 1) {
      return !1;
    }

    return Ext.get(c.el.dom.children[0]).query("li.item-body");
  },
  rg: function () {
    clearInterval(this.interval);
    this.store.un("add", this.yf, this);
    this.store.un("update", this.ig, this);
  },
  destroy: function () {
    this.callParent(arguments);
    this.store.un("add", this.yf, this);
  }
});