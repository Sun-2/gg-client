Ext.define(E.models.Tn, {
  extend: "Ext.data.Model",
  fields: [],
  action: m,
  iZ: m,
  GK: function (c, f) {
    this.action = c;
    this.iZ = f;
    return this;
  },
  ms: function (c) {
    this.action && (c = [this].concat(c || []), this.action.apply(this.iZ || this, c));
  }
});