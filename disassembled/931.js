Ext.define(E.controllers.rE, {
  extend: E.controllers.nc,
  name: "default",
  initConfig: {
    view: E.f.Tb.qE
  },
  constructor: t(),
  execute: function () {
    this.callParent(arguments);
    C.k().mf(C.k().config.ab.ph);
  }
});