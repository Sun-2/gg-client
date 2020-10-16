Ext.define(C.core.ea.Qk, {
  mixins: {
    observable: "Ext.util.Observable"
  },
  owner: m,
  constructor: function (c) {
    c = c || {};
    this.mixins.observable.constructor.call(this, c);
  },
  onAdd: function (c) {
    this.owner = c;
    this.initEvents();
  },
  onRemove: function () {
    this.owner = m;
  },
  initEvents: t(),
  Ct: t()
});