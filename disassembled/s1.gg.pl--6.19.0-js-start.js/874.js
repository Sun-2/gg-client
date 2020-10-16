Ext.define(E.f.layout.va.IG, {
  extend: "Ext.Component",
  Rh: m,
  Xi: m,
  handle: m,
  autoEl: {
    tag: "div",
    cls: "slider"
  },
  K5: 0,
  kt: 100,
  value: 0,
  bua: !0,
  Mga: !0,
  mN: !1,
  Bpa: !0,
  initComponent: function () {
    this.addEvents("slidestart", "slide", "slideend", "change");
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.lva();
    delete this.Rh;
    delete this.Xi;
    delete this.handle;
    this.callParent(arguments);
  },
  na: function () {
    this.Rh = Ext.get(document.createElement("div"));
    this.Xi = Ext.get(document.createElement("div"));
    this.handle = Ext.get(document.createElement("div"));
    this.Rh.addCls("slider-bg");
    this.Xi.addCls("slider-fg");
    this.handle.addCls("slider-handle");
    this.Rh.setStyle("background-image", "url(" + C.ca.Da.yh("/images/musicPlayer/slider-bg.png") + ")");
    this.Xi.setStyle("background-image", "url(" + C.ca.Da.yh("/images/musicPlayer/slider-fg.png") + ")");
    this.handle.appendTo(this.Xi);
    this.Xi.appendTo(this.Rh);
    this.Rh.appendTo(this.el);
    this.Rf(this.value);
    this.pfa();
  },
  pfa: function () {
    this.Rh.on("click", this.ed, this);
    this.handle.on("mousedown", this.T0, this);
    this.mon(this.getEl(), "mousewheel", this.Gx, this);
  },
  lva: function () {
    this.Rh.un("click", this.ed, this);
    this.handle.un("mousedown", this.T0, this);
    this.mun(this.getEl(), "mousewheel", this.Gx, this);
  },
  Rf: function (c, h) {
    var f = this.value;

    if (h) {
      c > 100 && (c = 100), c < 0 && (c = 0), this.value = this.kt * (c / 100), this.Xi.setStyle("width", c + "%");
    } else {
      if (c > this.kt) {
        c = this.kt;
      }

      if (c < this.K5) {
        c = this.K5;
      }

      this.value = c;
      this.Xi.setStyle("width", Math.round(c / this.kt * 100) + "%");
    }

    f != this.value && this.fireEvent("change", this.value, f);
  },
  getValue: function (c) {
    return c ? this.value / this.kt * 100 : this.value;
  },
  wCa: x("qA"),
  Gx: function (c) {
    if (this.Bpa) {
      var h = this.getValue(!0),
          f = c.getWheelDelta();
      h += (c.detail || 1) * 4 * f;
      this.Rf(h, !0);
      c.stopEvent();
      return !1;
    }
  },
  ed: function (c) {
    if (this.Mga) {
      var h = this.Rh,
          f = h.getX(),
          h = h.getWidth(!0);
      this.Rf((c.getX() - f) / h * 100, !0);
    }
  },
  T0: function (c) {
    if (this.bua) {
      this.epa(), this.kz = {
        x: c.getX(),
        width: this.Xi.getWidth(!0)
      }, Ext.getBody().on("mousemove", this.V0, this), Ext.getBody().on("mouseup", this.Y0, this), this.eZ = this.value;
    }
  },
  Y0: function () {
    if (this.kz !== !1) {
      this.kz = !1, this.dpa(), Ext.getBody().un("mousemove", this.V0, this), Ext.getBody().un("mouseup", this.Y0, this), this.removeCls("sliding"), this.qA && (this.mN && this.fireEvent("change", this.value, this.eZ), this.fireEvent("slideend", this.value)), delete this.eZ;
    }

    delete this.qA;
  },
  V0: function (c) {
    this.qA ? this.fireEvent("slide", this.value) : (this.addCls("sliding"), this.fireEvent("slidestart", this.value), this.qA = !0);
    var f = this.Rh.getWidth(!0),
        f = (this.kz.width + (c.getX() - this.kz.x)) / f * 100;
    this.mN && this.suspendEvents();
    this.Rf(f, !0);
    this.mN && this.resumeEvents();
    c.stopEvent();
    return !1;
  },
  epa: function () {
    Ext.getBody().unselectable();
  },
  dpa: function () {
    var c = Ext.getBody();
    c.dom.unselectable = "off";
    c.on("selectstart", function (e) {
      e.stopPropagation();
      return !0;
    });
    c.applyStyles("-moz-user-select: text; -khtml-user-select: text;");
    c.removeCls(Ext.baseCSSPrefix + "unselectable");
    return c;
  }
});