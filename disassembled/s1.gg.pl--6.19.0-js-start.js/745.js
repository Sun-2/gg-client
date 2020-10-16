Ext.define(C.core.mixins.kb, {
  eo: m,
  ea: m,
  constructor: function (c) {
    c = c || {};
    this.ea = c.ea || this.ea;
    this.Gna();
    this.addBehaviors();
  },
  destroy: function () {
    this.h7();
  },
  Gna: function () {
    if (this.ea.length) {
      this.eo = {};
    }
  },
  addBehavior: function (c) {
    this.eo[c.$className] && j("cannot add behavior: behavior already added" + c.$className);
    this.eo[c.$className] = c;
    c.onAdd(this);
    return c;
  },
  addBehaviors: function (c) {
    for (var c = c || this.ea, n = 0, l = c.length, f = c[n]; n < l; n++, f = c[n]) {
      this.addBehavior(Ext.create(f[0], f[1] || {}));
    }
  },
  removeBehavior: function (c) {
    this.eo[c.$className] && (c.onRemove(), delete this.eo[c.$className]);
    return c;
  },
  h7: function () {
    Ext.iterate(this.eo, function (c, f) {
      this.removeBehavior(f);
    }, this);
  }
});