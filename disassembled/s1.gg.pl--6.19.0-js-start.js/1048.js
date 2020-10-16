Ext.define(E.f.layout.Ga.Gg.Zh, {
  extend: "Ext.Base",
  alternateClassName: ["AVConnectionProtocol"],
  statics: {
    mG: "startavcall",
    SW: "stopavcall",
    I$: "confirmcall",
    Uba: "micmuteon",
    Tba: "micmuteoff",
    b$: "cameraison",
    a$: "cameraisoff"
  },
  uj: m,
  wl: m,
  Go: m,
  Mr: m,
  p2: function (c) {
    this.uj = this.x9();
    this.wl = this.x9();
    this.Mr = c;
    return AVConnectionProtocol.mG + ":" + this.uj + "|" + this.wl + "|" + this.Mr;
  },
  Pja: function (c) {
    return AVConnectionProtocol.SW + ":" + c;
  },
  B_: function (c) {
    return AVConnectionProtocol.I$ + ":" + c;
  },
  cs: function (c) {
    c = String.fromCharCode.apply(m, c).split(":");
    this.Go = c[0];
    this.Go === AVConnectionProtocol.mG ? (c = c[1].split("|"), this.uj = c[0], this.wl = c[1], this.Mr = c[2]) : this.uj = c[1];
  },
  isDestroyed: function () {
    return this.Go === AVConnectionProtocol.SW;
  },
  isStarted: function () {
    return this.Go === AVConnectionProtocol.mG;
  },
  PAa: x("uj"),
  QAa: x("wl"),
  YAa: x("Mr"),
  TCa: function (c) {
    return AVConnectionProtocol.Uba + ":" + c;
  },
  SCa: function (c) {
    return AVConnectionProtocol.Tba + ":" + c;
  },
  SZ: function (c) {
    return AVConnectionProtocol.b$ + ":" + c;
  },
  Sfa: function (c) {
    return AVConnectionProtocol.a$ + ":" + c;
  },
  x9: function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var f = Math.random() * 16 | 0;
      return (c == "x" ? f : f & 3 | 8).toString(16);
    });
  }
});