Ext.define(C.f.An, {
  extend: C.f.pd,
  mixins: {
    widget: C.core.mixins.Cw
  },
  name: "base-widget",
  initComponent: function () {
    this.mixins.widget.initComponent.call(this);
    this.callParent();
  }
});