Ext.define(C.f.windows.BO, {
  extend: C.f.windows.cc,
  da: m,
  constructor: function (c) {
    c = c || {};
    c.content || j(Error("content property must be given"));
    this.da = c.da || C.k().da;
    this.callParent([{
      Gb: this.da.ma("alert-window").apply({
        title: c.title || m,
        content: c.content
      }),
      buttons: [{
        selector: ".sr-confirm-btn",
        fn: c.fn || m,
        scope: c.scope || m
      }],
      Ab: !1
    }]);
  }
});