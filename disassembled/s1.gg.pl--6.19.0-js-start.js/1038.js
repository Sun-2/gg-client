Ext.define(E.f.layout.Ga.YB, {
  extend: C.f.pd,
  cls: "left button",
  BL: ["menuclicked", "memberchanged"],
  te: m,
  qpa: m,
  Wy: !1,
  mixins: {
    ea: C.core.mixins.kb
  },
  ka: {
    ".conf-membr-btn": function (c) {
      this.fireEvent("menuclicked", this, {
        e: c,
        t: c.getTarget()
      });
    },
    ".x-toolbar-item": function () {
      this.KI(this.te.get("uin"));
    }
  },
  constructor: function (c) {
    this.da = c.da || C.k().da;
    this.tpl = this.da.ma("conference-toolbar-button");
    this.te = c.data;
    c.data = c.data.data;
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd
    }]];
    this.callParent([c]);
    this.addEvents.apply(this, this.BL);
  },
  initComponent: function () {
    this.mixins.ea.constructor.call(this);
    this.te.on("datachanged", this.Hd, this);
    this.callParent();
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.el.un("click", this.Ia, this);
    this.te.un("datachanged", this.Hd, this);
    this.un("afterrender", this.na, this);
    this.callParent();
  },
  Hd: function (c, f) {
    f === "ShowName" && this.fireEvent("memberchanged");
  },
  na: function () {
    this.el.on("click", this.Ia, this);
    this.qpa = this.el.select(".conf-membr-btn").first();
  },
  Ia: function (c) {
    c.preventDefault();

    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        this.ka[f].call(this, c);
        break;
      }
    }
  },
  KI: function (c) {
    C.k().fa.get("uin") == c ? C.Ca("profile") : C.Ca("profile/" + c);
  },
  Mc: function () {
    var c = this.getEl().query(".user-status")[0],
        f = this.getEl().query(".name")[0];
    return {
      uin: this.te.get("uin"),
      zb: [{
        status: c,
        name: f
      }]
    };
  },
  vd: t()
});