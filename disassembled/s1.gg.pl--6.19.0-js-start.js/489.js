sunrise.extend(gg.aa.protocol.ba.me, {
  wB: function () {
    var c = {},
        f;

    for (f in gg.aa.protocol.ba.Ec) {
      /^CAPS_/.test(f) && (c[f] = gg.aa.protocol.ba.Ec[f]);
    }

    return c;
  }(),
  K6: function (c) {
    var h = {},
        f;

    for (f in this.wB) {
      (c & this.wB[f]) === this.wB[f] && (h[f] = !0);
    }

    return h;
  },
  t3: function () {
    return O.CAPS_WEB_APP | O.CAPS_PING_PONG;
  }
});