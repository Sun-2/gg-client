Ext.define(E.controllers.dG, {
  extend: E.controllers.nc,
  name: "roulette-others-controller",
  Gh: "roulette",
  tn: 200,
  mixins: {
    ea: C.core.mixins.kb
  },
  init: function () {
    this.callParent(arguments);
    C.k().fa.on("datachanged", this.Hia, this);
  },
  getUserData: function () {
    var c = C.k().fa,
        f = {
      uin: C.k().fa.get("uin"),
      size: this.tn,
      gender: c.Qj() === 1 ? "male" : "female"
    };
    return {
      gender: c.Qj(),
      label: c.getDisplayName(),
      age: c.data.age,
      city: c.data.city,
      hasAvatar: !1,
      avatarUrl: C.k().zc(f),
      statusDescription: c.data.lua
    };
  },
  Hia: function () {
    this.view.$va(this.getUserData());
  },
  execute: function () {
    C.k().mf(C.k().config.ab.ph);
    C.k().fireEvent("roulette:other:load");
    this.callParent(arguments);
  },
  kd: function () {
    this.callParent(arguments);
    this.view = Ext.create(E.f.cG, {
      data: this.getUserData()
    });
  }
});