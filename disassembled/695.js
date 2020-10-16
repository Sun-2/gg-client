sunrise.extend(gg.aa.protocol.ba.Cv, {
  name: "HTTPMode",
  send: function (c) {
    gg.aa.protocol.transport.ja.send(c, sunrise.extend(gg.aa.protocol.ba.dJ, {
      onfinalization: function () {
        gg.aa.core.he.EA("comm.sending");
        gg.aa.protocol.ba.ja.send();
      }
    }));
  },
  connect: function () {
    gg.aa.protocol.transport.ja.Hga();
    gg.aa.protocol.transport.ja.dra(sunrise.extend(gg.aa.protocol.ba.dJ, {
      ondata: function (c) {
        gg.aa.protocol.ba.Te.KL(c);
      }
    }));
  },
  disconnect: function () {
    gg.aa.protocol.transport.ja.Qda();
  },
  getName: x("name")
});