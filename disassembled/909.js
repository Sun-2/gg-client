Ext.define(E.f.windows.TC, {
  extend: C.f.windows.cc,
  da: m,
  mixins: {
    ka: C.core.mixins.Td
  },
  Pma: function () {
    return {
      part_1: E.lang.VQ,
      part_2: E.lang.WQ,
      part_3: E.lang.XQ,
      part_4: E.lang.YQ
    };
  },
  constructor: function (c) {
    var c = c || {},
        f = this.Pma()[c.xqa];
    this.da = c.da || C.k().da;
    this.tpl = "<p>" + f + '</p><div class="buttons"><div class="btn-ok blue uiBtn wide"><label><input type="button" value="' + E.lang.Eu + '"/></label></div></div>';
    this.callParent([{
      Gb: this.tpl,
      Ab: !1,
      cls: "england-terms-settings-window",
      buttons: [{
        selector: "div.btn-ok",
        fn: t(),
        scope: this,
        Ib: !0
      }]
    }]);
  }
});