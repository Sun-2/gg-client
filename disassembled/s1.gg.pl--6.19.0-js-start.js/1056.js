Ext.define(E.f.conference.GQ, {
  extend: C.f.Jb,
  cls: "conference-container",
  ka: {
    ".delete-btn": function () {
      this.fireEvent("removeconference", this);
    },
    ".user-profile-gg": function () {
      C.k().fc(this.A9.cd.get("uin"));
    },
    ".profile-close": function () {
      C.Ca("");
    },
    ".show-star": function (c) {
      this.t0(c);
    },
    ".user-data-links": function (c) {
      this.A6(c);
    }
  },
  Hea: ["editconference", "removeconference", "startconference", "removeconference"],
  JEa: m,
  mixins: {
    ea: C.core.mixins.kb
  },
  xza: m,
  A9: m,
  ef: m,
  la: m,
  constructor: function (c) {
    c = c || {};
    this.data = {};
    this.ef = c.ef || m;
    this.la = c.la || m;
    this.ea = [[C.core.ea.oj, {}]];
    this.mixins.ea.constructor.call(this, c);
    this.A9 = {};
    this.callParent(arguments);
    this.addEvents.apply(this, this.Hea);
  },
  initComponent: function () {
    this.items = [this.header = Ext.create(E.f.conference.iC, {
      ef: this.ef,
      la: this.la,
      settings: this.settings
    }), this.$e = Ext.create(E.f.conference.Sk, {}), this.Sc = Ext.create(E.f.conference.eC, {
      la: this.la,
      Hf: m,
      Nd: E.api.ub.ic.Nd.Hc,
      ul: this.ul,
      Fg: this.Fg
    })];
    this.relayEvents(this.header, ["consumefavors", "removeconference"]);
    this.relayEvents(this.$e, ["changestatus"]);
    this.callParent();
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.callParent();
  },
  hc: function (c) {
    this.header.hc(c);
    this.$e.hc(c);
    this.Sc.i9(c.get("uin"));
    this.Sc.hc(c);
  },
  hn: function () {
    this.fireEvent("showpreloader", this);
  },
  Mi: function () {
    this.fireEvent("hidepreloader", this);
  },
  na: t(),
  Ia: function (c, h, f) {
    c.preventDefault();
    Ext.iterate(this.ka, function (e, b) {
      c.getTarget(e) && b.call(this, c, h, f);
    }, this);
  }
});