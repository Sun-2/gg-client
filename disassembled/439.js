sunrise = {
  extend: function (c, n) {
    try {
      for (var l in n) {
        c[l] = n[l];
      }

      return c;
    } catch (f) {}
  },
  setCookie: function (c, w) {
    var q = arguments,
        o = arguments.length,
        f = o > 2 ? q[2] : m,
        y = o > 3 ? q[3] : "/",
        u = o > 4 ? q[4] : m;
    document.cookie = c + "=" + escape(w) + (f === m ? "" : "; expires=" + f.toGMTString()) + (y === m ? "" : "; path=" + y) + (u === m ? "" : "; domain=" + u) + ((o > 5 ? q[5] : !1) === !0 ? "; secure" : "");
  },
  lm: function (c) {
    c += "=";

    for (var p = c.length, o = document.cookie.length, n = 0, f = 0; n < o;) {
      f = n + p;

      if (document.cookie.substring(n, f) == c) {
        return this.getCookieVal(f);
      }

      n = document.cookie.indexOf(" ", n) + 1;

      if (n === 0) {
        break;
      }
    }

    return m;
  },
  clearCookie: function (c, f) {
    if (this.lm(c)) {
      document.cookie = c + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=" + (f || "/");
    }
  },
  getCookieVal: function (c) {
    var f = document.cookie.indexOf(";", c);

    if (f == -1) {
      f = document.cookie.length;
    }

    return unescape(document.cookie.substring(c, f));
  }
};