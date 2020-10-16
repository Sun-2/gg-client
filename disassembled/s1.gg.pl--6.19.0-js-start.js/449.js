sunrise.extend(gg.aa.Da, {
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
  aFa: function (c, q) {
    for (var p = Math.min(c.length, q.length), o, f, c = c.toLowerCase(), q = q.toLowerCase(), u = 0; u < p; u++) {
      if (o = c.charCodeAt(u), typeof gg.aa.Da.ni[o] != "undefined" && (o = gg.aa.Da.ni[o] + 0.5), f = q.charCodeAt(u), typeof gg.aa.Da.ni[f] != "undefined" && (f = gg.aa.Da.ni[f] + 0.5), o != f) {
        return o - f;
      }
    }

    return c.length - q.length;
  },
  rN: function (c, f) {
    f = !1;

    switch (c) {
      case "not_avail":
        return f ? O.UD : O.On;

      case "avail":
        return f ? O.zv : O.qf;

      case "busy":
        return f ? O.RD : O.Ln;

      case "invisible":
        return f ? O.TD : O.Nn;

      case "talk_to_me":
        return f ? O.VD : O.Pn;

      case "advert":
        return f ? O.iS : O.hS;

      case "dnd":
        return f ? O.SD : O.Mn;

      case "blocked":
        return O.jS;

      case "hidden":
        return O.kS;

      default:
        return f ? O.zv : O.qf;
    }
  },
  G8: function (c) {
    switch (c) {
      case O.zv:
      case O.qf:
        return "avail";

      case O.UD:
      case O.On:
        return "not_avail";

      case O.iS:
      case O.hS:
        return "advert";

      case O.RD:
      case O.Ln:
        return "busy";

      case O.TD:
      case O.Nn:
        return "invisible";

      case O.VD:
      case O.Pn:
        return "talk_to_me";

      case O.SD:
      case O.Mn:
        return "dnd";

      case O.jS:
        return "blocked";

      case O.kS:
        return "hidden";

      default:
        return "not_avail";
    }
  },
  qla: function () {
    return ["GG-Sunrise/" + _VER, "(" + ["BROWSER", gg.core.zl.name, gg.core.zl.y9].join(";") + ")", "(" + ["OS", gg.core.zl.cca, gg.core.zl.dca].join(";") + ")"].join(" ");
  }
});