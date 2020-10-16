E.ca.Cc = {
  Is: function (c) {
    c = new Date(c * 1000);
    return Ext.Date.format(c, "j") + " " + E.lang.DATE.Wn[c.getMonth()] + " " + Ext.Date.format(c, "G:i");
  },
  M3: function (c, q) {
    var q = typeof q !== "undefined" ? q : !0,
        p = new Date(c * 1000),
        o = p.getFullYear(),
        f = new Date().getFullYear(),
        u = Ext.Date.format(p, "j") + " ";
    o != f ? (u += q ? E.lang.DATE.Wn[p.getMonth()] : E.lang.DATE.XE[p.getMonth()], u += " " + o) : u += E.lang.DATE.XE[p.getMonth()];
    return u;
  },
  vy: function (c, p) {
    var o = new Date(c * 1000),
        n = Ext.Date.clearTime(o, !0),
        f = Ext.Date.clearTime(new Date(C.k().pg.getTime() * 1000)),
        n = Math.round((f.getTime() - n.getTime()) / 1000 / 86400);

    if (n == 0) {
      return (p && p === !0 ? E.lang.DATE.OG + ", " : "") + Ext.Date.format(o, "G:i");
    } else {
      if (n == 1) {
        return E.lang.DATE.dH + ", " + Ext.Date.format(o, "G:i");
      } else {
        if (n > 0 && n < 7) {
          return E.lang.DATE.OQ[o.getDay()] + ", " + Ext.Date.format(o, "G:i");
        }
      }
    }

    return E.ca.Cc.M3(c) + ", " + Ext.Date.format(o, "G:i");
  },
  cK: function (c, h) {
    var f = this.vy(c, h);
    f || (f = this.Is(c));
    return f;
  },
  mBa: function (c) {
    return Ext.Date.format(c, "j") + " " + E.lang.DATE.Wn[c.getMonth()] + " " + Ext.Date.format(c, "Y G:i");
  },
  L3: function (c) {
    Ext.isNumber(c) && (c = new Date(c));
    return E.lang.DATE.NQ[c.getDay()];
  },
  pla: function (c) {
    var h,
        f = Ext.Date.format;
    c ? c.length > 11 ? c = parseInt(c) : c *= 1000 : h = new Date();
    !h && (h = new Date(c));
    return f(h, "G:i") + ", " + f(h, "j.m.Y");
  },
  ny: function (c, p) {
    var o,
        n,
        f,
        p = p || !1;
    c ? c.length > 11 ? c = parseInt(c) : c *= 1000 : o = new Date();
    !o && (o = new Date(c));
    n = Ext.Date.clearTime(o, !0);
    f = Ext.Date.clearTime(new Date(C.k().pg.getTime() * 1000));
    n = Math.round((f.getTime() - n.getTime()) / 1000 / 86400);
    return n == 0 ? p === !0 ? E.lang.DATE.OG + ", " + Ext.Date.format(o, "G:i") : Ext.Date.format(o, "G:i") : n == 1 ? E.lang.DATE.dH + ", " + Ext.Date.format(o, "G:i") : n < 365 ? Ext.Date.format(o, "j") + " " + E.lang.DATE.Wn[o.getMonth()] + ", " + Ext.Date.format(o, "G:i") : Ext.Date.format(o, "j") + " " + E.lang.DATE.Wn[o.getMonth()] + " " + Ext.Date.format(o, "Y") + ", " + Ext.Date.format(o, "G:i");
  },
  KAa: function (c) {
    var c = c / 1000 | 0,
        f = new Date();
    f.setHours("00");
    f.setMinutes("00");
    f.setSeconds("01");
    f.setMilliseconds("00");
    f.setTime(f.getTime() + c * 1000);
    return Ext.Date.format(f, "H:i:s").replace(/^00\:/, "");
  },
  N3: function (c) {
    return Ext.Date.format(new Date(c * 1000), "H:i");
  },
  hBa: function (c) {
    var h = new Date(),
        c = new Date(c),
        h = c = (h - c) / 60000,
        f = "",
        f = h % 10;

    if (h < 1) {
      return E.lang.sP;
    } else {
      f = h < 2 ? E.lang.rP : (h < 10 || h > 20) && f >= 2 && f < 5 ? f = E.lang.pP : E.lang.qP;
    }

    if (c > 60) {
      h /= 60, f = h % 10, f = h < 2 ? E.lang.mP : (h < 10 || h > 20) && f >= 2 && f < 5 ? f = E.lang.kP : E.lang.lP;
    }

    c > 1440 && (h /= 24, f = h < 2 ? E.lang.fP : E.lang.eP);
    c > 43920 && (h /= 30.5, f = h < 2 ? E.lang.vP : h >= 2 && h <= 4 ? E.lang.tP : E.lang.uP);
    c > 525600 && (h /= 365, f = h < 2 ? E.lang.Lu : h >= 2 && h <= 4 ? E.lang.Ku : E.lang.sq);
    return ~~h + " " + f + " " + E.lang.ZO;
  }
};