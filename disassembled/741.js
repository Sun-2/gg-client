Ext.define(C.models.Model, {
  extend: "Ext.data.Model",
  V5: !1,
  constructor: function (c, f) {
    this.editing = this.V5 = !0;
    this.callParent([c, f]);
    this.addEvents("datachanged");
    this.editing = this.V5 = !1;
  },
  set: function (c, h) {
    var f = m,
        f = Ext.isObject(c) ? Ext.clone(this.data) : Ext.isObject(this.data[c]) ? Ext.clone(this.data[c]) : this.data[c];
    this.callParent(arguments);
    !this.editing && this.fireEvent("datachanged", this, c, h, f);
    this.tN(c, h, f);
  },
  tN: function (c, h, f) {
    this.store && Ext.isString(c) && this.store instanceof C.stores.Store && this.store.dO(this, c, h, f);
  }
});