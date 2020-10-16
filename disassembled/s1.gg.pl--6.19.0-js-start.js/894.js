Ext.define(E.f.Tb.il, {
  extend: "Ext.view.View",
  itemSelector: ".settings-item",
  store: m,
  Iua: m,
  constructor: function (c) {
    this.da = c.da || C.k().da;
    this.tpl = this.da.ma("settings-item-list");
    this.store = c.store;
    this.Iua = {};
    this.callParent([c]);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent();
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.eb();
    this.callParent();
  },
  fb: function () {
    this.on("itemclick", this.mb, this);
    this.el.on("keyup", this.T1, this);
    this.el.on("change", this.Qr, this);
  },
  eb: function () {
    this.un("itemclick", this.mb, this);
    this.el.un("keyup", this.T1, this);
    this.el.un("change", this.Qr, this);
  },
  na: function () {
    this.fb();
  },
  mb: function (c, p, o, n, f) {
    if (f.getTarget(".settings-select")) {
      return !1;
    }

    c = p.get("extraData");
    f.getTarget(".settings-checkbox") && (Ext.get(f.getTarget(".settings-checkbox")).getAttribute("checked") === !0 ? p.set("value", "1") : p.set("value", "0"), this.Foa(p) && (this.s9(p, ""), this.XZ(p, "")));
    c.Zi && c.Zi.Vo && f.getTarget("." + c.Zi.Vo) && c.Zi.fireEvent && (this.fireEvent(c.Zi.fireEvent, p), f.stopEvent());
  },
  L8: {},
  T1: function (c, p) {
    var o = this.getRecord(c.getTarget(".settings-item")),
        n = Ext.get(p).getValue(),
        f = Ext.get(p);

    if (!this.L8[f.id]) {
      f.on("blur", function () {
        this.XZ(o, n);
        this.L8 = {};
      }, this);
    }
  },
  Qr: function (c, f) {
    c.getTarget(".settings-select") && this.ria(c, f);
  },
  ria: function (c, p) {
    var o = Ext.get(p).getValue(),
        n = this.getRecord(c.getTarget(".settings-item"));
    n.beginEdit();
    n.set("value", o);
    n.endEdit();
    var f = Ext.clone(n.get("extraData"));

    if (f.form.selected) {
      f.form.selected = o;
    }

    n.set("extraData", f);
    return !1;
  },
  XZ: function (c, h) {
    var f = Ext.clone(c.get("extraData"));
    f.form && f.form.type && f.form.type === "textarea" && this.s9(c, h);
  },
  Foa: function (c) {
    c = c.get("extraData");
    return c.form && c.form.type && c.form.type === "textarea";
  },
  s9: function (c, h) {
    var f = Ext.clone(c.get("extraData"));
    c.get("value") === "1" ? (f.form.text = h, f.form.disabled = !1) : (f.form.text = "", f.form.disabled = !0);
    c.set("extraData", f);
  },
  getSelectionModel: function () {
    var c = "SINGLE";

    if (!this.selModel) {
      this.selModel = {};
    }

    this.simpleSelect ? c = "SIMPLE" : this.multiSelect && (c = "MULTI");
    Ext.applyIf(this.selModel, {
      allowDeselect: this.allowDeselect,
      mode: c,
      enableKeyNav: !1
    });

    if (!this.selModel.events) {
      this.selModel = Ext.create("Ext.selection.DataViewModel", this.selModel);
    }

    if (!this.selModel.hasRelaySetup) {
      this.relayEvents(this.selModel, ["selectionchange", "beforeselect", "select", "deselect"]), this.selModel.hasRelaySetup = !0;
    }

    if (this.disableSelection) {
      this.selModel.locked = !0;
    }

    return this.selModel;
  }
});