Ext.define(E.f.layout.Ga.ZB, {
  extend: "Ext.toolbar.Toolbar",
  cls: "members-bar",
  layout: {
    overflowHandler: "conference"
  },
  Fz: m,
  Vf: m,
  iwa: ".user-menu",
  v9: m,
  html: "",
  mixins: {
    ea: C.core.mixins.kb
  },
  u9: {
    ".edit": function () {
      this.KI(this.v9.te.get("uin"));
    }
  },
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    c.html = c.html || this.da.Wa("conference-member-menu");
    this.callParent([c]);
  },
  initComponent: function () {
    this.callParent();
    this.items.each(function (c) {
      c.on("menuclicked", this.fia, this);
    }, this);
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.callParent();
    this.un("afterrender", this.na, this);
    this.Vf.un("click", this.c0, this);
  },
  na: function () {
    this.Vf = this.el.child(this.iwa);
    this.Fz = this.layout.overflowHandler.afterCt;
    this.ea = [[C.core.ea.sf, {
      fe: [this.Vf, this.Fz],
      Ge: function (c) {
        var h, f;

        if (c && c.dom) {
          if (c.hasCls("user-menu")) {
            if ((h = Ext.get(c.dom.parentNode)) && (f = h.child(".popup")), f && f.addCls("d-none"), c.addCls("d-none"), c = h.select(".trigger").first()) {
              c.removeCls("active"), (c = c.select(".arrow").first()) && c.addCls("d-none");
            }
          } else {
            c.hasCls("popup") && ((h = Ext.get(c.dom.parentNode)) && (f = h.child(".user-menu")), (h = Ext.get(c.query(".x-toolbar-item")[0])) ? f && !f.hasCls("d-none") && !f.hasCls("x-toolbar-item") && c.addCls("d-none") : c.addCls("d-none"));
          }
        }
      },
      um: function (c) {
        var n, l, f;

        if (c && c.dom) {
          if (c.hasCls("popup") && !c.hasCls("d-none") && (n = Ext.get(c.query(".x-toolbar-item")[0]), (l = Ext.get(c.dom.parentNode)) && (f = l.child(".user-menu")), n && !n.hasCls("d-none"))) {
            if (f && !f.hasCls("d-none")) {
              return !0;
            }

            return !1;
          }

          return c = c.hasCls("d-none") ? !1 : !0;
        }

        return !1;
      }
    }]];
    this.mixins.ea.constructor.call(this);
    this.Vf.on("click", this.c0, this);
  },
  fia: function (c, n) {
    var l = c.Wy ? c.el.dom.offsetTop + c.el.getHeight() + this.Fz.dom.offsetTop : c.el.dom.offsetTop + c.el.getHeight(),
        f = c.Wy ? c.el.dom.offsetLeft + c.el.getWidth() + this.Fz.dom.offsetLeft - 15 : c.el.dom.offsetLeft + c.el.getWidth() - 20;
    c.Wy ? this.Vf.addCls("to-right") : this.Vf.removeCls("to-right");
    this.Vf.setTop(l);
    this.Vf.setLeft(f);
    this.v9 = c;
    Ext.get(n.t).hasCls("nested") ? this.Vf.addCls("nested") : this.Vf.hasCls("nested") && this.Vf.removeCls("nested");
    this.Vf.removeCls("d-none");
    this.fireEvent("show", {
      event: n.e,
      target: n.t,
      el: this.Vf
    });
  },
  c0: function (c) {
    c.preventDefault();

    for (var f in this.u9) {
      if (m !== c.getTarget(f)) {
        this.u9[f].call(this, c);
        break;
      }
    }
  },
  KI: function (c) {
    C.k().fa.get("uin") == c ? C.Ca("profile/edit") : C.Ca("user-profile/" + c + "/edit");
  }
});