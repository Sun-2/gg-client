Ext.define(E.controllers.VC, {
  extend: E.controllers.nc,
  name: "error",
  initConfig: {
    view: E.f.Tb.UC
  },
  constructor: t(),
  execute: function (c) {
    var f;
    f = c.token;
    RegExp(/^.+\/$/).test(f) && (f = f.substr(0, f.length - 1));
    this.view.token = f;
    this.view.refresh();
    f == "500" && this.view.Xea(new snakeGame.Game("error-snake-container"));
    this.callParent(arguments);
    C.k().mf(C.k().config.ab.pI);
  }
});