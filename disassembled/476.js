sunrise.extend(gg.aa.protocol.ba.YG, {
  Kk: String.fromCharCode,
  V8: function (c) {
    for (var q = [], p = 0, o = c.length, f, u; p < o;) {
      f = c.charCodeAt(p++), f >= 55296 && f <= 56319 && p < o ? (u = c.charCodeAt(p++), (u & 64512) == 56320 ? q.push(((f & 1023) << 10) + (u & 1023) + 65536) : (q.push(f), p--)) : q.push(f);
    }

    return q;
  },
  dva: function (c) {
    for (var p = c.length, o = -1, n, f = ""; ++o < p;) {
      n = c[o], n > 65535 && (n -= 65536, f += this.Kk(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), f += this.Kk(n);
    }

    return f;
  },
  e_: function (c) {
    c >= 55296 && c <= 57343 && j(Error("Lone surrogate U+" + c.toString(16).toUpperCase() + " is not a scalar value"));
  },
  XI: function (c, f) {
    return this.Kk(c >> f & 63 | 128);
  },
  yka: function (c) {
    if ((c & 4294967168) == 0) {
      return this.Kk(c);
    }

    var f = "";
    (c & 4294965248) == 0 ? f = this.Kk(c >> 6 & 31 | 192) : (c & 4294901760) == 0 ? (this.e_(c), f = this.Kk(c >> 12 & 15 | 224), f += this.XI(c, 6)) : (c & 4292870144) == 0 && (f = this.Kk(c >> 18 & 7 | 240), f += this.XI(c, 12), f += this.XI(c, 6));
    f += this.Kk(c & 63 | 128);
    return f;
  },
  nwa: function (c) {
    for (var c = this.V8(c), p = c.length, o = -1, n, f = ""; ++o < p;) {
      n = c[o], f += this.yka(n);
    }

    return f;
  },
  Gp: function () {
    this.Al >= this.NH && j(Error("Invalid byte index"));
    var c = this.MH[this.Al] & 255;
    this.Al++;

    if ((c & 192) == 128) {
      return c & 63;
    }

    j(Error("Invalid continuation byte"));
  },
  tja: function () {
    var c, n, l, f;
    this.Al > this.NH && j(Error("Invalid byte index"));

    if (this.Al == this.NH) {
      return !1;
    }

    c = this.MH[this.Al] & 255;
    this.Al++;

    if ((c & 128) == 0) {
      return c;
    }

    if ((c & 224) == 192) {
      if (n = this.Gp(), n |= (c & 31) << 6, n >= 128) {
        return n;
      } else {
        j(Error("Invalid continuation byte"));
      }
    }

    if ((c & 240) == 224) {
      if (n = this.Gp(), l = this.Gp(), n = (c & 15) << 12 | n << 6 | l, n >= 2048) {
        return this.e_(n), n;
      } else {
        j(Error("Invalid continuation byte"));
      }
    }

    if ((c & 248) == 240 && (n = this.Gp(), l = this.Gp(), f = this.Gp(), n = (c & 7) << 18 | n << 12 | l << 6 | f, n >= 65536 && n <= 1114111)) {
      return n;
    }

    j(Error("Invalid UTF-8 detected"));
  },
  mwa: function (c) {
    this.MH = this.V8(c);
    this.NH = this.MH.length;
    this.Al = 0;

    for (var c = [], f; (f = this.tja()) !== !1;) {
      c.push(f);
    }

    return this.dva(c);
  }
});