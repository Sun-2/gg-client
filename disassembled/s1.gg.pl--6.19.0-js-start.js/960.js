Ext.define(C.core.Yb.tu, {
  extend: C.core.Yb.zn,
  paa: 5000,
  bca: 5,
  name: "avatar-manager",
  id: "avatar-manager",
  Tc: {},
  ex: {},
  Ci: [],
  ws: [],
  statics: {
    qja: 0
  },
  constructor: function (c) {
    this.Tc = {};
    this.ex = {};
    this.Ci = [];
    this.ws = [];
    var c = c || {},
        h = c.Ci;
    this.Ci = h ? h.slice() : [];

    if (this.Ci.length) {
      for (var h = 0, f = this.Ci.length; h < f; h += 1) {
        this.Ci[h].on("silentupdate", this.Hva, this);
      }
    }

    this.callParent([c]);
  },
  Dla: function (c, h) {
    if (!c.hasAttribute("id")) {
      var f = "avm-" + h + "-" + ++this.self.qja;
      c.setAttribute("id", f);
      return f;
    }

    return c.getAttribute("id");
  },
  hM: function (T, N, L) {
    if (N) {
      N instanceof Array || (N = [N]);

      for (var T = {}, I = 0, G = N.length; I < G; I++) {
        var B = N[I].zb,
            o = N[I].uin;

        if (o && o != "0") {
          for (var f = N[I].k3 || !1, aa = 0, Y = B.length; aa < Y; aa++) {
            var Q = B[aa],
                S;

            for (S in Q) {
              if (Q.hasOwnProperty(S) && Q[S] && Q[S].tagName && (!Q[S].getAttribute("id") || !(typeof this.Tc[o] !== "undefined" && typeof this.Tc[o][S] !== "undefined" && Ext.Array.indexOf(this.Tc[o][S], Q[S].getAttribute("id")) !== -1))) {
                this.Tc[o] || (this.Tc[o] = {});
                T[o] || (T[o] = {});
                var c = this.Dla(Q[S], o);
                Q[S].k3 = f;
                this.Tc[o][S] ? this.Tc[o][S].indexOf(c) === -1 && this.Tc[o][S].push(c) : this.Tc[o][S] = [c];
                T[o][S] ? T[o][S].push(Q[S]) : T[o][S] = [Q[S]];

                if (S == "avatar" && !this.ex[c]) {
                  this.ex[c] = Q.size;
                }
              }
            }
          }
        }
      }

      L || this.j9(T);
    }
  },
  uma: function (c) {
    for (var p, o = 0, n = this.Ci.length; o < n; o++) {
      var f = this.Ci[o];
      f instanceof C.models.Bw ? c == C.k().fa.get("uin") && (p = f.Ba(c)) : p = f.Ba(c);

      if (p) {
        return p;
      }
    }

    return !1;
  },
  j9: function (c) {
    for (var h in c) {
      if (c.hasOwnProperty(h)) {
        var f = this.uma(h);

        if (!f) {
          return !1;
        }

        c[h].avatar && this.Sva(f, c[h].avatar);
        c[h].Xx && this.Tva(f, c[h].Xx);
        c[h].status && this.Wva(f, c[h].status);
        c[h].name && this.Vva(f, c[h].name);
        c[h].p4 && this.Uva(f, c[h].p4);
      }
    }
  },
  us: function (c, f) {
    Ext.Array.each(c, function () {
      var e = arguments;
      setTimeout(function () {
        f.apply(this, e);
      }.bind(this), this.bca);
    }, this);
  },
  Sva: function (c, h) {
    var f = c.bK() || c.get("uin");
    this.us(h, function (o) {
      var b = this.ex[o.getAttribute("id")] || 50,
          q = c.get("avatar") || c.get("protoInfo") && c.get("protoInfo").avatar,
          g = c.get("type"),
          g = g === 1 ? "contact" : g === 2 ? "dummycontact" : g === 4 ? "conference" : m;
      q ? (b = C.ca.Da.zc({
        uin: f,
        size: b,
        avatar: q,
        type: g
      }), o.getAttribute("src") != b && o.setAttribute("src", b), o = Ext.get(o), o.hasCls("d-none") && o.removeCls("d-none")) : (b = C.ca.Da.zc({
        uin: f,
        size: b,
        user: c,
        relative: !0,
        type: g
      }), o.getAttribute("src") != b && o.setAttribute("src", b), o = Ext.get(o), o.hasCls("listAvatar") && o.addCls("d-none"));
    }, this);
  },
  Tva: function (c, f) {
    this.us(f, function (g) {
      var b = Ext.get(g).parent(".sr-contact");
      c.get("protoInfo") && typeof c.get("protoInfo").description !== "undefined" ? (g = g.innerHTML = C.ca.xa.wd(c.get("protoInfo").description, m, [C.ca.xa.ce, C.ca.xa.bg], [eht, nl2br]), b && (g != "" ? b.addCls("show-description") : b.removeCls("show-description"))) : b && b.removeCls("show-description");
    });
  },
  Wva: function (c, n) {
    var l = "not_avail";

    if (c.rm()) {
      l = "ignored";
    } else {
      var f = (c.get("type") ? !(c.get("type") === 4 || c.get("uin") == C.k().fa.get("uin")) : c.get("uin") != C.k().fa.get("uin")) ? "stranger" : "not_avail",
          l = c.get("protoInfo") && c.get("protoInfo").status || c.get("status") || f;
    }

    this.us(n, function (g) {
      var h = g.className.replace(/(status-[_a-zA-Z-]+)/g, "");
      g.className = Ext.String.trim(h) + " status-" + l;
      C.k().Wi(l, g);
    });
  },
  Vva: function (c, n) {
    var l = c.get("uin"),
        f = c.getDisplayName();
    f && this.us(n, function (e) {
      e.innerHTML = l == C.k().fa.get("uin") && !e.k3 ? E.lang.Se : eht(f);
    });
  },
  Uva: function (c, h) {
    var f = c.get("gvcWalletValue");
    f && this.us(h, function (e) {
      e.innerHTML = "" + f;
    });
  },
  REa: t(),
  Hva: function (G, D) {
    for (var B = {}, z = 0, y = D.length; z < y; z++) {
      if (D[z].uin && (this.Tc[D[z].uin] || this.Tc[G.Ba(D[z].uin).get("uin")])) {
        B[D[z].uin] || (B[D[z].uin] = {});
        var o = this.Tc[D[z].uin] ? this.Tc[D[z].uin] : this.Tc[G.Ba(D[z].uin).get("uin")],
            f;

        for (f in o) {
          if (o.hasOwnProperty(f)) {
            for (var c = 0, L = o[f].length; c < L; c++) {
              var I = document.getElementById(o[f][c]);
              I ? B[D[z].uin][f] ? B[D[z].uin][f].push(I) : B[D[z].uin][f] = [I] : this.ela({
                uin: D[z].uin,
                name: f,
                id: o[f][c]
              });
            }
          }
        }

        this.j9(B);
      }
    }
  },
  ela: function (c) {
    this.GJ && (clearTimeout(this.GJ), delete this.GJ);
    this.ws.push(c);
    this.GJ = setTimeout(function () {
      for (var e = 0; e < this.ws.length; e++) {
        var l = this.ws[e];

        if (!document.getElementById(l.id) && this.Tc[l.uin] && this.Tc[l.uin][l.name]) {
          var f = this.Tc[l.uin][l.name].indexOf(l.id);
          f > -1 && (this.Tc[l.uin][l.name].splice(f, 1), this.Tc[l.uin][l.name].length == 0 && delete this.Tc[l.uin][l.name]);
        }

        this.ws.splice(e, 1);
      }
    }.bind(this), this.paa);
  }
});