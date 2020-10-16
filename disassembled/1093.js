Ext.define(E.f.profile.conference.jC, {
  extend: C.f.Rk,
  cls: "conference-members-list",
  blockRefresh: !0,
  Pt: !1,
  multiSelect: !1,
  itemSelector: ".member",
  ka: {
    ".btn-show-more": function () {
      this.expand();
    },
    ".btn-collapse": function () {
      this.collapse();
    }
  },
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.tpl = this.da.ma("conference-show-members-list");
    this.callParent([c]);
  },
  initComponent: function () {
    this.on("afterrender", this.gb, this);
    this.store.on("datachanged", this.Nl, this);
    this.addCls("collapsed");
    this.callParent(arguments);
  },
  gb: function () {
    this.el.select("ul").first() && this.PH(!1);
    this.el.on("click", this.Ia, this);
    this.on("itemclick", this.mb, this);
  },
  mb: function (c, f) {
    C.k().fa.get("uin") == f.get("uin") ? C.Ca("profile") : C.Ca("profile/" + f.get("uin"));
  },
  Ia: function (c, n, l) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        this.ka[f].call(this, c, n, l);
        break;
      }
    }
  },
  Nl: function () {
    this.el.hasCls("collapsed") && this.PH();
  },
  PH: function () {
    var c,
        q = [],
        p = this.el.getTop(),
        o = this.el.select("ul").first().getTop(),
        f = c = 0;

    if (o > p - p / 2 && (c = this.el.select(".member")) && !(c.elements < 1)) {
      for (p = 0; p < c.elements.length; p++) {
        var u = Ext.get(c.elements[p]);

        if (u.getTop() <= o + 5) {
          q.push(u);
        } else {
          break;
        }
      }

      c = c.getCount() - q.length;

      for (o = 0; o < q.length; o++) {
        f += q[o].getComputedWidth();
      }

      c > 0 && this.p9(c, f + 10);
    }
  },
  expand: function () {
    this.el.replaceCls("collapsed", "expanded");
    this.p9(0);
  },
  collapse: function () {
    this.el.replaceCls("expanded", "collapsed");
    this.PH();
  },
  p9: function (c, h) {
    if (c == 0) {
      this.removeCls("show-more");
    } else {
      this.addCls("show-more");
      c > 999 && (c = 999);
      var f = this.el.select(".btn-show-more").first();
      f.update(Ext.String.format(E.lang.VP, c));
      f.setStyle("left", h + "px");
    }
  },
  destroy: function () {
    this.store.un("datachanged", this.Nl, this);
    this.el.un("click", this.Ia, this);
    this.un("itemclick", this.mb, this);
    this.callParent();
  }
});