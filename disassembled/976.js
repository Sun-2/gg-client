Ext.define(E.f.layout.va.hb.wC, {
  extend: C.f.pd,
  mixins: {
    ka: C.core.mixins.Td
  },
  ka: {
    ".search-clear-filter-btn": function () {
      this.reset();
    }
  },
  componentCls: "contactspicker-form-search-field",
  name: "contactspicker-form-search-field",
  aE: "#contacts-picker-searchfield-input",
  qca: ".search-clear-filter-btn",
  jv: "searchfield-changed",
  PC: "searchfield-escape-pressed",
  constructor: function () {
    this.data = {};
    this.tpl = C.k().da.ma("contacts-picker-search-field");
    this.callParent(arguments);
    this.mixins.ka.constructor.call(this, {});
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
    this.input = Ext.get(this.el.query(this.aE)[0]);
    this.WH = Ext.get(this.el.query(this.qca)[0]);
    this.fb();
  },
  fb: function () {
    this.input.on("keyup", this.Tr, this);
  },
  eb: function () {
    this.input.un("keyup", this.Tr, this);
  },
  Tr: function (c) {
    this.getValue() ? this.WH.removeCls("d-none") : this.WH.addCls("d-none");
    c.keyCode === 27 ? (this.reset(), this.fireEvent(this.PC)) : this.fireEvent(this.jv);
  },
  getValue: function () {
    return Ext.String.trim(this.input.dom.value);
  },
  Rf: function (c) {
    this.input.dom.value = c;
  },
  reset: function () {
    this.Rf("");
    this.WH.addCls("d-none");
    this.fireEvent(this.jv);
  }
});