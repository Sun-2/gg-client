Ext.define(C.core.ea.oj, {
  extend: C.core.ea.Qk,
  Dk: [],
  bk: [],
  Tta: ["showpreloader"],
  xna: ["hidepreloader"],
  pk: m,
  XBa: "d-none",
  Gqa: "preloader",
  hh: m,
  VL: !1,
  constructor: function (c) {
    c = c || {};
    c.Dk = [].concat(this.Tta).concat(c.Dk || []);
    c.bk = [].concat(this.xna).concat(c.bk || []);
    this.callParent([c]);
  },
  onAdd: function () {
    this.callParent(arguments);

    if (!this.hh && this.owner.el) {
      this.hh = this.owner.el;
    }

    if (this.hh && !(this.hh instanceof Ext.Element)) {
      this.hh = new Ext.Element(this.hh);
    }
  },
  initEvents: function () {
    this.callParent(arguments);
    this.owner.addEvents("beforeshowpreloader", "beforehidepreloader", "showpreloader", "hidepreloader", "aftershowpreloader", "afterhidepreloader");

    if (!this.hh) {
      this.owner.on("afterrender", this.S_, this);
    }

    for (var c = 0, h = this.Dk.length, f = this.Dk[c]; c < h; c++, f = this.Dk[c]) {
      this.owner.on(f, this.hn, this);
    }

    c = 0;
    h = this.bk.length;

    for (f = this.bk[c]; c < h; c++, f = this.bk[c]) {
      this.owner.on(f, this.Mi, this);
    }
  },
  Ct: function () {
    this.callParent(arguments);

    for (var c = 0, h = this.Dk.length, f = this.Dk[c]; c < h; c++, f = this.Dk[c]) {
      this.owner.un(f, this.hn, this);
    }

    c = 0;
    h = this.bk.length;

    for (f = this.bk[c]; c < h; c++, f = this.bk[c]) {
      this.owner.un(f, this.Mi, this);
    }
  },
  hn: function () {
    if (!this.VL) {
      (m === this.pk || !this.pk.dom) && this.mja(), this.hh && this.hh.appendChild(this.pk), this.VL = !0;
    }
  },
  Mi: function () {
    if (this.hh && this.pk) {
      this.pk.remove(this.pk), this.VL = !1;
    }
  },
  mja: function () {
    this.pk = new Ext.Element(document.createElement("div"));
    this.pk.addCls(this.Gqa);
  },
  S_: function (c) {
    this.hh = c.el;
    c.un("afterrender", this.S_, this);
  }
});