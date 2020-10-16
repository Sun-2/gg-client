Ext.define(E.f.windows.QC, {
  extend: C.f.windows.cc,
  da: m,
  mixins: {
    ka: C.core.mixins.Td
  },
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.tpl = '<div class="title">' + E.lang.uR + "</div><p>" + E.lang.tR + '</p><div class="buttons"><div class="btn-ok blue uiBtn wide"><label><input type="button" value="' + E.lang.Eu + '"/></label></div></div>';
    this.callParent([{
      Gb: this.tpl,
      Ab: !1,
      cls: "edisc-info-window",
      buttons: [{
        selector: "div.btn-ok",
        fn: t(),
        scope: this,
        Ib: !0
      }]
    }]);
  }
});