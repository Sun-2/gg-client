Ext.define(E.controllers.aD, {
  extend: E.controllers.nc,
  mixins: {
    ea: C.core.mixins.kb
  },
  pm: pm,
  initConfig: {
    view: E.f.app.$C
  },
  z9: m,
  init: function () {
    this.callParent(arguments);
    this.ea = this.ea || [];
    this.name = this.name || m;
    var c = {};

    if (!c.address) {
      c.address = this.q3(this.name);
    }

    Ext.apply(this, c);
    this.mixins.ea.constructor.call(this, c);
    this.addEvents("post", "bind", "unbind", "doaction", "enter", "leave");
  },
  kd: function () {
    if (!Ext.isEmpty(this.initConfig.view)) {
      this.view = Ext.create(this.initConfig.view, this.z9);
    }
  },
  destroy: function () {
    this.callParent(arguments);
    this.h7();
  },
  execute: function (c) {
    var f = this.nma(this.address, c);
    Ext.apply(this, {
      address: f || ""
    });
    this.callParent(arguments);
    C.k().mf(C.k().config.ab.pI);
    this.bta(this.address);
    this.fireEvent("doaction", c.params, c.token);
    this.fireEvent("enter", this);
  },
  rg: function () {
    this.callParent();
    this.fireEvent("leave", this);
  },
  q3: function (c) {
    return C.k().config.applications[c];
  },
  nma: function (c, f) {
    c && (c = c.replace(/<([^>]+)>/g, function (e, o) {
      var g;

      if (g = o.match(/^([^.]+)(\.(.*))?$/)) {
        var p = g[1];
        g = g[3] || "";

        if (f[p]) {
          return f[p] + g;
        }
      }

      return "";
    }));
    return c;
  },
  bta: function (c) {
    c.split("/")[2] != this.view.Ema().split("/")[2] && this.view.c8(c);
  },
  jm: function () {
    return (this.address || this.view.Ji().src).match(/^https?:\/\/[^\?#\/]+/)[0];
  },
  post: function (c, h, f) {
    f = f || {
      pt: t(),
      Si: t()
    };
    pm({
      target: this.view.Ji().contentWindow,
      type: [this.name, c].join("_"),
      data: h,
      error: f.pt,
      success: f.Si,
      origin: this.jm()
    });
  },
  bind: function (c, f) {
    this.pm.bind([this.name, c].join("_"), f, this.jm());
    this.fireEvent.apply(this, ["bind"].concat(arguments));
  },
  unbind: function (c, f) {
    this.pm.unbind([this.name, c].join("_"), f);
    this.fireEvent.apply(this, ["unbind"].concat(arguments));
  }
});