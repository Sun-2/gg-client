Ext.define(E.core.events.rF, {
  mixins: {
    Observable: Ext.util.Observable
  },
  data: {},
  uJ: "counterchanged_",
  constructor: function () {
    this.callParent(arguments);
    this.addEvents();
  },
  onChange: function (c, p, o, n) {
    if (Ext.isString(c)) {
      c = this.uJ + c;
    } else {
      for (var f in c) {
        c.hasOwnProperty(f) && (c[f] = this.uJ + c[f]);
      }
    }

    this.on(c, p, o, n);
  },
  AJ: function () {
    var c = [];
    c.push(this.uJ + arguments[0]);

    for (var h = 0, f = arguments.length; h < f; h++) {
      c.push(arguments[h]);
    }

    this.fireEvent.apply(this, c);
  },
  Uw: function (c) {
    this.M6(c, 1);
  },
  Sm: function (c) {
    this.M6(c, -1);
  },
  M6: function (Q, I) {
    for (var G = [], D = {}, G = Ext.isArray(Q) ? Q : [Q], B = 0, o = G.length; B < o; B++) {
      for (var f = G[B].get("subtype").split("/"), c = 0, T = f.length; c < T; c++) {
        for (var S = "", L = c; L >= 0; L--) {
          S = f[L] + "/" + S;
        }

        S = S.substr(0, S.length - 1);
        D[S] = !0;
        this.change(S, I, !0);
      }
    }

    for (var N in D) {
      D.hasOwnProperty(N) && this.AJ(N, this.data[N]);
    }
  },
  set: function (c, n) {
    var l = {};
    Ext.isString(c) ? l[c] = n : l = c;

    for (var f in l) {
      l.hasOwnProperty(f) && (this.data[f] = parseInt(l[f]), this.AJ(f, this.data[f]));
    }
  },
  get: function (c) {
    if (this.data.hasOwnProperty(c)) {
      return this.data[c];
    }

    return 0;
  },
  increment: function (c) {
    this.change(c, 1);
  },
  ds: function (c) {
    this.change(c, -1);
  },
  change: function (c, n, l) {
    if (typeof n != "undefined") {
      var f = parseInt(n);
      this.data.hasOwnProperty(c) && (f += this.data[c]);
      this.data[c] = f > 0 ? f : 0;
      (!l || l != !0) && this.AJ(c, this.data[c], n);
    }
  }
});