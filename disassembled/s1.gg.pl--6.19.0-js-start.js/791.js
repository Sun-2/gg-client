Ext.define(E.core.ab.yF, {
  config: {
    Bna: "35x25",
    Ky: m
  },
  ab: m,
  fy: {
    user: function (c, n) {
      var l = this.getAttribute(c.idField, n);

      if (l) {
        var f = Ext.StoreManager.lookup("ContactsStore").Ba(l);

        if (f) {
          return f.get("ShowName");
        }
      }

      return (f = this.getAttribute(c.nickField, n)) ? f : l;
    },
    text: function (c, f) {
      return this.getAttribute(c.textField, f);
    },
    icon: function (c) {
      return this.Qla(c.id);
    },
    profileNameTag: A(""),
    ignore: A(!1),
    sender: function (c, f) {
      return this.getAttribute(c.textField, f);
    },
    fileName: function (c, f) {
      return this.getAttribute(c.textField, f);
    }
  },
  constructor: function (c) {
    this.ab = c.ab.templates;
    this.config.Ky = c.Ky;
  },
  Fua: function (c) {
    if (!this.ab.hasOwnProperty(c)) {
      return !1;
    }

    return !0;
  },
  Qla: function (c) {
    return this.config.Ky + "/icons/" + this.config.Bna + "/" + c + ".png";
  },
  yoa: function (c, q) {
    if (!q.hasOwnProperty("local") || q.local !== !0) {
      return !1;
    }

    if (c.type != "text") {
      return !1;
    }

    var p = c.textField.split("."),
        o = 0,
        f = q,
        u;

    for (u in p) {
      if (!p.hasOwnProperty(u)) {
        break;
      }

      o++;

      if (o == p.length && f.hasOwnProperty(p[u] + "_secure") && f[p[u] + "_secure"] === !0) {
        return !0;
      }

      f = f[p[u]];
    }

    return !1;
  },
  getAttribute: function (c, p) {
    var o = c.split("."),
        n = p,
        f;

    for (f in o) {
      o.hasOwnProperty(f) && (n = n[o[f]]);
    }

    if (typeof n == "undefined" || typeof n == "object") {
      return "";
    }

    return n;
  },
  tqa: function (c, p) {
    var o = {},
        n,
        f;

    for (f in c) {
      n = !1, c.hasOwnProperty(f) && (this.fy.hasOwnProperty(c[f].type) ? n = this.fy[c[f].type].apply(this, [c[f], p]) : c[f].hasOwnProperty("fallback") && this.fy.hasOwnProperty(c[f].fallback.type) && (n = this.fy[c[f].fallback.type].apply(this, [c[f], p])), n !== !1 && (this.yoa(c[f], p) || (n = eha(n)), o[f] = n));
    }

    return o;
  },
  Hqa: function (c, h) {
    for (var f in c) {
      c.hasOwnProperty(f) && (h = h.replace(RegExp("%" + f + "(.[0-9]+)?%", "g"), c[f]));
    }

    return h;
  },
  O3: function (c) {
    return this.parse(c, "html");
  },
  OAa: function (c) {
    return this.parse(c, "app_inline_html");
  },
  UAa: function (c) {
    return this.parse(c, "chat_inline_html");
  },
  parse: function (c, q) {
    var p, o, f;

    if (this.ab == m) {
      return !1;
    }

    if (this.ab.hasOwnProperty(c.template)) {
      p = this.ab[c.template];
    } else {
      return !1;
    }

    o = this.tqa(p.fields, c);
    p = p.body.pl;

    for (var u in p) {
      if (p.hasOwnProperty(u) && p[u].hasOwnProperty("default") && p[u]["default"]) {
        f = p[u].template[q] ? p[u].template[q] : p[u].template.html;
        break;
      }
    }

    if (!f) {
      for (u in p) {
        if (p.hasOwnProperty(u) && p[u].grouped == 1) {
          f = p[u].template[q] ? p[u].template[q] : p[u].template.html;
          break;
        }
      }
    }

    if (f) {
      return this.Hqa(o, f);
    }

    return !1;
  }
});