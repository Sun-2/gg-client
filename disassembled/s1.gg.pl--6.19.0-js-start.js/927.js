Ext.define(E.controllers.aG, {
  extend: E.controllers.nc,
  name: "roulette-controller",
  Gh: "roulette",
  init: function () {
    this.callParent(arguments);
    C.k().og.on("vegas/roulette_result", this.Kia, this);
  },
  execute: function (c) {
    C.k().mf(C.k().config.ab.ph);
    C.k().fireEvent("roulette:load");
    c.state !== m && typeof c.state.x8 !== "undefined" && c.state.x8 === !0 && (this.view.jZ(), this.view.zr());
    this.callParent(arguments);
  },
  kd: function () {
    this.callParent(arguments);
    this.view = Ext.create(E.f.$F, {});
  },
  Kia: function (c) {
    this.view.pia(c.content);
  }
});