Ext.define(C.core.ye.rB, {
  name: k,
  yqa: m,
  qa: m,
  be: m,
  Iy: m,
  mixins: {
    observable: "Ext.util.Observable"
  },
  constructor: function (c) {
    Ext.apply(this, c || {});
    this.mixins.observable.constructor.call(this, c);
    this.Ooa = !1;
  },
  jL: function () {
    this.j6();
  },
  j6: function () {
    this.onLaunch.call(this.scope || this);
    this.Ooa = !0;
    this.qa = this.KK();
    this.Iy = Ext.create(C.core.Yb.$D, {
      hm: E.config.hm,
      Qt: 10
    });
    this.be = this.I4();
    this.yqa = this.Yna();
    this.qa.on("errordisplay", this.s0, this);
  },
  onLaunch: Ext.emptyFn,
  I4: function () {
    var c = Ext.create(C.core.controllers.nc);
    c.init();
    return c;
  },
  Yna: function () {
    var c = Ext.create(C.core.ye.NF, {
      HL: this.O6.bind(this)
    });
    c.on("dispatch", this.O6, this);
    return c;
  },
  KK: function () {
    var c = Ext.getDom("sr-system-messages-container");
    return Ext.create(C.f.ua.wa, {
      renderTo: c
    });
  },
  O6: function (c) {
    this.be.execute({
      token: c
    });
  },
  s0: t()
});