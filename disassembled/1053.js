Ext.define(E.controllers.ru, {
  extend: E.controllers.aD,
  id: "sr-app-aol",
  Gh: "aol",
  z9: {
    autoHeight: !0
  },
  init: function () {
    Ext.apply(this, {
      name: "aol",
      ea: [[E.ea.lv, {}], [E.ea.XC, {}], [E.ea.mv, {}], [E.ea.YC, {}], [E.ea.ZC, {}]]
    });
    this.callParent(arguments);
  },
  execute: function () {
    C.k().fireEvent("aol:load");
    this.callParent(arguments);
    C.k().mf(C.k().config.ab.pI);
  },
  rg: function () {
    this.callParent(arguments);
  },
  q3: function (c) {
    return C.k().config.applications[C.k().lang || "pl"][c];
  }
});