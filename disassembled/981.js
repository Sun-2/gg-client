Ext.define(E.f.layout.va.hb.yq, {
  extend: C.f.Jb,
  cls: "sr-contactspicker-widget-container",
  Ij: m,
  La: m,
  mO: {
    stars: E.f.layout.va.hb.xC,
    groups: E.f.layout.va.hb.uC
  },
  la: m,
  bz: {
    contact: 1,
    dummycontact: 2,
    conference: 4
  },
  LK: m,
  Qe: "groups",
  Of: !1,
  Ke: !1,
  Ef: !1,
  Fd: m,
  jc: 0,
  yg: m,
  Db: m,
  Xm: !0,
  Tg: m,
  Ug: !1,
  Sg: "",
  gh: [],
  mg: [],
  constructor: function (c) {
    this.la = Ext.getStore("ContactsStore");
    c = c || {};
    c.Qe = c.Qe || this.la.sortBy || this.Qe;
    c.Of = typeof c.Of === "undefined" ? this.Of : c.Of;
    c.Ke = typeof c.Ke === "undefined" ? this.Ke : c.Ke;
    c.Fd = c.Fd || this.Fd;
    c.Tg = c.Tg || [{
      aM: [2],
      pattern: "Mo\u017cesz wybra\u0107 jeszcze %s znajomych"
    }, {
      aM: [1, 1],
      pattern: "Mo\u017cesz wybra\u0107 jeszcze %s znajomego"
    }, {
      aM: [0, 0],
      pattern: "Limit osi\u0105gni\u0119ty"
    }];
    this.mO[c.Qe] || j(Error("Unsupported view type: " + c.Qe));
    this.JK(c);

    if (c.Ef) {
      c.cls = (c.cls || this.cls) + " contacts-picker-widget-friends";
    }

    this.addEvents(["selectionchange"]);
    this.callParent([c]);
    c.yg && this.Y7(c.yg);
    c.Db && this.tta(c.Db);
    this.LK = this.zy();
  },
  initComponent: function () {
    this.callParent();
    this.on("afterrender", this.na, this);
  },
  JK: function (c) {
    this.Ij = Ext.create("Ext.data.Store", {
      id: "ContactsPickerStore",
      model: this.la.model
    });
    this.Ij.self.implement({
      Ty: this.la.Ty,
      sortInfo: this.la.sortInfo,
      ee: this.la.ee,
      aA: this.la.aA,
      doSort: this.la.doSort,
      sort: this.la.sort,
      fI: this.la.fI,
      vM: this.la.vM
    });
    c.Of && this.le({
      uin: "" + C.k().fa.get("uin"),
      name: "",
      gid: "0",
      status: C.k().fa.get("status")
    });
    var h = [];
    Ext.each(this.la.getRange(), function (e) {
      e.get("visible") && e.get("uin") != C.k().fa.get("uin") && h.push(e);
    });
    this.Ij.add(h);
    var f = [];

    if (c.Fd) {
      this.Fd = [], Ext.each(c.Fd, function (e) {
        typeof this.bz[e] == "undefined" && j(Error("Unsupported record type: " + e));
        f.push(this.bz[e]);
      }, this), this.Ij.filterBy(function (e) {
        return f.indexOf(e.get("type")) > -1;
      }, this);
    }
  },
  aoa: function () {
    this.xg = Ext.create(E.f.layout.va.hb.wC);
    this.add(this.xg);
    this.xg.on(this.xg.jv, this.B1, this);
    this.xg.on(this.xg.PC, this.C1, this);
  },
  Sna: function (c) {
    c = c || this.Qe;

    if (typeof this.mO[c] !== "undefined") {
      var h = [];
      this.La && (h = this.zy(), this.La.un("selectionchange", this.hg, this), this.La.destroy());
      this.Ij.ee(c, !0);
      this.La = Ext.create(this.mO[c], {
        store: this.Ij,
        jc: this.jc,
        anchor: "100%",
        gh: this.gh,
        mg: this.mg,
        gid: this.gid
      });
      this.La.on("beforeselect", this.Il, this);
      this.La.on("selectionchange", this.hg, this);
      this.La.on("containerclick", this.m0, this);
      this.add(this.La);
      this.Yoa();
      var f = this.xg.getValue();
      f !== "" && this.yJ(f, !0);
      this.Y7(h);
      this.Qe = c;
    }
  },
  Yoa: function () {
    if (this.Ug || this.Ke) {
      var c = this.La.getSelectionModel(),
          h = this,
          f = C.k().fa.get("uin");

      (function (b) {
        c.doDeselect = function (e, y) {
          for (var e = e instanceof Array ? e : [e], w = [], o = 0, g = e.length; o < g; o++) {
            h.Ug ? !(h.Ke && e[o].get("uin") == f) && h.LK && h.LK.indexOf(e[o].get("cid")) == -1 && w.push(e[o]) : h.Ke && e[o].get("uin") != f && w.push(e[o]);
          }

          return b.call(c, w, y);
        };
      })(c.doDeselect);
    }
  },
  ioa: function () {
    if (this.Xm) {
      this.summary = Ext.create("ggpl.gui.layout.widgets.contactspicker.ContactsPickerSummary", {
        cls: "selection-summary"
      }), this.add(this.summary);
    }

    if (this.jc && this.Tg) {
      this.tp = Ext.create("ggpl.gui.layout.widgets.contactspicker.ContactsPickerLimitMessage", {
        P6: this.Tg
      }), this.add(this.tp);
    }
  },
  na: function () {
    this.aoa();
    this.ioa();
    this.Sna();
    this.jc && this.tp && this.tp.N7(this.jc);
    Ext.fly(this.getEl()).unselectable();
  },
  B1: function () {
    this.yJ(this.xg.getValue());
  },
  C1: function () {
    this.yJ("");
  },
  Il: function (c, f) {
    if (this.Ef && !f.get("protoInfo").friend) {
      return this.La.getSelectionModel().deselect(f), !1;
    }
  },
  hg: function () {
    var c;

    if (this.summary || this.tp) {
      c = this.Ay("ShowName");
    }

    this.summary && this.summary.setData(c);
    this.tp && this.tp.N7(this.jc - c.length);
    this.fireEvent("selectionchange");
  },
  m0: function (c, h) {
    var f = h.getTarget(".search-link");
    f && (f = (f.getAttribute("href") || "").replace("#search", ""), h.preventDefault(), this.destroy(), C.Ca("search" + f));
  },
  destroy: function () {
    this.Uz && clearTimeout(this.Uz);
    this.un("afterrender", this.na, this);
    this.La.un("beforeselect", this.lza, this);
    this.La.un("selectionchange", this.hg, this);
    this.La.un("containerclick", this.m0, this);
    this.xg.un(this.xg.jv, this.B1, this);
    this.xg.un(this.xg.PC, this.C1, this);
    this.callParent();
  },
  yJ: function (c, w) {
    function q() {
      if (c) {
        Ext.each(y, function (e) {
          Ext.get(e).Bc = !1;
        }, this);
        var h = 0,
            b = C.ca.xa.f2(c.toLowerCase());
        u.each(function (g) {
          var e = o.La.getRecord(g);
          f.indexOf(e.get("type")) > -1 && (("" + e.get("uin")).indexOf(c) === 0 || "" + e.get("ShowName").toLowerCase().search(b) > -1) ? (o.hN(g), h++) : o.rK(g);
        });
        h == 0 ? o.fA() : o.Fy();
        Ext.each(y, function (e) {
          Ext.get(e).Bc == !1 ? o.sK(e) : o.jN(e);
        }, this);
      } else {
        this.blockRefresh = !1, o.La.refresh(), this.blockRefresh = !0;
      }
    }

    this.Uz && clearTimeout(this.Uz);
    this.Sg = c = Ext.String.trim(c);
    this.La.emptyText = Ext.String.format(E.lang.nQ + "<br />" + E.lang.oQ, C.ca.Dc.htmlText(c));
    var o = this,
        f = [];
    Ext.each(this.Fd, function (e) {
      typeof this.bz[e] == "undefined" && j(Error("Unsupported record type: " + e));
      f.push(this.bz[e]);
    }, this);
    var y = this.La.el.select(".group").elements,
        u = this.La.all;
    w ? q() : this.Uz = setTimeout(q, 200);
  },
  getSelectedRecords: function () {
    var c = [],
        f = [];
    Ext.each(this.La.getSelectedRecords(), function (b) {
      if (!b.get("duplicated") && b.get("visible") && f.indexOf(b.get("cid")) == -1) {
        if (this.jc > 0 && c.length == this.jc) {
          return !1;
        }

        f.push(b.get("cid"));
        c.push(b);
      }
    }, this);
    return c;
  },
  Ay: function (c) {
    var h = [],
        f = [];
    Ext.each(this.La.getSelectedRecords(), function (e) {
      var b = e.get(c);

      if (e.get("uin") === "0") {
        return !1;
      }

      if (!e.get("duplicated") && e.get("visible") && f.indexOf(e.get("cid")) == -1) {
        if (this.jc > 0 && h.length == this.jc) {
          return !1;
        }

        c == "ShowName" && b == "" && e.get("gid") == 0 ? (b = E.lang.Se, f.unshift(e.get("cid")), h.unshift(b)) : (f.push(e.get("cid")), h.push(b));
      }
    }, this);
    return h;
  },
  Z7: function (c, h) {
    var f = [];
    Ext.each(h, function (b) {
      this.Ij.each(function (e) {
        e.get(c) == b && f.push(e);
      }, this);
    }, this);
    this.La.getSelectionModel().deselectAll();
    this.La.getSelectionModel().select(f);
  },
  zy: function () {
    return this.Ay("cid");
  },
  Y7: function (c) {
    this.Z7("cid", c);
  },
  hK: function () {
    return this.Ay("uin");
  },
  tta: function (c) {
    this.Z7("uin", c);
  },
  le: function (c) {
    this.Ij.add({
      uin: "" + c.uin,
      ShowName: c.name,
      type: 1,
      cid: c.cid || "0",
      gid: c.gid || "0",
      duplicated: !1,
      visible: !0,
      extData: m,
      protoInfo: {
        status: c.status || "avail",
        friend: !0
      },
      sortInfo: 0
    });
  },
  hN: function (c) {
    Ext.get(c).removeCls("filtered");
    c.parent().parent().Bc = !0;
    c.Bc = !0;
  },
  rK: function (c) {
    Ext.get(c).addCls("filtered");
    c.Bc = !1;
  },
  jN: function (c) {
    Ext.get(c).removeCls("filtered");
    c.Bc = !0;
  },
  sK: function (c) {
    Ext.get(c).addCls("filtered");
    c.Bc = !1;
  },
  fA: function () {
    this.La.fA && this.La.fA();
    this.getEl().select(".no-results").update(this.La.emptyText).removeCls("d-none");
  },
  Fy: function () {
    this.La.Fy && this.La.Fy();
    this.getEl().select(".no-results").update("").addCls("d-none");
  }
});