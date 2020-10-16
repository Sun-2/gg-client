Ext.define(E.f.windows.PD, {
  extend: C.f.windows.cc,
  da: m,
  mixins: {
    ka: C.core.mixins.Td
  },
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.tpl = '<div class="title">' + E.lang.oS + "</div><p>" + E.lang.nS + '</p><div class="buttons"><div class="btn-set blue uiBtn wide"><label><input type="button" value="' + E.lang.mS + '"/></label></div><div class="btn-cancel stripped uiBtn wide"><label><input type="button" value="' + E.lang.lS + '"/></label></div></div>';
    this.callParent([{
      Gb: this.tpl,
      Ab: !1,
      cls: "gg-widget-invalid-acl-settings-window",
      buttons: [{
        selector: "div.btn-set",
        fn: function () {
          C.Ca("settings/privacy");
        },
        scope: this,
        Ib: !0
      }, {
        selector: "div.btn-cancel",
        fn: t(),
        scope: this,
        Ib: !0
      }]
    }]);
  }
});