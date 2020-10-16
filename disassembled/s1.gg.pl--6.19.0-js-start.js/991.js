Ext.define(E.f.layout.gd.rC, {
  extend: C.f.pd,
  tpl: m,
  data: {},
  xk: m,
  tsa: m,
  Kp: m,
  FM: m,
  xca: 300,
  componentCls: "d-none",
  ka: {
    ".search-input": t(),
    ".search-btn": t(),
    ".search-cancel-btn": function () {
      this.MI();
    }
  },
  constructor: function (c) {
    c = c || {};
    this.callParent([c]);
    this.tpl = c.tpl || C.k().da.ma("contacts-list-search");
    this.addEvents("search", "stopsearch");
  },
  initComponent: function () {
    this.callParent();
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.xk && this.xk.un("keyup", this.M0, this);
    this.el && this.el.un("click", this.Ia, this);
    this.un("afterrender", this.na, this);
  },
  na: function () {
    this.el.on("click", this.Ia, this);
    this.xk = this.el.select(".search-input").first();
    this.xk.on("keyup", this.M0, this);
    this.tsa = this.el.select(".search-btn").first();
    this.Kp = this.el.select(".search-cancel-btn").first();
  },
  Ia: function (c) {
    c.preventDefault();

    for (var f in this.ka) {
      m !== c.getTarget(f) && this.ka[f].call(this);
    }
  },
  MI: function () {
    this.UZ();
    this.Kp && this.Kp.addCls("d-none");
  },
  M0: function (c) {
    c.keyCode == 27 ? this.MI() : (this.Kp && (this.xk.dom.value !== "" ? this.Kp.removeCls("d-none") : this.Kp.addCls("d-none")), this.FM = this.FM || new Ext.util.DelayedTask(this.fka, this, [this.xk.dom.value]), this.FM.delay(this.xca, m, m, [this.xk.dom.value]));
  },
  fka: function (c) {
    this.fireEvent("search", this, c);
  },
  Gga: function () {
    this.xk.dom.value = "";
  },
  UZ: function () {
    this.Gga();
    this.fireEvent("stopsearch", this);
  }
});