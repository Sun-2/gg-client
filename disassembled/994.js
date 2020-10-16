Ext.define(E.f.layout.gd.bb, {
  extend: C.f.Jb,
  La: m,
  Wia: E.f.layout.gd.tC,
  la: m,
  Xia: E.stores.gv,
  Rd: m,
  ysa: E.stores.xG,
  Yd: m,
  Via: E.f.layout.gd.sC,
  Id: m,
  Uia: E.f.layout.gd.rC,
  e7: m,
  B9: {
    groups: function () {
      this.La.ee("groups", !0);
    },
    stars: function () {
      this.La.ee("stars", !0);
    },
    favorites: function () {
      this.La.ee("stars", !0);
    },
    "avatars-none": function () {
      this.La.xf("no-avatars");
    },
    "avatars-left": function () {
      this.La.xf("avatars-left");
    },
    "avatars-right": function () {
      this.La.xf("avatars-right");
    }
  },
  constructor: function (c) {
    this.items = c.items || [];
    this.config = c.config;
    c.la = c.la || Ext.create(this.Xia, c.Oza);
    c.J7 = Ext.apply(c.J7 || {}, {
      id: "SelectedContactsStore"
    });
    c.Rd = c.Rd || Ext.create(this.ysa, c.J7);
    var f = this.sqa(this.config.listView, this.config.contactView);
    c.e2 = Ext.apply(c.e2 || {}, {
      store: c.la,
      Rd: c.Rd,
      view: f.view,
      we: f.we,
      Xo: this.config.contactView.showDescription,
      showSynced: !!parseInt(this.config.listView.showSynced)
    });
    c.La = c.La || Ext.create(this.Wia, c.e2);

    if (!0 === c.Yd) {
      c.Yd = Ext.create(this.Via, {
        view: f.view,
        we: f.we,
        Xo: this.config.contactView.showDescription,
        Wta: this.config.listView.showSynced
      });
    }

    if (!0 === c.Id) {
      c.Id = Ext.create(this.Uia, c.Nza);
    }

    this.callParent([c]);
  },
  initComponent: function () {
    this.Bta();
    this.callParent();
    this.relayEvents(this.La, ["contactclicked", "contactdblclicked"]);
    this.Yd && this.vfa();
    this.Id && this.ufa();
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.Yd && this.qva();
    this.Id && this.pva();
    this.un("afterrender", this.na, this);
    this.La.un("refresh", this.j0, this);
    this.callParent();
  },
  Bta: function () {
    this.items = this.items || [];
    this.Id && this.items.push(this.Id);
    this.Yd && this.items.push(this.Yd);
    this.La && this.items.push(this.La);
  },
  vfa: function () {
    this.Yd.on("viewchange", this.Z1, this);
    this.relayEvents(this.Yd, ["addcontact", "addgroup", "addconference", "viewchange"]);
  },
  qva: function () {
    this.Yd.un("viewchange", this.Z1, this);
  },
  ufa: function () {
    this.Id.on("search", this.D1, this);
    this.Id.on("stopsearch", this.K1, this);
  },
  pva: function () {
    this.Id.un("search", this.D1, this);
    this.Id.un("stopsearch", this.K1, this);
  },
  Z1: function (c, f) {
    this.hH = !1;
    this.B9[f] && this.B9[f].call(this);
    this.hH || this.La.refresh();
    this.hH = !1;
  },
  D1: function (c, f) {
    this.La.c2(c, f);
  },
  K1: function (c) {
    this.La.c2(c, "");
  },
  na: function () {
    this.vka();
    this.La.on("refresh", this.j0, this);
  },
  j0: function () {
    this.hH = !0;
  },
  sqa: function (c, h) {
    var f = {};
    f.view = c.type === "favorites" ? "stars" : c.type;
    f.we = h.avatar === "none" ? "no-avatars" : "avatars-" + h.avatar;
    return f;
  },
  vka: function () {
    this.Id && this.Id.el.removeCls("d-none");
  },
  pAa: function () {
    this.Yd && (this.Yd.el.removeCls("d-none"), this.Id && this.Id.el.addCls("d-none") && this.Id.UZ());
  },
  xf: function (c) {
    c = c || this.config.view;
    this.La.ee(c, !0);
    this.Yd.xf(c, !1);
  },
  iza: function (c) {
    c = c || this.config.view;
    this.e7 = this.La.view;
    this.La.ee(c);
    this.Yd.xf(c, !1);
  },
  PDa: function (c) {
    c = c || this.e7 || this.config.view;
    this.La.ee(c);
    this.Yd.xf(c, !1);
  },
  $H: function (c) {
    c = c || this.config.we;
    this.La.xf(c);
    this.Yd.$H(c, !1);
  },
  Wfa: function (c) {
    var f = this.La.el.dom.className;

    if (f.indexOf("descript-show") != -1) {
      c = f.replace("descript-show", "descript-" + c), this.La.el.dom.className = c;
    } else {
      if (f.indexOf("descript-hide") != -1) {
        c = f.replace("descript-hide", "descript-" + c), this.La.el.dom.className = c;
      }
    }
  },
  dga: function (c) {
    this.Yd.ega(c);
  },
  fEa: function (c) {
    this.La.fJ = c;
  },
  dBa: function () {
    return this.La.fJ;
  },
  Tua: function (c) {
    parseInt(c) ? this.La.showSynced !== !0 && this.La.Xta() : this.La.showSynced !== !1 && this.La.x4();
  }
});