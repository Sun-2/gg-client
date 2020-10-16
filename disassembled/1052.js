Ext.define(E.f.layout.ff.mF, {
  extend: C.f.Jb,
  contentEl: m,
  map: m,
  active: m,
  vr: m,
  lO: "video",
  zH: "audio",
  constructor: function (c) {
    c = c || {};
    c.renderTo = c.renderTo || Ext.get("sr-navbar-wrapper");
    c.contentEl = c.contentEl || "sr-navbar";
    Ext.apply(this, c);
    this.data = {};
    this.callParent(arguments);
    this.addEvents("chatsicochanged");
  },
  initComponent: function () {
    this.callParent(arguments);
    this.on("afterrender", this.na, this);
    this.on("chatsiconchange", this.Z_, this);
    this.on("chatsiconrevert", this.$_, this);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.wr.un("click", this.M8, this, {
      caller: this
    });
    this.un("chatsiconchange", this.Z_, this);
    this.un("chatsiconrevert", this.$_, this);
    this.callParent(arguments);
  },
  na: function () {
    var c = m;
    this.wr = Ext.get("sr-account-btn");
    this.oL = Ext.get("sr-mainnav");
    this.VCa = Ext.get("navbar-blocker");
    c = this.oL.select("a").elements;
    this.map = {
      contacts: c[0],
      latest: c[1],
      search: c[2],
      roulette: c[3],
      drive: c[4],
      program: c[6]
    };
    this.wr.on("click", this.M8, this, {
      caller: this
    });
  },
  m9: function (c) {
    this.Kja();

    if (c && this.map[c]) {
      this.active = Ext.get(this.map[c]).addCls("active");
    }
  },
  Kja: function () {
    if (this.active !== m) {
      this.active.removeCls("active"), this.active = m;
    }
  },
  M8: function (c, h, f) {
    c.preventDefault();

    if (this.vr === m) {
      this.vr = Ext.create(E.f.layout.va.cB, {
        renderTo: "sr-webgg-account"
      });
    }

    this.wr.toggleCls("active");
    this.vr.TL(c, h, f, this.wr);
  },
  kx: function () {
    this.vr && this.vr.cO(m, "nick", m);
  },
  Z_: function (c) {
    try {
      var h = Ext.get(Ext.select("#sr-mainnav a.chats").elements[0], !1, this.oL);
      h.removeCls(this.lO);
      h.removeCls(this.zH);

      switch (c) {
        case "video":
          h.addCls(this.lO);
          break;

        case "audio":
          h.addCls(this.zH);
      }
    } catch (f) {}
  },
  $_: function () {
    try {
      var c = Ext.get(Ext.select("#sr-mainnav a.chats").elements[0], !1, this.oL);
      c.removeCls(this.lO);
      c.removeCls(this.zH);
    } catch (f) {}
  }
});