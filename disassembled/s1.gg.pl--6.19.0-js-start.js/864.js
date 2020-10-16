Ext.define(E.f.sb.XS, {
  extend: C.f.windows.cc,
  id: "sr-base-window",
  da: m,
  xe: m,
  sJ: !1,
  Zoa: 5000,
  constructor: function (c) {
    c = c || {};
    this.xe = c.xe;
    this.app = C.k();
    this.fa = this.app.fa;
    var f = "";
    this.sJ && (f = "disabled");
    this.callParent([{
      Gb: '<iframe id="iframe-' + this.id + '" class="default-iframe"  src="' + this.Ki() + '" frameborder="0"></iframe><div class="btns"><div class="uiBtn blue cancel-no ' + f + '"><label><input type="button" value="' + E.lang.FE + '"></label></div></div>',
      Ab: !0,
      cls: "main-advert-container",
      Sb: c.Sb,
      buttons: [{
        selector: "div.cancel-no",
        fn: function () {
          this.Xa();
        },
        scope: this,
        Ib: !1
      }]
    }]);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.sJ && Ext.defer(this.unlock, this.Zoa, this);
  },
  Ki: x("xe"),
  Ol: t(),
  unlock: function () {
    Ext.get(this.el.select(".cancel-no").elements[0]).removeCls("disabled");
  }
});