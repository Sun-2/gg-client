sunrise.extend(gg.aa.hj.prototype, {
  encode: function (D) {
    var B = "",
        z,
        y,
        w,
        o,
        f,
        c,
        G = 0;

    do {
      z = D.charCodeAt(G++), y = D.charCodeAt(G++), w = D.charCodeAt(G++), o = z >> 2, z = (z & 3) << 4 | y >> 4, f = (y & 15) << 2 | w >> 6, c = w & 63, isNaN(y) ? f = c = 64 : isNaN(w) && (c = 64), B = B + this.hk.charAt(o) + this.hk.charAt(z) + this.hk.charAt(f) + this.hk.charAt(c);
    } while (G < D.length);

    return B;
  },
  decode: function (c) {
    var z = "",
        u,
        o,
        f,
        B,
        y,
        w = 0;

    if (c.length === 0) {
      return z;
    }

    c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    do {
      u = this.hk.indexOf(c.charAt(w++)), o = this.hk.indexOf(c.charAt(w++)), B = this.hk.indexOf(c.charAt(w++)), y = this.hk.indexOf(c.charAt(w++)), u = u << 2 | o >> 4, o = (o & 15) << 4 | B >> 2, f = (B & 3) << 6 | y, z += String.fromCharCode(u), B != 64 && (z += String.fromCharCode(o)), y != 64 && (z += String.fromCharCode(f));
    } while (w < c.length);

    return z;
  }
});