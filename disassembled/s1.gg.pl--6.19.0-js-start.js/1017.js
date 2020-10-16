Ext.define(E.f.layout.Ga.rd.aC, {
  extend: E.f.layout.Ga.Yu,
  nf: "chat-conference-infobox-unknown-conference",
  ka: Ext.apply({
    ".conference-add": function (c) {
      C.Ca("conference-profile/" + this.tg.pb.get("uin") + "/add");
      c.preventDefault();
      return !0;
    },
    ".close-msg-btn": function (c) {
      c.preventDefault();
      this.destroy();
    }
  }, E.f.layout.Ga.Yu.prototype.ka),
  initComponent: function () {
    this.callParent();
    this.tg.pb.on("datachanged", this.Ej, this);
  },
  destroy: function () {
    this.tg.pb.un("datachanged", this.Ej, this);
    this.callParent();
  },
  Ej: function (c, h, f) {
    "visible" === h && f === !0 && this.destroy();
  }
});