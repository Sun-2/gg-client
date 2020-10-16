Ext.define(E.controllers.AG, {
  extend: E.controllers.nc,
  name: "default",
  initConfig: {
    view: E.f.Tb.AY
  },
  kd: function () {
    if (!Ext.isEmpty(this.initConfig.view)) {
      this.view = Ext.create(this.initConfig.view, {
        df: this.df,
        volume: C.k().sm(),
        Kf: C.k().UJ()
      });
    }
  },
  constructor: function () {
    this.df = C.k().df;
  },
  execute: function (c) {
    this.ia = C.k().ia;
    this.view.Bva();
    this.ta = C.k().ta;
    this.la = this.la || Ext.getStore("ContactsStore");
    this.HH();
    this.callParent(arguments);
    C.k().mf(C.k().config.ab.Pga);
    typeof c.params[2] !== "undefined" && c.params[2] === "migration" && this.view.P7(!0);
    var f = 0;
    typeof c.params[1] !== "undefined" && (f = this.view.Zra(c.params[1]));
    this.view.w5();
    this.view.Yta(f);
    C.k().fireEvent("settings:load");
  },
  destroy: function () {
    this.RN();
    this.callParent();
  },
  Ffa: function () {
    this.la.on("contactslistchanged", this.l0, this);
  },
  vva: function () {
    this.la.un("contactslistchanged", this.l0, this);
  },
  HH: function () {
    this.view.on("widgetsubmit", this.a2, this);
    this.df.on("remove", this.G0, this);
    this.view.on("setvolume", this.Kx, this);
    this.view.on("setlastvolume", this.G1, this);
    this.ia.on("propagateaolchange", this.Jx, this);
    this.Ffa();
  },
  RN: function () {
    this.view.un("widgetsubmit", this.a2, this);
    this.df.un("remove", this.G0, this);
    this.view.un("setvolume", this.Kx, this);
    this.view.un("setlastvolume", this.G1, this);
    this.ia.un("propagateaolchange", this.Jx, this);
    this.vva();
  },
  a2: function (c, n, l, f) {
    this.ia.fireEvent(this.ia.Uk);
    this.ia.apiSet(c, n, l, f);
  },
  zza: function (c, n, l, f) {
    this.ia.R9(c, n, l, f);
  },
  G0: function (c, f) {
    this.ta.Zs(f.get("instanceID"));
  },
  Kx: function (c, f) {
    C.k().Pp(f);
    C.k().qa.sa({
      msg: E.oa.lG,
      timeout: 1500
    });
  },
  G1: function (c, f) {
    C.k().RM(f);
  },
  Jx: function (c, f) {
    this.view.Jx(f);
  },
  l0: function () {
    this.view.aO();
  }
});