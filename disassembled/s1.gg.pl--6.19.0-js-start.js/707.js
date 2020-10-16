sunrise.extend(gg.aa.protocol.ba.Te, {
  Bv: !1,
  transport: m,
  yx: m,
  connect: function (c) {
    sunrise.clearCookie("[[sid_gg__0]]");

    if (this.Bv) {
      this.transport = gg.aa.protocol.ba.Cv, this.transport.connect(), this.yx = this.transport.getName();
    } else {
      this.transport = gg.aa.protocol.ba.rj;

      try {
        this.transport.connect(c), this.yx = this.transport.getName();
      } catch (f) {
        gg.aa.protocol.ba.Te.Bv = !0, gg.aa.protocol.ba.Te.connect(), this.yx = this.transport.getName();
      }
    }
  },
  send: function (c) {
    this.transport.send(c);
  },
  disconnect: function () {
    if (this.transport) {
      this.transport.disconnect(), this.transport = m;
    }
  },
  receive: function (c) {
    this.KL(c);
  },
  KL: t(),
  g4: x("yx")
});