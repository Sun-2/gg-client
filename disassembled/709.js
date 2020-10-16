gg.aa.protocol.ba.dJ = {
  filter: new gg.aa.hj(),
  onerror: function (c) {
    if (c.status != 200) {
      gg.aa.Eg.If() ? gg.aa.protocol.ba.ja.Qa.trigger(R.$k) : gg.aa.protocol.ba.ja.Qa.trigger(R.bi), gg.aa.protocol.ba.Te.Bv = !1;
    }
  },
  ontimeout: t(),
  onretry: t(),
  onretrydelay: t(),
  onfatalerror: function (c) {
    return gg.aa.protocol.ba.dJ.onerror(c);
  }
};