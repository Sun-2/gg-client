Ext.define(C.f.windows.cc, {
  extend: "Ext.Component",
  name: "base-window",
  id: "sr-base-window",
  floating: !0,
  autoRender: !0,
  hidden: !0,
  da: m,
  tpl: m,
  l2: m,
  Xl: m,
  k2: "sr-window-cover",
  oN: !0,
  statics: {
    instances: []
  },
  constructor: function (c) {
    c = c || {};
    !(typeof c.oN !== "undefined" ? c.oN : this.oN) && this.statics().instances.length > 0 && j(Error("only one non-stacking Window can be visible at the same time"));

    if (this.statics().instances.length > 0) {
      this.autoRender = !1;
    }

    this.statics().instances.push(this);
    Ext.Object.getSize(c) || j(Error("config must have template property at least"));
    c.Gb || j(Error("template property must be given"));
    this.cls = c.cls || m;
    this.width = c.width || m;
    this.width = c.width || m;
    this.jh = {};
    Ext.apply(this.jh, {
      Gb: c.Gb,
      Ab: typeof c.Ab !== "undefined" ? c.Ab : !0,
      buttons: c.buttons || [],
      Sb: c.Sb || !1
    });
    this.da = c.da || C.k().da;
    this.tpl = this.da.ma("base-window");
    this.l2 = this.da.ma("window-cover");
    this.callParent(arguments);
  },
  initComponent: function () {
    this.callParent(arguments);
    this.on("activate", this.Lo, this);
    this.on("deactivate", this.yi, this);
    this.autoRender && this.r8();
  },
  destroy: function () {
    this.yi();

    for (var c = this.statics().instances, h = 0, f = c.length; h < f; h++) {
      if (c[h] === this) {
        c.splice(h, 1);
        break;
      }
    }

    this.un("activate", this.Lo, this);
    this.un("deactivate", this.yi, this);
    this.Xl !== m && this.Xl.remove();
    this.callParent(arguments);

    if (c[0]) {
      c[0].autoRender = !0, c[0].r8();
    }
  },
  Lo: function () {
    if (this.jh.Ab) {
      this.el.select(".close").on("click", this.FI, this);
    }

    this.jh.buttons.length && Ext.Array.each(this.jh.buttons, function (c) {
      this.el.select(c.selector).on("click", function (b) {
        b.preventDefault();
        !this.voa(c) && typeof c.fn === "function" && (this.Xoa(), c.fn.call(c.scope));
        (typeof c.Ib !== "undefined" ? c.Ib : 1) && this.Xa();
      }, this);
    }, this);
    this.width !== m && this.setWidth(this.width);
    Ext.fly(window).on("keyup", this.Ol, this);
    Ext.fly(window).on("resize", this.r1, this);
  },
  yi: function () {
    this.jh.Ab && this.el.select(".close").un("click", this.FI, this);
    Ext.fly(window).un("keyup", this.Ol, this);
    Ext.fly(window).un("resize", this.r1, this);
  },
  FI: function (c) {
    c.preventDefault();
    this.Xa();
  },
  r1: function () {
    this.s7 && clearTimeout(this.s7);
    this.s7 = setTimeout(function () {
      this.center();
    }.bind(this), 100);
  },
  Ita: function () {
    this.Xl = Ext.get(this.k2);
    this.Xl === m ? (this.l2.append(Ext.getBody(), {}), this.Xl = Ext.get(this.k2), this.Xl.setStyle({
      "z-index": ~~this.el.getStyle("z-index") - 1
    })) : this.Xl.show();
  },
  r8: function () {
    this.el ? this.tpl.overwrite(this.el, this.jh) : this.update(this.tpl.apply(this.jh));
    this.show();
    this.Ita();
    this.center();
  },
  center: function () {
    var c = function () {
      var g = window,
          h = "inner";
      "innerWidth" in window || (h = "client", g = document.documentElement || document.body);
      Ext.fly(document.body).getScroll();
      return {
        width: g[h + "Width"],
        height: g[h + "Height"]
      };
    }(),
        n = this.el.getSize(),
        l = 0,
        f = 0,
        f = n.height > c.height ? 10 : Math.round((c.height - n.height) / 2),
        l = n.width > c.width ? 10 : Math.round((c.width - n.width) / 2);

    this.el.setStyle({
      position: "fixed",
      left: l + "px",
      top: f + "px"
    });
  },
  Xa: function () {
    this.destroy();
  },
  Xoa: function () {
    this.jh.Sb && Ext.Array.each(this.jh.buttons, function (c) {
      Ext.get(this.el.select(c.selector).elements[0]).addCls("disabled");
    }, this);
  },
  OEa: function () {
    this.jh.Sb && Ext.Array.each(this.jh.buttons, function (c) {
      Ext.get(this.el.select(c.selector).elements[0]).removeCls("disabled");
    }, this);
  },
  voa: function (c) {
    return Ext.get(this.el.select(c.selector).elements[0]).hasCls("disabled") ? !0 : !1;
  },
  Ol: function (c) {
    c.keyCode == 27 && this.destroy();
  }
});