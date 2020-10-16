Ext.define(E.controllers.profile.ou, {
  extend: E.controllers.nc,
  Gh: "contacts",
  la: m,
  xd: m,
  w2: m,
  view: m,
  constructor: function () {
    this.callParent(arguments);
    this.la = Ext.getStore("ContactsStore");
    this.la.on("remove", this.R1, this);
    this.la.on("update", this.Mx, this);
    this.la.on("add", this.Q1, this);
    this.Od = {};
  },
  destroy: function () {
    this.la.un("remove", this.R1, this);
    this.la.un("update", this.Mx, this);
    this.la.un("add", this.Q1, this);
  },
  execute: function (c) {
    this.callParent(arguments);
    this.yN();
    this.rs(c.params[1], function (e, f) {
      C.k().be.fd.La.lx(e.get("uin"), e.get("cid"));
      this.Sd(e, f);
    }.bind(this));
    C.k().fireEvent("profile:load");
  },
  rg: function () {
    C.k().be.fd.La.eva(this.xd.get("uin"), this.xd.get("cid"));
  },
  yN: function () {
    C.k().mf(C.k().config.ab.ph);
  },
  kd: function () {
    j(Error(this.$className + "::initView() method is abstract. Define your implementation in " + this.$className));
  },
  rs: function () {
    j(Error(this.$className + "::findContactRecord() method is abstract. Define your implementation in " + this.$className));
  },
  Sd: function (c, f) {
    c && this.xd && this.xd === c && f == this.w2 ? this.view.Zg() : (this.xd = c, this.w2 = f, c.get("type") === 1 ? E.api.dl.uy({
      uin: c.get("uin")
    }, {
      fn: function (b) {
        delete b.result.users[0].status;
        this.Od[c.get("uin")] = b.result.users[0];
        this.view.Sd(c, this.Od[c.get("uin")] || m, f);
      },
      scope: this
    }, {
      fn: function () {
        this.view.Sd(c, this.Od[c.get("uin")] || m, f);
      },
      scope: this
    }) : (this.view.Sd(c, this.Od[c.get("uin")] || m, f), this.record = c, this.Bd = f));
  },
  R1: function (c, h) {
    if (this.xd && this.xd.get("cid") == h.get("cid")) {
      if (this.xd.get("cid") == 0) {
        C.Ca("");
      } else {
        var f = c.findRecord("cid", h.get("cid"), 0, !1, !0, !0);
        f && f !== h ? this.Sd(f, !0) : this.Sd(h, !1);
      }
    }
  },
  Mx: function (c, f) {
    this.xd && (this.xd.get("cid"), f.get("cid"));
  },
  Q1: function (c, f) {
    this.xd && this.xd.get("uin") == f[0].get("uin") && this.Sd(f[0], !0);
  }
});