Ext.define(E.models.Xn, {
  extend: C.models.Model,
  stores: [],
  constructor: function () {
    this.stores = [];
    this.callParent(arguments);
  },
  join: function (c) {
    this.stores.indexOf(c) < 0 && this.stores.push(c);
  },
  unjoin: function (c) {
    c = this.stores.indexOf(c);
    c > -1 && delete this.stores[c];
  },
  callStore: function (c, n) {
    for (var n = n || [], n = [this].concat(n), l = 0, f = this.stores.length; l < f; l++) {
      this.stores[l] && typeof this.stores[l][c] == "function" && this.stores[l][c].apply(this.stores[l], n);
    }
  },
  vg: function () {
    for (var c = 0, f = this.stores.length; c < f; c++) {
      this.stores[c] && this.stores[c].remove(this);
    }
  },
  tN: function (c, h, f) {
    Ext.Array.each(this.stores, function (b) {
      b && Ext.isString(c) && b instanceof C.stores.Store && b.dO(this, c, h, f);
    }, this);
  }
});