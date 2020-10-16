Ext.define(E.f.windows.Tv, {
  extend: E.f.windows.su,
  da: m,
  Oi: m,
  constructor: function (c) {
    this.callParent([c]);
    this.fa = c.fa || C.k().fa;
  },
  Nx: function (c, f) {
    this.callParent(arguments);
    E.api.Re.eO({
      uin: this.fa.get("uin"),
      BK: f
    }, {
      fn: this.Bx,
      scope: this
    }, {
      fn: this.Ax,
      scope: this
    });
  },
  Bx: function () {
    this.callParent(arguments);
    C.k().qa.sa({
      msg: E.oa.aca,
      timeout: 2000
    });
  },
  Ax: function () {
    this.callParent(arguments);
    C.k().qa.sa({
      msg: E.oa.$ba,
      timeout: 0
    });
  }
});