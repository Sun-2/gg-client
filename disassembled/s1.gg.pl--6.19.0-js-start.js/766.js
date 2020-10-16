Ext.define(C.core.Yb.$D, {
  extend: C.core.Yb.zn,
  He: m,
  Qt: m,
  hm: m,
  constructor: function (c) {
    c = c || {};
    this.He = [];
    this.hm = c.hm ? c.hm : [];
    this.Qt = c.Qt ? c.Qt : 5;
    this.callParent(arguments);
  },
  add: function (c, h) {
    var f = 0;

    if (this.hm.indexOf(h) === -1) {
      this.He.length === this.Qt && this.He.shift(), f = this.He.length === 0 || this.He[this.He.length - 1].Vm !== h ? this.He.push({
        Vm: h
      }) - 1 : this.He.length - 1, this.He[f].token = c, this.fireEvent("changed", this);
    }
  },
  V3: function (c) {
    c && (this.He.pop(), this.fireEvent("changed", this));

    if (this.He.length) {
      return this.He[this.He.length - 1].token;
    }

    return m;
  },
  getCount: function () {
    return this.He.length;
  },
  pop: function () {
    return this.He.pop();
  }
});