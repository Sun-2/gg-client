Ext.define(E.f.layout.Ga.rd.dC, {
  extend: E.f.layout.Ga.Xu,
  cls: "chat-accordion-item",
  mI: "chat-accordion-item-closed",
  LL: "chat-accordion-conference-item-opened",
  mixins: {
    ea: C.core.mixins.kb
  },
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.callParent([c]);
    this.data = {
      uin: this.Aa,
      user: this.getUserData(this.Aa)
    };
  },
  tL: function () {
    this.Xd.getActiveAnimation() || this.Xd.addCls("message-blink");
  },
  D5: function () {
    this.Xd.removeCls("message-blink");
    this.Xd.getActiveAnimation() && this.Xd.stopAnimation();
  },
  cZ: A("conference-manager-settings-toolbar")
});