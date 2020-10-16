Ext.define(E.f.windows.su, {
  extend: C.f.windows.cc,
  da: m,
  Oi: m,
  cls: "avatar-change-wnd",
  constructor: function (c) {
    c = c || {};
    c.Gb = " ";
    c.content = " ";
    c.Ab = !1;
    c.cls = this.cls;
    this.da = c.da || C.k().da;
    this.callParent([c]);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent();
  },
  destroy: function () {
    this.nva();
    this.un("afterrender", this.na, this);
    this.callParent();
  },
  na: function () {
    this.Oi = Ext.create(C.f.Us.kE, {
      renderTo: this.el.child(".content")
    });
    this.center();
    this.rfa();
  },
  rfa: function () {
    this.Oi.on("uploadsuccess", this.Nx, this);
    this.Oi.on("uploadcancel", this.X1, this);
    this.Oi.on("uploadend", this.Y1, this);
  },
  nva: function () {
    this.Oi.un("uploadsuccess", this.Nx, this);
    this.Oi.un("uploadcancel", this.X1, this);
    this.Oi.un("uploadend", this.Y1, this);
  },
  X1: function () {
    this.Xa();
  },
  Y1: t(),
  Nx: t(),
  Bx: function () {
    this.Xa();
  },
  Ax: function () {
    this.Xa();
  }
});