Ext.define(E.f.windows.bG, {
  extend: C.f.windows.cc,
  da: m,
  mixins: {
    ka: C.core.mixins.Td
  },
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.tpl = '<div class="roulette-window-title">' + E.lang.UU + "</div><p>" + E.lang.SU + '</p><div class="roulette-buttons"><div class="btn-goto-settings blue uiBtn wide"><label><input type="button" value="' + E.lang.TU + '"/></label></div><div class="btn-cancel stripped uiBtn wide"><label><input type="button" value="' + E.lang.RU + '"/></label></div></div>';
    this.callParent([{
      Gb: this.tpl,
      Ab: !1,
      cls: "roulette-window",
      buttons: [{
        selector: "div.btn-goto-settings",
        fn: function () {
          this.Xa();
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