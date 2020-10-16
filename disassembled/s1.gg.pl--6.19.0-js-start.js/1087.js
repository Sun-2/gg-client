Ext.define(E.f.profile.contact.JQ, {
  extend: E.f.profile.nu,
  Dv: E.api.ub.ic.Nd.of,
  R3: r(),
  hc: function (c, h, f) {
    this.callParent(arguments);

    if (this.ek(c)) {
      this.buttons && (this.buttons.destroy(), delete this.buttons);
    } else {
      if (!this.buttons) {
        this.buttons = Ext.create(E.f.profile.contact.lj, {
          cls: "d-none",
          renderTo: this.el.select(".user-data-btns").first()
        });
      }

      this.buttons.Pg(c, h, f);
    }

    this.Gc(c.rm());
  },
  Gc: function (c) {
    this.buttons && this.buttons.removeCls("d-none");
    var f = this.el.select(".aol-start-chat").elements[0];
    f && (c ? Ext.get(f).addCls("start-chat-ignored") : Ext.get(f).removeCls("start-chat-ignored"));
  }
});