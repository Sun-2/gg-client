Ext.define(E.f.layout.Ga.rd.WB, {
  extend: E.f.layout.Ga.jj,
  cls: "chat-accordion-item",
  mI: "chat-accordion-item-closed",
  LL: "chat-accordion-item-opened",
  mixins: {
    ea: C.core.mixins.kb
  },
  vj: m,
  zo: m,
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.callParent([c]);
    this.data = {
      uin: this.Aa,
      user: this.getUserData(this.Aa)
    };
  },
  Ej: function () {
    this.callParent(arguments);

    if (C.k().Lc.FH(this)) {
      var c = Ext.getStore("ContactsStore").Ba(this.Aa);
      c && (c.get("protoInfo").friend ? C.k().Lc.show() : C.k().Lc.hide());
    }
  },
  tL: function () {
    var c = "" + this.Aa,
        f = C.k().Ja;
    c !== C.k().fa.get("uin") && !f.Rj(c) && this.Ifa();
  },
  Ifa: function () {
    var c = this;
    this.Xd.addCls("message-blink");
    var f = this.Xd.select(".user-status").first();
    this.vj ? clearInterval(this.vj) : this.zo = setInterval(function () {
      f.hasCls("blink") ? f.removeCls("blink") : f.addCls("blink");
    }, E.config.animations.status.wj.interval);
    this.vj = setTimeout(function () {
      clearInterval(c.zo);
      c.zo = m;
      f.removeCls("blink");
      c.vj = m;
    }, E.config.animations.status.wj.duration);
  },
  blink: function () {
    this.Je || this.tL();
  },
  D5: function () {
    this.Xd.removeCls("message-blink");

    if (this.zo) {
      clearInterval(this.zo), this.vj = this.zo = m, this.Xd.select(".user-status").first().removeCls("blink");
    }
  },
  cZ: A("chat-manager-settings-toolbar")
});