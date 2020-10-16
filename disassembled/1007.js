Ext.define(E.f.Ma.CE, {
  extend: E.f.Ma.Zf,
  ka: Ext.applyIf({
    ".preview": function () {
      C.k().sg(this.$b.xh(), this);
    }
  }, E.f.Ma.Zf.prototype.ka),
  constructor: function (c) {
    c.nf = "lifestream-event-video";
    this.callParent([c]);
  },
  M4: function () {
    Ext.create(E.services.$q, {
      Jp: this.el,
      lp: ".preview-image",
      Ep: ".peeks"
    }).ez();
  }
});