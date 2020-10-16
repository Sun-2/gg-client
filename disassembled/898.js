Ext.define(E.f.Tb.YR, {
  extend: "Ext.Component",
  Uk: "preferenceschanged",
  ov: "font-size",
  constructor: function (c) {
    this.prepareData(c);
    this.V6(c);
    this.tpl = C.k().da.ma("font-settings");
    this.callParent([c]);
  },
  initComponent: function () {
    this.callParent();
    this.on("afterrender", this.na, this);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.eb();
    this.callParent();
  },
  fb: function () {
    this.KZ();
    this.on(this.Uk, this.Ur, this);
  },
  KZ: function () {
    this.i3.on("change", this.v0, this);
  },
  hva: function () {
    this.i3.un("change", this.v0, this);
  },
  eb: function () {
    this.hva();
    this.un(this.Uk, this.Ur, this);
  },
  na: function () {
    this.D3();
    this.fb();
  },
  v0: function (c) {
    this.fontSize = Ext.get(c.getTarget()).getAttribute("value");
  },
  prepareData: function (c) {
    this.fontSize = c.fontSize;
    this.v2 = this.getData();
  },
  V6: function () {
    this.data = {
      fontSizes: this.Jla(),
      selectedSize: this.fontSize
    };
  },
  Ur: function (c) {
    this.prepareData(c);
    this.V6();
    this.tpl.overwrite(this.el, this.data);
    this.D3();
    this.KZ();
  },
  D3: function () {
    this.i3 = this.el.select(".font-size-list").first();
  },
  getData: function () {
    var c = [];
    c[this.ov] = this.fontSize;
    return c;
  },
  Qra: function () {
    this.Ur({
      fontSize: this.v2[this.ov]
    });
  },
  TK: function () {
    return this.fontSize !== this.v2[this.ov] ? !0 : !1;
  },
  Jla: function () {
    return [{
      id: "1",
      name: E.lang.qV,
      size: "7pt"
    }, {
      id: "2",
      name: E.lang.pV,
      size: "8pt"
    }, {
      id: "3",
      name: E.lang.oV,
      size: "9pt"
    }, {
      id: "4",
      name: E.lang.kV,
      size: "10pt"
    }, {
      id: "5",
      name: E.lang.lV,
      size: "12pt"
    }, {
      id: "6",
      name: E.lang.nV,
      size: "7pt"
    }, {
      id: "7",
      name: E.lang.mV,
      size: "7pt"
    }];
  }
});