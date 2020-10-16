Ext.define(C.f.Rk, {
  extend: "Ext.view.View",
  cls: "base-dataview",
  border: !1,
  Kfa: !1,
  onUpdate: function () {
    if (this.Kfa) {
      return !0;
    }

    this.callParent(arguments);
  }
});