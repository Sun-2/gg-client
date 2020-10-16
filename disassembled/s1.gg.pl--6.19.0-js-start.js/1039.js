Ext.define("Ext.layout.container.boxOverflow.conference", {
  extend: "Ext.layout.container.boxOverflow.None",
  alternateClassName: "Ext.layout.boxOverflow.conference",
  afterCtCls: "popup d-none",
  ppa: "trigger",
  afterCt: m,
  rpa: 30,
  mixins: {
    Zpa: Ext.util.Observable
  },
  constructor: function (c, f) {
    this.layout = this.layout || c;
    this.mixins.Zpa.constructor.call(this, f);
    this.callParent(arguments);
  },
  handleOverflow: function (c, w) {
    this.callParent(arguments);

    if (c.meta.tooNarrow) {
      var q = c.boxes.slice(),
          o = [],
          f;
      q.sort(function (g, h) {
        return g.width - h.width;
      });
      this.createInnerElements();
      f = -this.menuTrigger.getWidth() - this.rpa;

      for (var y = q.length - 1, u = m; y >= 0; y--) {
        if (u = q[y].component, f += q[y].width + q[y].margins.left + q[y].margins.right, u.Wy = !0, o.push(u), c.meta.shortfall < f) {
          break;
        }
      }

      o.sort(function (g, h) {
        return g.te.ShowName - h.te.ShowName;
      });
      this.createMenu(o);
    }

    q = {};
    q[this.layout.perpendicularPrefix] = w[this.layout.perpendicularPrefix];
    q[this.layout.parallelPrefix] = w[this.layout.parallelPrefix] - 30;
    return {
      targetSize: q
    };
  },
  createInnerElements: function () {
    var c = this.layout.getRenderTarget();

    if (!this.menuTrigger) {
      this.menuTrigger = c.insertSibling({
        cls: Ext.layout.container.Box.prototype.innerCls + " " + this.ppa
      }, "before"), this.menuTrigger.on("click", this.rha, this);
    }

    if (!this.afterCt) {
      c.addCls(Ext.baseCSSPrefix + this.layout.direction + "-box-overflow-body"), this.afterCt = c.insertSibling({
        cls: Ext.layout.container.Box.prototype.innerCls + " " + this.afterCtCls
      }, "before");
    }
  },
  createMenu: function (c) {
    for (var n, l = 0, f = c.length; l < f; l++) {
      (n = Ext.get(c[l].el.dom).child(".conf-membr-btn")) && n.addCls("nested") && n.first().addCls("nested"), c[l].el.appendTo(this.afterCt);
    }

    this.menuTrigger.update(c.length > 1 ? Ext.String.format(E.lang.KO, c.length) : E.lang.LO);
  },
  clearOverflow: t(),
  rha: function (c, n) {
    var l = Ext.get(c.getTarget(".trigger"));

    if (l) {
      if (l.hasCls("active")) {
        l.removeCls("active"), (f = l.select(".arrow").first()) && f.addCls("d-none"), this.layout.owner.fireEvent("hidepopup", {
          event: c,
          target: n,
          el: this.afterCt
        }), this.afterCt.addCls("d-none");
      } else {
        l.addCls("active");
        var f = l.select(".arrow").first();
        f ? f.removeCls("d-none") : l.dom.innerHTML += '<div class="arrow"><i></i></div>';
        this.layout.owner.fireEvent("show", {
          event: c,
          target: n,
          el: this.afterCt
        });
        this.afterCt.removeCls("d-none");
      }
    }
  }
});