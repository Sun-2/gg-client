Ext.define(E.ea.oR, {
  extend: E.ea.pf,
  name: "SystemMessagesAppBehavior",
  s8: m,
  initEvents: function () {
    this.callParent(arguments);
  },
  onAdd: function () {
    this.callParent(arguments);
    this.KK();
  },
  KK: function () {
    this.s8 = C.k().qa;

    try {
      var c = this;

      this.Ic.SYSTEM_MESSAGE = function (g) {
        try {
          return c.dka(g), {
            success: !0
          };
        } catch (b) {
          j(b);
        }
      };

      this.owner.bind("SYSTEM_MESSAGE", this.Ic.SYSTEM_MESSAGE);
    } catch (f) {}
  },
  dka: function (c) {
    if (c.text) {
      if (!(c.type == C.f.ua.wa.INFO || c.type == C.f.ua.wa.Eb || c.type == C.f.ua.wa.ERROR)) {
        c.type = C.f.ua.wa.ERROR;
      }

      c.timeout |= 0;
      this.s8.sa({
        msg: {
          id: this.owner.name + "_" + c.id,
          type: c.type,
          text: c.text,
          closable: c.closable || !1
        },
        timeout: c.timeout || 0
      });
    }
  }
});