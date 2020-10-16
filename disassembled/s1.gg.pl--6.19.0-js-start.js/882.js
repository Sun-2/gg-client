Ext.define(E.f.notifications.Xv, {
  extend: E.f.notifications.Yq,
  itemSelector: "li.item-body",
  ka: {
    ".invitations-list-accept-invite": function (c, n, l, f) {
      this.fireEvent("acceptinvite", c, n, l, f);
    },
    ".invitations-list-hide-invite": function (c, n, l, f) {
      this.fireEvent("hideinvite", c, n, l, f);
    },
    ".sender": function (c, n, l, f) {
      this.fireEvent("showprofile", c, n, l, f);
    }
  },
  constructor: function () {
    this.tpl = C.k().da.ma("invitations-list");
    this.Yj = C.k().da.ma("invitations-list-group");
    this.callParent(arguments);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.on("acceptinvite", this.D_, this);
    this.on("hideinvite", this.y0, this);
    this.on("showprofile", this.H1, this);
  },
  H1: function (c) {
    C.Ca("profile/" + c.get("sender").id);
  },
  D_: function (c, n, l, f) {
    f.preventDefault();
    c = c.get("sender").id;
    C.Ca("user-profile/" + c + "/accept-invitation");
  },
  Lf: function () {
    C.k().ue.view.on("userprofileready", this.Ng, this);
    C.k().events.usercontrollercreated && C.k().un("usercontrollercreated", this.Lf, this);
  },
  Ng: function () {
    var c = C.k().ue;
    c.view.fireEvent("showaddform");
    c.view.Uqa.dla = !0;

    try {
      C.k().ue.view.un("userprofileready", this.Ng, this);
    } catch (f) {}

    c.BJ();
  },
  y0: function (c, n, l, f) {
    f.preventDefault();
    E.api.Ob.Nm({
      Im: "user",
      Hm: C.k().fa.get("uin"),
      Ch: c,
      status: "hidden"
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.uS,
          timeout: 2000
        });
        c.set("status", "hidden");
      },
      scope: this
    }, {
      fn: function (e) {
        C.k().qa.sa(E.api.Ob.tf(e) || {
          msg: E.oa.eE
        });
      },
      scope: this
    });
  },
  destroy: function () {
    this.callParent(arguments);
    this.un("itemclick", this.mb, this);
    this.un("acceptinvite", this.D_, this);
    this.un("hideinvite", this.y0, this);
    this.un("showprofile", this.H1, this);
  },
  onUpdate: function (c, h) {
    var f = this.store.indexOf(h);
    c.getRange().length <= 1 ? (this.refresh(), this.fireEvent("itemupdate", h, f, k)) : this.callParent(arguments);
  }
});