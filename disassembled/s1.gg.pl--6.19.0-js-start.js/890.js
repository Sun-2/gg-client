Ext.define(E.f.eG, {
  extend: C.f.Jb,
  mixins: {
    Qd: E.core.mixins.ei,
    ka: C.core.mixins.Td
  },
  ka: {
    ".btn-edit-profile": function () {
      C.Ca("settings/profile");
    },
    ".btn-back": function () {
      C.Ca("roulette");
    }
  },
  Q9: 16,
  P9: 120,
  qaa: {
    female: 1,
    male: 2
  },
  cls: "roulette-container",
  constructor: function () {
    this.y8 = this.Fma();
    this.data = {
      btnSpin: this.y8
    };
    this.addEvents("afterexecute");
    this.tpl = C.k().da.ma("roulette-search-options-container");

    this.ka["." + this.y8] = function (c) {
      this.gk(c) && C.Ca("roulette", {
        x8: !0
      });
    };

    this.callParent(arguments);
    this.mixins.Qd.constructor.call(this);
    this.mixins.ka.constructor.call(this);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.mixins.Qd.initComponent.call(this);
    this.on("afterrender", this.na, this);
  },
  fb: function () {
    this.Xw.on("change", this.a0, this);
    this.n3.on("change", this.l1, this);
  },
  eb: function () {
    this.n3.un("change", this.l1, this);
    this.Xw.un("change", this.a0, this);
  },
  na: function () {
    this.n3 = this.el.select(".options-gender-radio");
    this.Jea = this.el.select(".panel-age .age-selection").first();
    this.Xw = Ext.create(E.Kd.gG, {
      renderTo: this.Jea,
      Dr: [this.Q9, this.P9]
    });
    C.k().ZM(this.gK());
    this.fb();
  },
  a0: function () {
    C.k().ZM(this.gK());
  },
  l1: function () {
    C.k().ZM(this.gK());
  },
  setClass: function (c, h, f) {
    f ? c.addCls(h) : c.removeCls(h);
  },
  Fma: function () {
    return "btn-" + Math.random().toString(36).substring(2);
  },
  gK: function () {
    var c = {};

    if (this.Qj() !== m) {
      c.gender = this.Qj();
    }

    if (this.Xw) {
      var f = this.Xw.Dr;
      c.vZ = [f[0] + "," + f[1]];
    }

    return c;
  },
  Qj: function () {
    var c = this.el.dom.querySelector("input[name=selection]:checked").value;

    if (c !== "any") {
      return this.qaa[c];
    }

    return m;
  },
  gk: function (c) {
    (c = c.browserEvent.isTrusted) || this.Jt();
    return c;
  },
  Jt: function () {
    C.k().et.send({
      type: "Untrusted event roullete",
      uin: C.k().fa.get("uin"),
      userAgent: navigator.userAgent || navigator.vendor
    });
  },
  destroy: function () {
    this.eb();
    this.callParent();
  }
});