Ext.define(C.f.ai, {
  extend: "Ext.Component",
  nv: 10,
  mixins: {
    ea: C.core.mixins.kb
  },
  cls: "sr-menu-popup",
  position: "tl",
  offset: m,
  content: m,
  anchor: m,
  hideOnClick: !0,
  Ss: !0,
  tK: !0,
  uK: !0,
  hideDelay: 350,
  vK: !1,
  wL: !1,
  id: m,
  statics: {
    popups: {},
    Qka: function (c) {
      if (typeof this.popups[c] !== "undefined") {
        return this.popups[c];
      }

      return !1;
    }
  },
  constructor: function (c) {
    this.position = "tl";
    this.offset = {
      x: 0,
      y: 0
    };
    this.cg = 1;
    c = c || {};
    c.renderTo = document.body;
    var h = c.id || this.id;
    h && typeof this.statics().popups[h] !== "undefined" && (this.statics().popups[h].Rqa(!1), this.statics().popups[h].destroy());
    this.callParent(arguments);
    h && (this.statics().popups[h] = this);
    this.NL = {
      x: this.offset.x,
      y: this.offset.y
    };
    this.oqa = this.position;
    (this.anchor = this.anchor || (c.event ? c.event.getTarget() : m)) || j(Error("Popup: could not determine anchor element. Anchor can be specified by passing 'anchor' or 'event' option to the constructor"));
    this.el.on("click", this.ed, this);
    this.ifa(c.event);
    this.show();

    if (this.Ss) {
      var f = function () {
        this.Ss && (this.wva(f), this.destroy());
      }.bind(this);

      this.Hfa(f);
      this.el.on("mousewheel", function (l) {
        if (this.Ss) {
          for (var o = l.getTarget(); o && o.scrollHeight <= o.offsetHeight;) {
            if (o === this.el.dom) {
              return l.stopEvent(), !1;
            }

            o = o.parentNode;
          }

          if (o) {
            var n = typeof l.browserEvent.wheelDelta === "undefined" ? -l.browserEvent.detail : l.browserEvent.wheelDelta;

            if (n < 0 && o.scrollTop + o.offsetHeight == o.scrollHeight || n > 0 && o.scrollTop == 0) {
              return l.stopEvent(), !1;
            }
          }
        }

        return !0;
      }.bind(this), this);
    }

    this.uK && this.Bfa();
    this.yfa();
    this.qfa();
  },
  qfa: function () {
    Ext.History.on("change", this.z0, this);
  },
  mva: function () {
    Ext.History.un("change", this.z0, this);
  },
  z0: function () {
    this.destroy();
  },
  Bfa: function () {
    Ext.get(window.document).on("keyup", this.DI, this);
    this.y4 = document.getElementsByTagName("iframe");

    this.Gw = function (c) {
      this.DI(c);
    }.bind(this);

    Ext.Array.each(this.y4, function (c) {
      try {
        var n = c.contentWindow || c.contentDocument,
            l = n.document || n;
        l.designMode.toLowerCase() == "on" && (Ext.isIE ? l.attachEvent("onkeyup", this.Gw) : l.addEventListener("keyup", this.Gw, !1));
      } catch (f) {}
    }, this);
  },
  tva: function () {
    Ext.get(window.document).un("keyup", this.DI, this);
    Ext.Array.each(this.y4, function (c) {
      try {
        var n = c.contentWindow || c.contentDocument,
            l = n.document || n;
        l.designMode.toLowerCase() == "on" && (Ext.isIE ? l.detachEvent("onkeyup", this.Gw) : l.removeEventListener("keyup", this.Gw, !1));
      } catch (f) {}
    }, this);
  },
  yfa: function () {
    this.getEl().on("mouseenter", this.rh, this);
    this.getEl().on("mouseleave", this.Gj, this);
  },
  sva: function () {
    this.getEl().un("mouseenter", this.rh, this);
    this.getEl().un("mouseleave", this.Gj, this);
  },
  Hfa: function (c) {
    if (Ext.isIE) {
      window.attachEvent("onscroll", c);
    } else {
      Ext.get(window.document).on("scroll", c, this);
    }
  },
  wva: function (c) {
    Ext.isIE ? window.detachEvent("onscroll", c) : Ext.get(window.document).un("scroll", c, this);
  },
  Mva: function (c) {
    this.contentEl && this.contentEl.destroy();
    this.el.setWidth("auto");
    this.el.setHeight("auto");
    this.contentEl = Ext.get(document.createElement("div"));
    this.contentEl.addCls("popup-content");
    this.contentEl.appendTo(this.el);
    typeof c == "string" ? this.contentEl.dom.innerHTML = c : c && typeof c.appendTo == "function" ? c.appendTo(this.contentEl) : j(Error("Popup: content should be HTML string or Ext.Element"));
    this.Bl(!0);
  },
  ifa: function (c) {
    c ? (this.ea = [[C.core.ea.sf, {
      um: A(!0),
      Ge: function () {
        this.destroy();
      }
    }]], this.mixins.ea.constructor.call(this, {}), this.fireEvent("showpopup", {
      event: c,
      target: this.anchor,
      el: this.el
    })) : (this.Dw = function (e) {
      this.tK && !Ext.get(this.el).contains(e.getTarget()) && e.getTarget() !== this.anchor && !Ext.get(this.anchor).contains(e.getTarget()) && this.destroy();
    }, Ext.getBody().on("click", this.Dw, this));
  },
  destroy: function () {
    this.wK || (this.id && typeof this.statics().popups[this.id] !== "undefined" && delete this.statics().popups[this.id], this.el && (this.el.removeAnchor(), this.el.un("click", this.ed, this)), this.ze && this.ze.removeAnchor(), this.Dw && (Ext.getBody().un("click", this.Dw, this), delete this.Dw), this.uK && this.tva(), this.mva(), this.sva(), this.callParent());
  },
  ed: function (c) {
    !this.hideOnClick && !this.wK && this.el.contains(c.getTarget()) && c.stopEvent();
  },
  DI: function (c) {
    (c.keyCode || c.getKey()) === Ext.EventObject.ESC && this.E2(this.hideDelay);
  },
  Gj: function () {
    if (this.vK) {
      this.wL = !1, this.E2(this.hideDelay);
    }
  },
  rh: function () {
    this.wL = !0;
    clearTimeout(this.Ada);
  },
  E2: function (c) {
    this.Ada = setTimeout(function () {
      this.destroy();
    }.bind(this), c);
  },
  iEa: v("vK"),
  hEa: v("hideOnClick"),
  fta: v("tK"),
  Rqa: v("wK"),
  show: function () {
    if (!this.ze) {
      this.ze = Ext.get(document.createElement("i")), this.ze.addCls("menu-arrow"), this.ze.appendTo(this.el), this.el.setStyle({
        position: "absolute",
        visibility: "hidden",
        "z-index": 10000
      }), this.Mva(this.content || this.To()), this.el.setStyle({
        visibility: "visible"
      }), this.Bl(!1);
    }

    this.callParent();
  },
  Bl: function (L) {
    var G = {
      tl: "popup-arrow-down",
      tc: "popup-arrow-down",
      tr: "popup-arrow-down",
      bl: "popup-arrow-up",
      bc: "popup-arrow-up",
      br: "popup-arrow-up",
      lt: "popup-arrow-right",
      lc: "popup-arrow-right",
      lb: "popup-arrow-right",
      rt: "popup-arrow-left",
      rc: "popup-arrow-left",
      rb: "popup-arrow-left",
      c: "d-none"
    };

    if (L) {
      this.offset.x = this.NL.x, this.offset.y = this.NL.y, this.position = this.oqa, delete this.h3;
    }

    for (var D in G) {
      G.hasOwnProperty(D) && this.ze.removeCls(G[D]);
    }

    this.ze.addCls(G[this.position]);
    var B = {
      x: this.ze.getComputedWidth(),
      y: this.ze.getComputedHeight()
    },
        y = {
      x: Ext.fly(this.anchor).getComputedWidth(),
      y: Ext.fly(this.anchor).getComputedHeight()
    };

    if (this.el && this.el.dom) {
      this.el.setWidth("auto");
      this.el.setHeight("auto");
      G = this.el.getWidth(!0);
      D = this.el.getHeight(!0);

      if (!this.h3) {
        var o = this.zh(),
            o = o.bottom - o.top,
            f = this.contentEl.getWidth(!0);
        D + this.nv * 2 > o ? (this.h3 = !0, D = o - this.nv * 2, this.contentEl.setStyle({
          overflowY: "scroll",
          overflowX: "hidden",
          height: D + "px",
          width: f + "px"
        }), this.el.dom.scrollWidth - G > 0 ? this.contentEl.setStyle("padding-right", "1px") : this.contentEl.setStyle("padding-right", "")) : this.contentEl.setStyle({
          overflowY: "",
          overflowX: "",
          height: "",
          width: "",
          paddingRight: ""
        });
      }

      var c = {
        x: this.el.getComputedWidth(),
        y: this.el.getComputedHeight()
      },
          Q = {
        x: B.x / 2,
        y: B.y / 2
      },
          N = function (h, u, l, w, q) {
        this.offset.x *= l[0];
        this.offset.y *= l[1];
        q = {
          x: -c.x + y.x + this.offset.x + w,
          y: -c.y - B.y + this.offset.y + q
        };
        u = {
          x: y.x / 2 - Q.x,
          y: u ? -B.y - this.cg + this.offset.y : this.cg + this.cg + this.offset.y
        };
        this.offset.x + w < -y.x / 2 + Q.x ? u.x -= -y.x / 2 + Q.x - this.offset.x - w : this.offset.x + w > c.x - y.x / 2 - Q.x + this.cg && (u.x += Math.ceil(this.offset.x + w - (c.x - y.x / 2 - Q.x + this.cg)));
        this.offset.x /= l[0];
        this.offset.y /= l[1];
        return {
          md: [this.anchor, h, [q.x, q.y], !1, !0],
          ze: [this.anchor, h, [u.x, u.y], !1, !0]
        };
      }.bind(this),
          I = function (h, u, l, w, q) {
        this.offset.x *= l[0];
        this.offset.y *= l[1];
        w = {
          x: -c.x - B.x + this.offset.x + w,
          y: -c.y + y.y + this.offset.y + q
        };
        u = {
          x: u ? -B.x - this.cg + this.offset.x : this.cg + this.offset.x + y.x,
          y: y.y / 2 - Q.y
        };
        this.offset.y + q < -y.y / 2 + Q.y ? u.y -= -y.y / 2 + Q.y - this.offset.y - q : this.offset.y + q > c.y - y.y / 2 - Q.y + this.cg && (u.y += Math.ceil(this.offset.y + q - (c.y - y.y / 2 - Q.y + this.cg)));
        this.offset.x /= l[0];
        this.offset.y /= l[1];
        return {
          md: [this.anchor, h, [w.x, w.y], !1, !0],
          ze: [this.anchor, h, [u.x, u.y], !1, !0]
        };
      }.bind(this);

      (o = {
        tr: function () {
          return N("tl", !0, [-1, 1], 0, 0);
        },
        tc: function () {
          return N("tl", !0, [1, 1], c.x / 2 - y.x / 2, 0);
        },
        tl: function () {
          return N("tl", !0, [1, 1], c.x - y.x, 0);
        },
        br: function () {
          return N("bl", !1, [-1, -1], 0, B.y * 2 + c.y + this.cg);
        },
        bc: function () {
          return N("bl", !1, [1, -1], c.x / 2 - y.x / 2, B.y * 2 + c.y + this.cg);
        },
        bl: function () {
          return N("bl", !1, [1, -1], c.x - y.x, B.y * 2 + c.y + this.cg);
        },
        lt: function () {
          return I("tl", !0, [1, 1], 0, c.y - y.y);
        },
        lc: function () {
          return I("tl", !0, [1, 1], 0, c.y / 2 - y.y / 2);
        },
        lb: function () {
          return I("tl", !0, [1, -1], 0, 0);
        },
        rt: function () {
          return I("tl", !1, [-1, 1], y.x + B.x * 2 + c.x, c.y - y.y);
        },
        rb: function () {
          return I("tl", !1, [-1, -1], y.x + B.x * 2 + c.x, 0);
        },
        rc: function () {
          return I("tl", !1, [-1, 1], y.x + B.x * 2 + c.x, c.y / 2 - y.y / 2);
        },
        c: function () {
          return {
            md: [this.anchor, "c", [-c.x / 2 + this.offset.x, -c.y / 2 + this.offset.y], !1, !0],
            ze: [this.anchor, "c", [0, 0], !1, !0]
          };
        }
      }[this.position]) || j(Error("Popup: unsupported position: " + this.position));
      o = o.bind(this)();
      this.el.anchorTo.apply(this.el, o.md);
      this.ze.anchorTo.apply(this.ze, o.ze);
      this.el.setWidth(G + "px");
      this.el.setHeight(D + "px");
      L && this.position != "c" && this.d_();
    }
  },
  zh: function () {
    var c = window,
        h = "inner";
    "innerWidth" in window || (h = "client", c = document.documentElement || document.body);
    var f = Ext.fly(document.body).getScroll();
    return {
      left: f.left,
      right: f.left + c[h + "Width"],
      top: f.top,
      bottom: f.top + c[h + "Height"]
    };
  },
  d_: function (c) {
    if (["tl", "tc", "tr", "bl", "bc", "br"].indexOf(this.position) > -1) {
      var n = this.zh(),
          l = this.el.getRegion(),
          f = this.position;

      if (f[0] == "t" && (l.top < n.top || l.bottom > n.bottom)) {
        this.position = "b" + this.position[1];
      } else {
        if (f[0] == "b" && (l.bottom > n.bottom || l.top < n.top)) {
          this.position = "t" + this.position[1];
        } else {
          if (f[0] == "l" && (l.left < n.left || l.right > n.right)) {
            this.position = "r" + this.position[1];
          } else {
            if (f[0] == "r" && (l.right > n.right || l.left < n.left)) {
              this.position = "l" + this.position[1];
            }
          }
        }
      }

      if (f[1] == "l" && (l.right > n.right || l.left < n.left)) {
        this.position = this.position[0] + "r";
      } else {
        if (f[1] == "r" && (l.left < n.left || l.right > n.right)) {
          this.position = this.position[0] + "l";
        } else {
          if (f[1] == "t" && (l.top < n.top || l.bottom > n.bottom)) {
            this.position = this.position[0] + "b";
          } else {
            if (f[1] == "b" && (l.bottom > n.bottom || l.top < n.top)) {
              this.position = this.position[0] + "t";
            }
          }
        }
      }

      this.position != f ? (this.Bl(!1), c ? this.CJ() : this.d_(!0)) : this.CJ();
    } else {
      this.CJ();
    }
  },
  CJ: function () {
    var c = this.el.getRegion(),
        h = this.zh(),
        f = 0;
    c.top < h.top ? f = c.top - h.top - this.nv : c.bottom > h.bottom && (f = h.bottom - c.bottom - this.nv + this.NL.y);

    if (f != 0) {
      return this.offset.y = f * ({
        tl: -1,
        tc: -1,
        tr: -1,
        bl: -1,
        bc: -1,
        br: -1
      }[this.position] || 1), this.Bl(!1), !0;
    }

    return !1;
  },
  To: A(m)
});