Ext.define(E.f.qs.nD, {
  extend: C.f.Rk,
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.tpl = this.da.ma("upload-items");
    this.itemSelector = "div.upload-item";
    this.callParent([c]);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.on("afterrender", this.na, this);
    this.on("refresh", this.Kg, this);
    this.addEvents("actioncloseitem");
  },
  destroy: function () {
    this.un("itemclick", this.Sr, this);
    this.un("afterrender", this.na, this);
    this.un("refresh", this.Kg, this);
    this.callParent(arguments);
  },
  na: function () {
    this.on("itemclick", this.Sr, this);
  },
  Sr: function (c, p, o, n, f) {
    f.preventDefault();
    f.getTarget(".upload-close") !== m && this.fireEvent("actioncloseitem", {
      record: p
    });
  },
  Kg: function () {
    C.k().Lc.hide().show();
  }
});