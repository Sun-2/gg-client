Ext.define(E.f.windows.HY, {
  extend: C.f.windows.cc,
  id: "start-ad-window",
  da: m,
  xe: m,
  sJ: !1,
  apa: 5000,
  ol: m,
  constructor: function (c) {
    c = c || {};
    this.ol = c.ol;
    this.callParent([{
      Gb: '<iframe id="iframe-' + this.id + '" class="default-iframe"  width="' + (this.ol.width | 0) + '" height="' + (this.ol.height | 0) + '" src="' + this.ila() + '" frameborder="0"></iframe><div class="btns"><div class="uiBtn blue cancel-no disabled"><label><input type="button" value="' + E.lang.FE + '"></label></div></div>',
      Ab: !1,
      cls: "startad-container",
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
    this.callParent();
    Ext.defer(function () {
      Ext.get(this.el.select(".cancel-no").elements[0]).removeCls("disabled");
    }, this.apa, this);
  },
  ila: function () {
    var c = {};
    Ext.Object.each(this.ol.iframeContext, function (f, b) {
      c[f] = Ext.isArray(b) || Ext.isObject(b) ? JSON.stringify(b) : b;
    });
    c.cTarget = "_blank";
    return this.ol.iframeURL + "?" + Ext.Object.toQueryString(c);
  }
});