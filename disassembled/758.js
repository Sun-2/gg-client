Ext.define(C.core.Yb.zn, {
  mixins: {
    observable: "Ext.util.Observable"
  },
  store: m,
  constructor: function (c) {
    this.mixins.observable.constructor.call(this, c);
  }
});