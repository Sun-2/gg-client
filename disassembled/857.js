Ext.define(E.f.windows.jq, {
  extend: C.f.windows.cc,
  da: m,
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.tpl = c.tpl;
    this.callParent([{
      Gb: this.tpl,
      Ab: !1,
      cls: "ask-contact-dialog-wnd",
      Sb: c.Sb,
      buttons: c.buttons
    }]);
  }
});