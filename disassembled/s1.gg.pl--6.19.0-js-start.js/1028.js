Ext.define(E.f.windows.GroupName, {
  extend: C.f.pd,
  componentCls: "group-name",
  name: "group-name",
  aE: "#group-name",
  tS: ".group-form-text-field-input",
  qS: "group-name-error",
  error: m,
  constructor: function (c) {
    c = c || {};
    this.data = {};

    if (typeof c.disabled !== "undefined") {
      this.data.disabled = c.disabled;
    }

    this.error = !1;
    this.tpl = C.k().da.ma("group-name", this.data);
    this.callParent(arguments);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.eb();
    this.un("afterrender", this.na, this);
    this.callParent(arguments);
  },
  na: function () {
    this.input = Ext.get(this.el.query(this.aE)[0]);
    this.fb();
  },
  fb: function () {
    this.input.on("keyup", this.validate, this);
  },
  eb: function () {
    this.input.un("keyup", this.validate, this);
  },
  validate: function () {
    if (this.getValue() === "") {
      return this.Zsa(), !1;
    }

    this.ox();
    return !0;
  },
  disable: function () {
    this.input.dom.disabled = !0;
  },
  getValue: function () {
    return Ext.String.trim(this.input.dom.value);
  },
  Rf: function (c) {
    this.input.dom.value = c;
  },
  Zsa: function () {
    this.input.parent(this.tS).addCls(this.qS);
  },
  ox: function () {
    this.input.parent(this.tS).removeCls(this.qS);
  }
});