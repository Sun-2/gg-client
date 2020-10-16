C.ca.Da = {
  app: m,
  eh: m,
  config: m,
  QY: "[0-9]{2,4}-[0-9]{2}-[0-9]{2}",
  lk: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  methods: {
    kh: "GET",
    qd: "POST"
  },
  kca: 340,
  jca: 1600,
  SM: v("app"),
  k: x("app"),
  WJ: function () {
    return this.eh || (this.eh = C.k().be.eh);
  },
  setConfig: v("config"),
  getConfig: x("config"),
  yla: function () {
    return window.location.host;
  },
  Pj: function () {
    return window.location.protocol + "//" + window.location.host;
  },
  zc: function (c) {
    var w = c.uin,
        q = c.avatar || m,
        o = c.gender,
        f = c.size,
        y = c.type;
    !o && c.user && c.user && (o = c.user.get("gender"));

    if (!w || !/^[a-z0-9]+$/.test(w)) {
      w = m;
    }

    var u = c.relative == !0 ? "" : C.ca.Da.Pj(),
        o = ~~o === 1 ? "female" : "male";

    if (!y || y != "conference") {
      y = o;
    }

    if (c.user && !c.user.rm() && c.relative) {
      return u + "/images/sr-avatar-blank-" + y + "-" + f + ".png";
    }

    if (typeof w == "undefined" || w == m || w == 0 || c.relative) {
      return u + "/images/sr-avatar-blank-" + y + "-" + f + ".png";
    }

    o = C.k().B8.avatars;
    u = y;
    y != "conference" && (u = "user");
    w = o + u + "," + w + "/s," + f + "x" + f + "?default=" + C.ca.Da.A3(y, f) + "&exist";
    c.avatar && (w = w + "&v=" + q);
    return w;
  },
  A3: function (c, f) {
    return C.ca.Da.Pj() + "/images/sr-avatar-blank-" + c + "-" + f + ".png";
  },
  yh: function (c) {
    return "/" + _VER + c;
  },
  nL: function (c, n, l, f) {
    Ext.defer(function () {
      var b = Ext.get(l);

      if (b !== m) {
        var g = b.select(".ml__file-image img").first(),
            e = new Image();

        e.onload = function () {
          g.dom.src = c;
          b.removeCls("loading");
        };

        e.onerror = function () {
          f > 0 ? (g.dom.src = n, b.addCls("loading"), c += "&_t=" + new Date().getTime(), Ext.defer(function () {
            C.ca.Da.nL(c, n, l, 0);
          }, 10000)) : (b.removeCls("loading"), g.dom.src = this.lk, g.dom.width = 60);
        };

        e.src = c;
      }
    }, f > 0 ? 500 : 0);
  },
  kBa: function (c, h) {
    var f = C.k().Vl + "/image/converted?src_path=" + encodeURIComponent(c) + "&dim=80x60&format=png&rotate=auto";
    C.ca.Da.nL(f, C.ca.Da.Pj() + "/images/loader_30_2.gif", h, 1);
    return C.ca.Da.lk;
  },
  Tla: function (c, n, l, f) {
    n = n || this.kca;
    l = l || this.jca;
    c = C.k().Vl + "/image/converted?src_path=" + encodeURIComponent(c) + "&dim=" + n + "x" + l + "&format=png&rotate=auto";
    C.ca.Da.nL(c, C.ca.Da.Pj() + "/images/loader_30_2.gif", f, 1);
    return C.ca.Da.lk;
  },
  xL: function (c) {
    c = C.k().Iy.V3(c || !1);
    typeof c !== "undefined" && c !== m ? this.Ca(c) : this.Ca("");
  },
  Ca: function (c, q, p) {
    if (p) {
      window.open("#" + c);
    } else {
      try {
        var q = q || m,
            o = this.WJ(),
            f = o.Z3(c);
        o.rta(f.name, q);
        Ext.History.add(c);
      } catch (u) {}
    }
  },
  vs: function (c) {
    try {
      C.k().be.execute({
        token: c
      });
    } catch (f) {}
  },
  SDa: function (c) {
    var f = ["name", "surname", "nick", "birth", "gender", "about", "district", "city", "postcode", "pets", "music", "movies", "books", "privacy", "adultcontent", "email", "phone", "cellphone", "wwwUrl"];
    c.each(function (e) {
      f.each(function (b) {
        e[b] && e[b]._content && (e[b]._content = eha(e[b]._content));
      });
    });
    return c;
  },
  Zy: function (c, h, f) {
    return c ? (h || "") + c + (f || "") : "";
  },
  yCa: function (c) {
    c != "" && !c.match(/:\/\//) && (c = "http://" + c);
    return this.Zy.apply(this, arguments);
  },
  f4: function (c) {
    c = parseInt(c);

    if (c > 10 && c < 20) {
      return 2;
    }

    if (c == 1) {
      return 0;
    }

    switch (c % 10) {
      case 2:
        return 1;

      case 3:
        return 1;

      case 4:
        return 1;

      default:
        return 2;
    }
  },
  $ia: function (c, h) {
    if (c) {
      if (typeof h !== "undefined" || h === !0) {
        c = c.toString();

        if (!RegExp(this.QY).test(c)) {
          return "";
        }

        var f = c.substring(0, 10).split("-");
        f[1] = parseInt(f[1]) - 1;
        f[2] = parseInt(f[2]);
        f = new Date(new Date() - new Date(f[0], f[1], f[2])).getFullYear() - 1970;
      } else {
        if (!Ext.isNumeric(c) && !RegExp(this.QY).test(c)) {
          return "";
        }

        f = new Date(new Date() - new Date(c)).getFullYear() - 1970;
      }

      return f || "";
    } else {
      return "";
    }
  },
  NEa: function (c) {
    switch (c) {
      case "1":
        return "not_avail";

      case "2":
        return "avail";

      case "3":
        return "busy";

      case "4":
        return "avail";

      case "5":
        return "busy";

      case "14":
        return "invisible";

      case "15":
        return "not_avail";

      case "16":
        return "invisible";

      case "17":
        return "talk_to_me";

      case "18":
        return "talk_to_me";

      case "21":
        return "dnd";
    }
  },
  MEa: function (c) {
    switch (c) {
      case "avail":
        return 2;

      case "talk_to_me":
        return 17;

      case "busy":
        return 3;

      case "dnd":
        return 21;

      case "invisible":
        return 14;

      case "not_avail":
        return 1;
    }
  },
  y5: function (c, z, u) {
    for (var o = [], f = 0, B = 0, y = c.length, w = ""; f < y; f++) {
      w = z.call(u, c[f], f, c), w !== m && (o[B] = w, B++);
    }

    return o;
  },
  Sy: function (c, h) {
    h = h || {};
    h.link = h.link || Ext.String.format(E.lang.PQ, '<a class="external-link" target="_blank" href="http://get.adobe.com/flashplayer/">' + E.lang.zR + "</a>");
    h.label = h.label || "";

    if (swfobject.hasFlashPlayerVersion(c)) {
      return !0;
    } else {
      var f = Ext.clone(E.oa.rw);
      f.text = Ext.String.format(f.text, h.label, c, h.link);
      C.k().qa.sa({
        msg: f
      });
      return !1;
    }
  },
  UBa: A(!0)
};