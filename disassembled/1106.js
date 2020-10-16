Ext.define(E.f.profile.contact.fv, {
  extend: E.f.profile.iq,
  cls: "user-profile",
  Ph: function () {
    this.zt = Ext.create(E.f.profile.contact.qC, {});
    this.description = Ext.create(E.f.profile.contact.nC, {});
    this.Sc = Ext.create(E.f.profile.contact.JQ, {});
    return [this.zt, this.description, this.Sc];
  }
});