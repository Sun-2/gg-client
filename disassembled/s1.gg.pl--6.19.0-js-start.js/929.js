Ext.define(E.controllers.fG, {
  extend: E.controllers.nc,
  Gh: "roulette",
  init: function () {
    this.callParent(arguments);
  },
  execute: function () {
    C.k().mf(C.k().config.ab.ph);
    C.k().fireEvent("roulette:search_options:load");
    this.callParent(arguments);
  },
  kd: function () {
    this.callParent(arguments);
    this.view = Ext.create(E.f.eG, {});
  }
});