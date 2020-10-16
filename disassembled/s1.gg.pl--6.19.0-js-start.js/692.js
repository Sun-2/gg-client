sunrise.extend(gg.aa.protocol.transport.ja, {
  Iq: 1,
  taa: 2,
  zca: "/send",
  pca: "/recv",
  J$: 180000,
  U$: 210000,
  CU: 3,
  tca: 10000,
  zda: 0,
  fo: {},
  sid: 0,
  dra: function (c) {
    var f = new gg.aa.protocol.transport.ja();
    f.li = this.$Y(f);
    typeof c == "undefined" && (c = {});
    f.Mda(c);
  },
  send: function (c, h) {
    var f = new gg.aa.protocol.transport.ja();
    f.li = this.$Y(f);
    typeof h == "undefined" && (h = {});
    h.data = c;
    f.Oda(h);
  },
  nEa: v("sid"),
  Hga: function () {
    this.sid = m;
  },
  IBa: x("sid"),
  $Y: function (c) {
    this.fo[this.zda++] = c;
  },
  Nda: function (c) {
    if (typeof this.fo[c] == "undefined") {
      return !1;
    }

    try {
      delete this.fo[c];
    } catch (f) {
      this.fo[c] = m;
    }

    return !0;
  },
  Qda: function () {
    for (var c in this.fo) {
      var h = this.fo[c];
      h.bp = !0;

      try {
        h.Rc.abort();
      } catch (f) {}

      h.ke("finalization");
    }
  }
});