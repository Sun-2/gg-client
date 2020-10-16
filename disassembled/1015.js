Ext.define(E.f.Uc.mC, {
  Tda: {
    ignore: E.f.Uc.hE,
    unignore: E.f.Uc.TG,
    enableContactAOL: E.f.Uc.SC,
    disableContactAOL: E.f.Uc.GC
  },
  constructor: function () {
    this.callParent(arguments);
  },
  createPopup: function (c, f) {
    f = f || {};
    return Ext.create(this.Tda[c], f);
  }
});