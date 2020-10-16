Ext.define(E.core.mixins.LG, {
  SBa: m,
  groups: m,
  bf: m,
  pi: m,
  Vi: m,
  qK: m,
  constructor: function () {
    this.groups = {};
    this.bf = [];
    this.pi = [];
    this.Vi = [];
    this.on("add", this.N1, this);
    this.on("remove", this.O1, this);
  },
  destroy: function () {
    this.un("add", this.N1, this);
    this.un("remove", this.O1, this);
  },
  N1: function (c, n) {
    for (var n = [].concat(n), l = 0, f = n.length; l < f; l++) {
      this.addToGroup(n[l]);
    }
  },
  O1: function (c, n) {
    for (var n = [].concat(n), l = 0, f = n.length; l < f; l++) {
      this.removeFromGroup(n[l]);
    }
  },
  dta: v("qK"),
  mea: function (c) {
    this.pi.indexOf(c) == -1 && this.pi.push(c);
  },
  Iya: function (c) {
    this.Vi.indexOf(c) == -1 && this.Vi.push(c);
  },
  KDa: function (c) {
    var f = -1;
    (f = this.pi.indexOf(c)) != -1 && this.pi.splice(f, 1);
  },
  LDa: function (c) {
    var f = -1;
    (f = this.Vi.indexOf(c)) != -1 && this.Vi.splice(f, 1);
  },
  addToGroup: function (c, w, q) {
    var w = w || this.qK || function (b) {
      return c.get(b);
    },
        q = Ext.merge({
      xZ: !0,
      Nfa: !1,
      uH: !0,
      QZ: !1
    }, q || {}),
        o = w(c);

    if (typeof o != "undefined") {
      this.groups[o] || (this.groups[o] = []);
      var f = this.groups[o];

      if (this.pi.length) {
        for (var y = 0, u = this.pi.length; typeof this.pi[y] === "function" && y < u; y++) {
          if (!this.pi[y].call(this, c, f, w, o, this.groups)) {
            return;
          }
        }
      }

      if ((w = f.indexOf(c)) != -1 && q.QZ) {
        f.splice(w, 1), q.uH = !1;
      }

      q.uH ? f.push(c) : f.unshift(c);
      this.bf.indexOf(o) == -1 && (q.xZ ? this.bf.push(o) : this.bf.unshift(o));
    }
  },
  removeFromGroup: function (c, q, p) {
    q = q || this.qK || function (b) {
      return c.get(b);
    };

    p = Ext.merge({
      xZ: !0,
      Nfa: !1,
      uH: !0,
      QZ: !1
    }, p || {});
    p = q(c);

    if (typeof p != "undefined") {
      if (!this.groups[p]) {
        return !1;
      }

      var o = this.groups[p];

      if (this.Vi.length) {
        for (var f = 0, u = this.Vi.length; typeof this.Vi[f] === "function" && f < u; f++) {
          if (!this.Vi[f].call(this, c, o, q, p, this.groups)) {
            return;
          }
        }
      }

      if ((q = o.indexOf(c)) != -1) {
        o.splice(q, 1), this.fireEvent("removerecordfromgroup", c, q, o, p);
      }

      if ((q = this.bf.indexOf(p)) != -1 && o.length === 0) {
        this.bf.splice(q, 1), this.fireEvent("removegroup", o, q, p);
      }

      return !0;
    }
  },
  kn: function (c, h) {
    h = h || this.bra || k;
    c = c || this.ana || k;
    typeof h != "undefined" && this.kka(function (e) {
      e.sort(h);
    });
    var f = this;
    this.bf.sort(function (g, b) {
      return c(g, f.groups[g], b, f.groups[b]);
    });
  },
  kka: function (c, p) {
    for (var p = p || this, c = c || t(), o = 0, n = this.bf.length; o < n; o++) {
      var f = this.bf[o];

      if (c.call(p, this.groups[f], f, o) == !1) {
        break;
      }
    }
  }
});