C.ca.xa = {
  Iv: /(?:(?:(?:(?:ftp|https?:\/\/)|(?:www\.))|(?:(?:[\w-.]+)(?::[\w-.]+)?(?:@)))((?:[\w-]+\.)+(?:[a-z]{2,})){1}(?::\d+)?(?:[\/#?](?:[^<>"\s']*)*)?)/ig,
  zS: /^[^\/:]+@[\w\-\.]+$/,
  qba: /^[-A-Z0-9._%+]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  rba: /^(ftp|https?:\/\/)/i,
  ni: {
    261: 97,
    281: 101,
    347: 115,
    322: 108,
    380: 122,
    378: 122.1,
    263: 99,
    324: 110
  },
  g2: {
    "\u0105": "(\u0105|a)",
    "\u0107": "(\u0107|c)",
    "\u0119": "(\u0119|e)",
    "\u0142": "(\u0142|l)",
    "\u00f3": "(\u00f3|o)",
    "\u015b": "(\u015b|s)",
    "\u017c": "(\u017c|z)",
    "\u017a": "(\u017a|z)",
    a: "(a|\u0105)",
    c: "(c|\u0107)",
    e: "(e|\u0119)",
    l: "(l|\u0142)",
    o: "(o|\u00f3)",
    s: "(s|\u015b)",
    z: "(z|\u017a|\u017c)"
  },
  split: function (c, p, o) {
    var o = typeof o === "undefined" ? !0 : o,
        n = 0,
        f = [];
    c.replace(p, function (h, g, b) {
      (h = n == 0 && b > 0 ? c.substr(n, b) : c.substr(n, b - n)) && f.push(h);
      o && f.push(c.substr(b, g.length));
      n = b + g.length;
    });
    (p = c.substr(n, c.length - n)) && n < c.length && f.push(p);
    return f;
  },
  du: function (c, q) {
    for (var p = Math.min(c.length, q.length), o, f, c = c.toLowerCase(), q = q.toLowerCase(), u = 0; u < p; u++) {
      if (o = c.charCodeAt(u), typeof this.ni[o] != "undefined" && (o = this.ni[o] + 0.5), f = q.charCodeAt(u), typeof this.ni[f] != "undefined" && (f = this.ni[f] + 0.5), o != f) {
        return o - f;
      }
    }

    return c.length - q.length;
  },
  op: function (c) {
    return this.qba.test(c);
  },
  eBa: function (c, n, l, f) {
    if (!c) {
      return "";
    }

    l = typeof l !== "undefined" ? l : !0;
    f = typeof f !== "undefined" ? f : !1;
    return c.replace(/&#x2F;/mg, "/").replace(this.Iv, function (e, h) {
      if (e.match(this.zS)) {
        return '<a class="domain-link" href="mailto:' + e + '">' + e + "</a>";
      } else {
        if (f) {
          return h.replace(/^www\./, "");
        } else {
          var g = "",
              g = this.pp(e) ? "_self" : "_blank";
          return '<a target="' + g + '" class="domain-link" title="' + this.Xe(e) + '" href="' + this.Xe(e) + '">' + (n && l ? "[" : "") + (n ? h.replace(/^www\./, "") + (n && l ? "]" : "") : e) + "</a>";
        }
      }
    }.bind(this));
  },
  fBa: function (c, n, l, f) {
    if (!c) {
      return "";
    }

    l = typeof l !== "undefined" ? l : !0;
    f = typeof f !== "undefined" ? f : !1;
    return c.replace(/&#x2F;/mg, "/").replace(this.Iv, function (e, h) {
      if (e.match(this.zS)) {
        return '<a class="domain-link" href="mailto:' + e + '">' + e + "</a>";
      } else {
        if (f) {
          return h.replace(/^www\./, "");
        } else {
          var g = "",
              g = this.pp(e) ? "_self" : "_blank";
          return '<a target="' + g + '" class="domain-link" title="' + this.Xe(e) + '" href="' + this.Xe(e) + '">' + (n && l ? "[" : "") + (n ? h.replace(/^www\./, "") + (n && l ? "]" : "") : e) + "</a>";
        }
      }
    }.bind(this));
  },
  ce: function (c) {
    var f = "";

    if (!c) {
      return "";
    }

    c.replace(/&#x2F;/mg, "/").replace(this.Iv, function (e, g) {
      f = g.replace(/^www\./, "");
    }.bind(this));
    return f;
  },
  Xe: function (c) {
    if (c !== "" && !c.match(this.rba)) {
      return "http://" + c;
    }

    return c;
  },
  wd: function (c, n, l, f) {
    if (!c) {
      return "";
    }

    c = this.mZ(c, f);
    return c.replace(/&#x2F;/mg, "/").replace(this.Iv, function (e) {
      e = e.replace(/&amp;/g, "&");
      return this.qc(e, m, n, l);
    }.bind(this));
  },
  Z6: function (c, h) {
    var f = "";
    c.indexOf("%s") !== -1 && (f = c.replace("%s", h));
    return f || c;
  },
  LCa: function (c) {
    return c ? c.toString().length == 1 ? "0" + c : c : "00";
  },
  FAa: function (c, h) {
    switch (h) {
      case "stn-ignored":
        var f = E.lang.$xa;
    }

    c = c || 0;

    if (c == 1) {
      return f[0];
    }

    if (c == 2 || c == 3 || c == 4) {
      return f[1];
    }

    if (c % 100 > 10 && c % 100 < 20) {
      return f[2];
    }

    switch (c % 10) {
      case 2:
      case 3:
      case 4:
        return f[1];

      default:
        return f[2];
    }
  },
  aK: function (c, n, l, f) {
    if (c == 1) {
      return n;
    } else {
      if (c % 100 > 10 && c % 100 <= 20) {
        return f;
      }
    }

    c %= 10;

    if (c == 2 || c == 3 || c == 4) {
      return l;
    }

    return f;
  },
  GAa: function (c, f) {
    c = c || 0;

    if (c == 1) {
      return f[0];
    }

    if (c == 2 || c == 3 || c == 4) {
      return f[1] || f[f.length - 1];
    }

    if (c % 100 > 10 && c % 100 < 20) {
      return f[2] || f[f.length - 1];
    }

    switch (c % 10) {
      case 2:
      case 3:
      case 4:
        return f[1] || f[f.length - 1];

      default:
        return f[2] || f[f.length - 1];
    }
  },
  Et: function (c) {
    return c.replace(/&(?![a-z0-9#]+;)/gi, "&amp;");
  },
  Dka: function (c) {
    if (!arguments.callee.B7) {
      arguments.callee.B7 = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)", "g");
    }

    return c.replace(arguments.callee.B7, "\\$1");
  },
  f2: function (c) {
    for (var n = "", l = c.length; l > -1; l--) {
      var f = c.charAt(l),
          n = this.g2[f] ? this.g2[f] + n : f + n;
    }

    return n;
  },
  pp: function (c) {
    var f = "^" + window.location.protocol.slice(0, -1) + "://" + window.location.hostname + "(/?(#(.+)?)?)$";

    if (RegExp(f).test(c)) {
      return !0;
    }

    return !1;
  },
  cma: function (c) {
    c = c.split("#");
    return c[1] ? c[1] : "";
  },
  mCa: function (c, f) {
    return C.ca.xa.pp(c) && c.indexOf("app/" + f) != -1 ? !0 : !1;
  },
  qc: function (c, z, u, o) {
    var f = ["class", "title", "id", "rel", "target"],
        o = o || [],
        u = u || {},
        c = c || m;
    c === m && j(Error("Empty url"));
    var z = z || c,
        B = "";
    (u = Ext.clone(u)) && u["class"] ? u["class"] += " sr-anchor" : u["class"] = "sr-anchor";
    u && !u.target && (u.target = this.pp(c) ? "_self" : "_blank");

    for (var y in u) {
      if (u.hasOwnProperty(y)) {
        var w = u[y];
        y && w && f.indexOf(y) !== -1 && (B += y + '="' + eha(w) + '"');
      }
    }

    B.length > 0 && (B = " " + B);
    z = this.mZ(z, o);
    c = this.op(c) ? "mailto:" + c : this.Xe(c);
    return "<a" + B + ' href="' + eha(c) + '">' + z + "</a>";
  },
  mZ: function (c, p) {
    for (var p = p || [], o = 0, n = p.length; o < n; o++) {
      var f = p[o];
      typeof f === "function" && (f = {
        fn: f,
        scope: this
      });

      if (f && f.fn && typeof f.fn === "function") {
        if (typeof f.args === "undefined" || f.args.length === 0) {
          f.args = [];
        }

        f.args.unshift(c);
        c = f.fn.apply(f.scope || this, f.args);
      }
    }

    return c;
  },
  bg: function (c) {
    return "[" + c + "]";
  }
};