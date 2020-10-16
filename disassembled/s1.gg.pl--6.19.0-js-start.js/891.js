Ext.define(E.f.app.mB, {
  extend: "Ext.Component",
  name: "sr-app-component",
  renderTpl: '<div id="render-into"></div>',
  autoEl: {
    tag: "iframe",
    "class": "sr-app-frame",
    src: "about:blank",
    height: "584px",
    width: "100%",
    Pya: "true",
    frameborder: "no",
    scrolling: "auto",
    border: "0"
  },
  autoHeight: !1,
  minHeight: 584,
  maxHeight: 0,
  constructor: function (c) {
    c = c || {};
    Ext.apply(this, c);
    this.callParent(arguments);
    this.on("afterrender", this.na, this);
  },
  initRenderTpl: function () {
    return Ext.isIE ? !1 : this.callParent();
  },
  initComponent: function () {
    this.callParent(arguments);
  },
  Ji: function () {
    return this.el.dom;
  },
  Ema: function () {
    return this.Ji().src;
  },
  c8: function (c) {
    typeof c !== "string" && j("src must be a string");
    var f = c.split("?"),
        c = f.shift(),
        f = f.join("?"),
        c = [c, f].join("?"),
        f = this.Ji();

    if (f.src !== c) {
      f.src = c;
    }
  },
  setHeight: function (c) {
    this.el.setHeight(c);
  },
  mza: function () {
    this.Ji().src = "about:blank";
  },
  na: function () {
    if (this.autoHeight) {
      var c = function () {
        var e = Ext.Element.getViewportHeight() - Ext.getBody().getHeight(!0) - Ext.get("sr-footer").getMargin("b") - 2,
            f = this.getHeight() + e;

        if (this.minHeight && f < this.minHeight) {
          f = this.minHeight;
        }

        if (this.maxHeight && f > this.maxHeight) {
          f = this.maxHeight;
        }

        e != 0 && this.setHeight(f);
      }.bind(this);

      setTimeout(c, 10);
      Ext.EventManager.onWindowResize(c);
    }
  }
});