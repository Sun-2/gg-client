Ext.define(E.f.windows.PF, {
  extend: C.f.windows.cc,
  da: m,
  mixins: {
    ka: C.core.mixins.Td
  },
  eca: "slots[england-terms]",
  sT: "terms_profiling_england",
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.tpl = "<h2>" + E.lang.lU + "</h2>" + E.lang.jU + '<div class="buttons"><div class="btn-agree blue uiBtn wide"><label><input type="button" value="' + E.lang.iU + '"/></label></div><div class="btn-disagree stripped uiBtn wide"><label><input type="button" value="' + E.lang.kU + '"/></label></div></div>';
    this.callParent([{
      Gb: this.tpl,
      Ab: !1,
      cls: "england-terms-settings-window",
      buttons: [{
        selector: "div.btn-agree",
        fn: this.bna,
        scope: this,
        Ib: !0
      }, {
        selector: "div.btn-disagree",
        fn: this.gna,
        scope: this,
        Ib: !0
      }]
    }]);
  },
  bna: function () {
    this.Rz(!0);
  },
  gna: function () {
    this.Rz(!1);
  },
  Rz: function (c) {
    var h = {},
        f = {};
    f[this.sT] = "ON";
    c || (f[this.sT] = "OFF");
    h[this.eca] = Ext.JSON.encode(f);
    E.api.Pb.Zz(h, {
      fn: t(),
      scope: this
    }, {
      fn: t(),
      scope: this
    });
  }
});