Ext.define(E.f.layout.Ga.AQ, {
  extend: "Ext.Component",
  renderTo: m,
  html: "&nbsp",
  parentEl: m,
  lDa: m,
  az: m,
  ld: m,
  vl: m,
  constructor: function (c) {
    c = c || {};
    Ext.apply(this, c);
    this.az = c.body;
    this.Bh = c.Bh;
    this.parentEl = this.renderTo;
    this.h5 = ~~this.az.getHeight();
    this.ld = Ext.data.StoreManager.lookup("InvitationsMineStore");
    this.vl = E.api.Ob;
    this.callParent(arguments);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.el.un("click", this.q0, this);
    this.hide();
  },
  na: function () {
    this.show();
    this.el.on("click", this.q0, this);
  },
  q0: function (c) {
    c.getTarget(".cancel-invitation") !== m && ((c = this.ld.Om[this.Bh]) && this.vl.Nm({
      Im: "user",
      Hm: c.get("recipient").id,
      Ch: c,
      status: "cancelled"
    }), this.destroy());
  },
  show: function () {
    this.parentEl.removeCls("d-none");
    this.az.setHeight(this.h5 - 29);
  },
  hide: function () {
    this.parentEl.addCls("d-none");
    this.parentEl.dom.innerHTML = "";
    this.az.setHeight(this.h5);
  }
});