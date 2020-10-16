Ext.define(E.f.profile.contact.pC, {
  extend: E.f.profile.iq,
  cls: "user-profile",
  constructor: function () {
    this.callParent(arguments);
  },
  Ph: function () {
    return [this.zt = Ext.create(E.f.profile.contact.qC, {
      Tp: !1
    }), this.mka = Ext.create(E.f.profile.contact.oC, {
      mode: this.mode
    })];
  },
  Mt: function (c) {
    this.mka.Mt(c);
  }
});