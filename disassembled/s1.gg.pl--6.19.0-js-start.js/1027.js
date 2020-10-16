Ext.define(E.f.windows.wq, {
  extend: E.f.windows.su,
  da: m,
  Oi: m,
  constructor: function (c) {
    this.callParent([c]);
    this.conference = {
      conferenceId: c.conferenceId
    };
  },
  Nx: function (c, f) {
    E.api.Re.fO({
      id: this.conferenceId,
      type: "conference",
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
    this.fireEvent("changeavatarsuccess", this, this.conferenceId);
    C.k().qa.sa({
      msg: E.oa.A$,
      timeout: 2000
    });
    this.callParent(arguments);
  },
  Ax: function () {
    C.k().qa.sa({
      msg: E.oa.z$,
      timeout: 0
    });
    this.callParent(arguments);
  }
});