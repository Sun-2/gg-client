sunrise.extend(gg.aa.BinaryParser.prototype, {
  sj: function (c, q) {
    c < 0 && (c += Math.pow(2, q * 8));

    for (var p = "", o = 0, f = Math.pow(256, q - 1); o < q; o++, f /= 256) {
      var u = Math.floor(c / f),
          p = String.fromCharCode(u) + p;
      c -= u * f;
    }

    return p;
  },
  je: function (c, p) {
    for (var o = 0, n = 0, f = 1; n < p; n++, f *= 256) {
      o += c.charCodeAt(n) * f;
    }

    return o;
  },
  pack: function (c) {
    var w = "",
        q;

    for (q in c) {
      var o = c[q][0];

      switch (c[q][1]) {
        case gg.aa.BinaryParser.ib.pa:
        case gg.aa.BinaryParser.ib.lr:
          w += this.sj(o, 4);
          break;

        case gg.aa.BinaryParser.ib.kl:
          w += this.sj(o, 2);
          break;

        case gg.aa.BinaryParser.ib.Qb:
          w += o instanceof String ? o : String.fromCharCode(o);
          break;

        case gg.aa.BinaryParser.ib.Rb:
          w += this.sj(parseInt(o.substr(o.length / 2), 16), 4);
          w += this.sj(parseInt(o.substr(0, o.length / 2), 16), 4);
          break;

        case gg.aa.BinaryParser.ib.STRING:
          w += o;
          break;

        case gg.aa.BinaryParser.ib.Yf:
          w += this.sj(("" + o).length, 4);
          w += o;
          break;

        case gg.aa.BinaryParser.ib.Fv:
          w += this.pack({
            key: [o.key, gg.aa.BinaryParser.ib.Yf],
            value: [o.value, gg.aa.BinaryParser.ib.Yf]
          });
          break;

        case gg.aa.BinaryParser.ib.xS:
          var f = 0,
              y = "";

          for (q in o) {
            o.hasOwnProperty(q) && (++f, y += this.pack({
              entry: [o[q], gg.aa.BinaryParser.ib.Fv]
            }));
          }

          w += this.sj(f, 4);
          w += y;
          break;

        case gg.aa.BinaryParser.ib.Gv:
          w += this.pack({
            key: [o.key, gg.aa.BinaryParser.ib.Yf],
            value: [o.value, gg.aa.BinaryParser.ib.Yf],
            de: [o.de, gg.aa.BinaryParser.ib.pa]
          });
          break;

        case gg.aa.BinaryParser.ib.mj:
          f = 0;
          y = "";

          for (q in o) {
            if (o.hasOwnProperty(q)) {
              ++f;
              var u = this.pack({
                entry: [o[q], gg.aa.BinaryParser.ib.Gv]
              });
              y += u;
            }
          }

          w += this.sj(f, 4);
          w += y;
          break;

        case gg.aa.BinaryParser.ib.Aw:
          w += this.pack({
            yb: [o.yb, gg.aa.BinaryParser.ib.pa],
            de: [o.de, gg.aa.BinaryParser.ib.pa]
          });
          break;

        case gg.aa.BinaryParser.ib.ki:
          f = 0;
          y = "";

          for (q in o) {
            o.hasOwnProperty(q) && (++f, y += this.pack({
              entry: [o[q], gg.aa.BinaryParser.ib.Aw]
            }));
          }

          w += this.sj(f, 4);
          w += y;
      }
    }

    return w;
  },
  Oc: function (G, D, B) {
    var z = {},
        y = typeof B != "undefined" ? this.ko : 0,
        o;

    for (o in D) {
      switch (typeof D[o] == "string" ? D[o] : D[o][0]) {
        case gg.aa.BinaryParser.ib.Rb:
          var f = this.je(G.substr(y, 4), 4);
          y += 4;
          var c = this.je(G.substr(y, 4), 4);
          z[o] = "" + c + ("" + f);
          y += 4;
          z[o] = Int64.from32bitPair(c, f).toString();
          break;

        case gg.aa.BinaryParser.ib.pa:
          z[o] = this.je(G.substr(y, 4), 4);
          y += 4;
          break;

        case gg.aa.BinaryParser.ib.kl:
          z[o] = this.je(G.substr(y, 2), 2);
          y += 2;
          break;

        case gg.aa.BinaryParser.ib.lr:
          z[o] = this.je(G.substr(y, 4), 4);
          y += 4;
          break;

        case gg.aa.BinaryParser.ib.Qb:
          z[o] = G.substr(y, 1).charCodeAt(0);
          y += 1;
          break;

        case gg.aa.BinaryParser.ib.STRING:
          f = D[o][1];
          z[o] = G.substr(y, f);
          y += f;
          break;

        case gg.aa.BinaryParser.ib.Yf:
          f = this.je(G.substr(y, 4), 4);
          y += 4;
          f > 0 ? (z[o] = G.substr(y, f), y += f) : z[o] = "";
          break;

        case gg.aa.BinaryParser.ib.Fv:
          c = this.je(G.substr(y, 4), 4);
          y += 4;
          f = G.substr(y, c);
          y += c;
          var L = this.je(G.substr(y, 4), 4);
          y += 4;
          c = G.substr(y, L);
          y += L;
          z[o] = new gg.aa.BinaryParser.mba(f, c);
          break;

        case gg.aa.BinaryParser.ib.xS:
          f = this.je(G.substr(y, 4), 4);
          c = [];
          y += 4;

          for (L = 0; L < f; ++L) {
            var I = this.Oc(G.substr(y), {
              Hoa: gg.aa.BinaryParser.ib.Fv
            }).Hoa;
            y += 8 + I.key.length + I.value.length;
            c.push(I);
          }

          z[o] = c;
          break;

        case gg.aa.BinaryParser.ib.Gv:
          c = this.je(G.substr(y, 4), 4);
          y += 4;
          f = G.substr(y, c);
          y += c;
          L = this.je(G.substr(y, 4), 4);
          y += 4;
          c = G.substr(y, L);
          y += L;
          L = this.je(G.substr(y, 4), 4);
          y += 4;
          z[o] = new gg.aa.BinaryParser.nba(f, c, L);
          break;

        case gg.aa.BinaryParser.ib.mj:
          f = this.je(G.substr(y, 4), 4);
          c = [];
          y += 4;

          for (L = 0; L < f; ++L) {
            I = this.Oc(G.substr(y), {
              Ioa: gg.aa.BinaryParser.ib.Gv
            }).Ioa, y += 12 + I.key.length + I.value.length, c[L] = I;
          }

          z[o] = c;
          break;

        case gg.aa.BinaryParser.ib.Aw:
          f = this.je(G.substr(y, 4), 4);
          y += 4;
          L = this.je(G.substr(y, 4), 4);
          y += 4;
          z[o] = new gg.aa.BinaryParser.VG(f, L);
          break;

        case gg.aa.BinaryParser.ib.ki:
          f = this.je(G.substr(y, 4), 4);
          c = [];
          y += 4;

          for (L = 0; L < f; ++L) {
            I = this.Oc(G.substr(y), {
              jwa: gg.aa.BinaryParser.ib.Aw
            }).jwa, y += 8, c.push(I);
          }

          z[o] = c;
      }
    }

    if (typeof B != "undefined") {
      return this.ko = y, z[o];
    }

    return z;
  },
  yya: function (c, f) {
    c < f && j(Error("Brak danych"));
  },
  Zb: m,
  ko: 0,
  setBuffer: function (c) {
    this.Zb = c;
    this.ko = 0;
  },
  read: function (c) {
    return this.Oc(this.Zb, {
      t: c
    }, !0);
  },
  Ag: function (c) {
    this.ko += c;
  },
  Ufa: function (c) {
    return this.Zb.length >= this.ko + c;
  },
  getPosition: x("ko")
});