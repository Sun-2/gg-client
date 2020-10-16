Ext.define(C.core.ju.tB, {
  extend: "Ext.Container",
  cls: "base-viewport",
  layout: "card",
  activeItem: 0,
  Yda: function (c) {
    this.add(c);
    this.setActiveItem(c);
  },
  getActiveItem: function () {
    return this.layout.getActiveItem();
  },
  setActiveItem: function (c) {
    this.layout.setActiveItem(c);
  }
});