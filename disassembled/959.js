Ext.define(C.f.mq, {
  extend: C.f.Rk,
  mixins: {
    widget: C.core.mixins.Cw
  },
  initComponent: function () {
    this.mixins.widget.initComponent.call(this);
    this.callParent(arguments);
  }
});