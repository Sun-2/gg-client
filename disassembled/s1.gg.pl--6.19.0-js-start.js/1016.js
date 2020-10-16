Ext.define(E.f.layout.Ga.Yu, {
  extend: C.f.pd,
  tg: m,
  da: m,
  nf: "",
  ka: {},
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    c.tpl = this.da.ma(this.nf);
    this.tg = c.tg;
    this.data = c.data || this.tg.pb.data;
    this.callParent([c]);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.el.un("click", this.Ia, this);
    this.un("afterrender", this.na, this);
    this.hide();
    this.callParent();
  },
  na: function () {
    this.el.on("click", this.Ia, this);
  },
  Ia: function (c, n, l) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f) && this.ka[f]) {
        this.ka[f].call(this, c, n, l);
        break;
      }
    }
  },
  show: function () {
    this.tg.ep().removeCls("d-none");
    C.k().fireEvent("elementpositionchanged", this.tg);
  },
  hide: function () {
    this.tg.ep().addCls("d-none");
    C.k().fireEvent("elementpositionchanged", this.tg);
  }
});