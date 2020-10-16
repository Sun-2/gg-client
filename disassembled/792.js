Ext.define(E.core.mixins.ei, {
  constructor: t(),
  initComponent: function () {
    this.on("activate", t(), this);
  }
});