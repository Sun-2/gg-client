sunrise.extend(gg.core.Wk, {
  BF: "__",
  ve: "_",
  storage: {},
  li: 0,
  Fw: function (c, n) {
    for (var n = typeof n != "undefined" ? n : !0, c = c == "/" || typeof c === "undefined" ? [""] : c.split("/"), l = this.storage, f = 0; f < c.length; f++) {
      if (typeof l[c[f]] == "undefined") {
        if (n) {
          l[c[f]] = {}, l[c[f]][this.BF] = l, l[c[f]][this.ve] = {};
        } else {
          break;
        }
      }

      l = l[c[f]];
    }

    return l;
  },
  Eda: function () {
    return this.li++;
  },
  KBa: function (c) {
    return this.Fw(c, !0);
  },
  Ka: function (c, h, f) {
    c = this.Fw(c);

    if (typeof c[this.ve][f] == "undefined") {
      return c[this.ve][f] = h, 0;
    }

    typeof c[this.ve][f] == "function" && (c[this.ve][f] = [c[this.ve][f]]);
    c[this.ve][f].push(h);
    return c[this.ve][f].length;
  },
  Na: function (c, n) {
    var l = this.Fw(c);

    if (typeof l[this.ve] == "undefined" || typeof l[this.ve][n] == "undefined") {
      return !1;
    }

    try {
      delete l[this.ve][n];
    } catch (f) {
      l[this.ve][n] = m;
    }
  },
  Pda: function (c, z, u) {
    for (var o = this.mh != "";;) {
      if ((!o || !this.mh.test(z)) && typeof c[this.ve] != "undefined") {
        var f = [],
            B;

        for (B in c[this.ve]) {
          f.push(B);
        }

        for (var y = 0; y < f.length; y++) {
          if (B = c[this.ve][f[y]], typeof B == "function") {
            if (B.apply(m, u) === !1) {
              return;
            }
          } else {
            for (var y = 0, w = B.length; y < w; y++) {
              if (B[y].apply(m, u) === !1) {
                return;
              }
            }
          }
        }
      }

      if (typeof c[this.BF] == "undefined") {
        break;
      }

      c = c[this.BF];
      z = z.substring(0, z.lastIndexOf("/"));
      z == "" && (z = "/");
    }
  },
  trigger: function (c, h) {
    var f = this.Fw(c, !1);

    if (f === !1) {
      return !1;
    }

    this.Pda(f, c, h);
  },
  nr: {},
  mh: "",
  ignore: function (c, f) {
    this.nr[c] = f;
    this.fZ();
    return !0;
  },
  mn: function (c) {
    if (typeof this.nr[c] == "undefined") {
      return !1;
    }

    delete this.nr[c];
    this.fZ();
    return !0;
  },
  fZ: function () {
    this.mh = "";

    for (var c in this.nr) {
      this.mh += this.nr[c] ? "(" + c + ")|" : "(" + c.replace("*", ".+") + ")|";
    }

    this.mh = this.mh.substring(0, this.mh.length - 1);

    if (this.mh != "") {
      this.mh = RegExp("^" + this.mh + "$");
    }
  }
});