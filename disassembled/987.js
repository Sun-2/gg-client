Ext.define(E.f.layout.va.lE, {
  extend: C.f.pd,
  componentCls: "inline-edit-text",
  name: "inline-edit-text",
  ada: ".inline-edit-text-field",
  Ac: m,
  gz: m,
  offset: m,
  Pi: 0,
  vba: 30,
  multiline: !1,
  constructor: function (c) {
    c = c || {};
    this.data = {};

    if (c.maxLength) {
      this.data.maxLength = c.maxLength;
    }

    if (c.multiline) {
      this.multiline = c.multiline, this.data.multiline = this.multiline;
    }

    this.Pi = c.Pi ? c.Pi : this.vba;

    if (c.width) {
      this.data.width = c.width;
    }

    if (c.rows) {
      this.data.rows = c.rows;
    }

    this.gz = this.offset = 0;
    this.tpl = C.k().da.ma("inline-edit-text", this.data);
    this.callParent(arguments);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.eb();
    this.callParent(arguments);
  },
  na: function () {
    this.Ac = Ext.get(this.el.query(this.ada)[0]);
    this.multiline && this.joa();
    this.fb();
  },
  fb: function () {
    if (this.multiline) {
      this.Ac.on("input", this.Qr, this);
    }

    this.Ac.on("keypress", this.L0, this);
    this.Ac.on("keydown", this.K0, this);
    this.Ac.on("keyup", this.Ol, this);
    this.Ac.on("blur", this.V_, this);
  },
  eb: function () {
    this.multiline && this.Ac.un("input", this.Qr, this);
    this.Ac.un("keypress", this.L0, this);
    this.Ac.un("keydown", this.K0, this);
    this.Ac.un("keyup", this.Ol, this);
    this.Ac.un("blur", this.V_, this);
  },
  Qr: function () {
    this.GZ();
  },
  L0: function (c) {
    this.fireEvent("keypress", c);
  },
  K0: function (c) {
    this.fireEvent("keydown", c);
  },
  Ol: function (c) {
    this.fireEvent("keyup", c);
  },
  V_: function (c) {
    this.fireEvent("blur", c);
  },
  getValue: function () {
    return Ext.String.trim(this.Ac.dom.value);
  },
  Rf: function (c) {
    this.Ac.dom.value = c;
    this.multiline && this.GZ();
  },
  getOffset: function () {
    for (var c = window.getComputedStyle(this.Ac.dom, m), n = ["paddingTop", "paddingBottom"], l = 0, f = 0; f < n.length; f++) {
      l += parseInt(c[n[f]]);
    }

    return l;
  },
  GZ: function () {
    var c = 0,
        f = !1;
    this.Ac.dom.scrollHeight - this.offset > this.gz ? (this.Ac.dom.style.overflowY = "scroll", c = this.gz) : this.Ac.dom.scrollHeight - this.offset < this.O4 ? c = this.O4 : (this.Ac.dom.style.overflowY = "hidden", c = this.Ac.dom.scrollHeight - this.offset, f = !0);
    this.Ac.dom.style.height = c + "px";
    return f;
  },
  joa: function () {
    this.O4 = this.Ac.dom.clientHeight;
    this.offset = this.getOffset();
    this.rows = this.Ac.dom.rows || 1;
    this.lineHeight = this.Ac.dom.scrollHeight / this.rows - this.offset / this.rows;
    this.gz = this.lineHeight * this.Pi - this.offset;
  },
  H7: function () {
    this.Ac.dom.select();
  }
});