Ext.define(C.f.Jb, {
  extend: "Ext.Container",
  cls: "base-container",
  border: !1,
  initComponent: function () {
    this.U7(this.Ph());
    this.callParent(arguments);
  },
  refresh: function () {
    this.removeAll();
    this.U7(this.Ph());
    this.doAutoRender();
  },
  U7: function (c) {
    if (c) {
      this.items = this.items || [], this.rendered ? Ext.each(c, function (e) {
        this.add(e);
      }, this) : this.items = this.items.concat(c);
    }
  },
  Ph: Ext.emptyFn
});