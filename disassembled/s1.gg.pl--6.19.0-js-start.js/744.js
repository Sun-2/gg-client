Ext.define(C.core.mixins.Cw, {
  initComponent: function () {
    this.initEvents();
  },
  initEvents: function () {
    this.addEvents("added", "suspended", "resumed", "removed");
  },
  onAdd: function () {
    this.fireEvent("added", this);
  },
  onRemove: function () {
    this.fireEvent("removed", this);
  },
  onSuspend: function () {
    this.fireEvent("suspended", this);
  },
  dDa: function () {
    this.fireEvent("resumed", this);
  }
});