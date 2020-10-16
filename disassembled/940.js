Ext.define(E.ea.pf, {
  extend: C.core.ea.Qk,
  name: m,
  constructor: function (c) {
    Ext.apply(this, c);
    this.listeners = c.listeners || k;
    this.Ic = {};
    this.callParent(arguments);
  },
  onAdd: function (c) {
    !Ext.isObject(this.owner) && c.events.addbehavior && c.events.removebehavior && j("owner is not an proper object");
    this.callParent(arguments);
  },
  onRemove: function () {
    Ext.iterate(this.Ic, function (c, f) {
      this.owner.unbind(c, f);
    }, this);
    this.callParent(arguments);
  }
});