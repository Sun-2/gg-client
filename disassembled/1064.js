Ext.define(E.controllers.uG, {
  extend: E.controllers.nc,
  name: "search",
  Ava: "unknownuser",
  Gh: "search",
  initConfig: {
    view: E.f.search.tG
  },
  kd: function () {
    if (!Ext.isEmpty(this.initConfig.view)) {
      this.view = Ext.create(this.initConfig.view, {});
    }

    this.view.on("redirect", this.Kz, this);
  },
  Kz: function (c) {
    C.Ca(c.Iea || "");
  },
  execute: function (c) {
    this.callParent(arguments);
    C.k().mf(C.k().config.ab.ph);
    this.HH(c);
    c.token != "unknownuser" && (c.state && c.state.contact && c.state.contact.GM.length > 0 ? (this.view.$z(c.state.contact.GM), this.view.aq(0)) : this.view.$z(c.token));
    C.k().fireEvent("people:load");
  },
  rg: function () {
    this.view.uM(1);
    this.callParent(arguments);
  },
  HH: function (c) {
    this.view.reset();
    this.view.on("startchat", this.J1, this);
    this.view.on("searchcontactadded", this.Rl, this);
    c = c.token;
    c.toString().search(/^-?[0-9]+$/) == 0 === !0 ? this.view.Gea(c) : c == this.Ava ? this.view.JN("show") : this.view.JN("hide");
  },
  RN: function () {
    this.view.un("startchat", this.J1, this);
  },
  destroy: function () {
    this.RN();
    this.callParent(arguments);
  },
  J1: function (c, h, f) {
    C.k().fc(f);
  },
  Rl: function (c, f) {
    C.k().Ja.fireEvent("searchcontactadded", f);
  }
});