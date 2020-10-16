Ext.define(E.f.profile.$h, {
  extend: C.f.Jb,
  mixins: {
    Qd: E.core.mixins.ei
  },
  Od: {},
  record: m,
  Bd: m,
  ka: m,
  kk: m,
  $ea: !0,
  constructor: function (c) {
    c.data = c.data || {};
    this.addEvents("ready");
    this.ka = this.ka || {};
    this.kk = this.kk || {};

    if (typeof this.tpl == "string") {
      this.tpl = C.k().da.ma(this.tpl);
    }

    this.callParent(arguments);
    this.mixins.Qd.constructor.call(this);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
    this.mixins.Qd.initComponent.call(this);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.el.un("click", this.Ia, this);
    this.el.un("mouseout", this.Fx, this);
    this.el.un("mouseover", this.Fx, this);
    this.record.un("datachanged", this.ZL, this);
    this.mixins.Qd.destroy.call(this);
    this.callParent();
  },
  na: function () {
    this.el.on("click", this.Ia, this);
    this.el.on("mouseout", this.Fx, this);
    this.el.on("mouseover", this.Fx, this);
  },
  Ia: function (c, h) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        c.preventDefault();
        this.ka[f].call(this, c, h);
        break;
      }
    }
  },
  Fx: function (c, h) {
    for (var f in this.kk) {
      if (m !== c.getTarget(f)) {
        c.preventDefault();
        this.kk[f].call(this, c, h);
        break;
      }
    }
  },
  ro: function (c) {
    this.ka = Ext.Object.merge(this.ka, c);
  },
  uea: function (c) {
    this.kk = Ext.Object.merge(this.kk, c);
  },
  Sd: function (c, h, f) {
    if (this.record !== c || this.Bd !== f) {
      this.record && this.record.un("datachanged", this.ZL, this), this.ZL = this.tma(h, f), c.on("datachanged", this.ZL, this), this.data = {}, this.record = c, this.Bd = f, this.hc(c, h, f), this.$ea && this.ready();
    }
  },
  Zg: function () {
    j(Error(this.$className + "::refreshRequested() method is abstract. Define your own implementation in " + this.$className));
  },
  hc: function () {
    j(Error(this.$className + "::updateData() method is abstract. Define your own implementation in " + this.$className));
  },
  ek: function (c) {
    return (c = c || this.record) && c.get("uin") == C.k().fa.get("uin");
  },
  uoa: function () {
    var c = this.Od;
    return this.record.get("protoInfo").bot || c && c.properties && c.properties._content && !!c.properties._content.bot || !1;
  },
  refresh: function () {
    this.el && this.tpl && this.tpl.overwrite(this.el, this.data);
  },
  ready: function () {
    this.fireEvent("ready");
  },
  tma: function (c, f) {
    return function (e, b) {
      typeof b === "object" ? this.hc(e, c, f, b) : this.$t(e, c, f, b);
    };
  },
  $t: t()
});