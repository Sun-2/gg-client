Ext.define(C.core.ab.jl, {
  ab: {},
  constructor: function () {
    this.ab = {};
    this.N4();
  },
  vA: Ext.Template,
  rua: Ext.XTemplate,
  ha: function (c, f) {
    (typeof c !== "string" || c === "") && j("cannot add template: bad name");
    !(f instanceof this.vA) && !Ext.isArray(f) && j("cannot add template: bad template");
    this.ab[c] && j("cannot add template: template already exists");
    this.ab[c] = f;
  },
  N4: Ext.emptyFn,
  ma: function (c) {
    (typeof c !== "string" || c === "") && j("cannot get template: bad name");
    typeof this.ab[c] === "undefined" && j("cannot get template: template not found");
    return this.ab[c];
  },
  Wa: function (c, w) {
    w = w || {};
    this.ab[c] || j("cannot retrieve template: bad template name");
    var q = this.ab[c],
        o = "";

    if (q instanceof this.vA) {
      return q.apply(w);
    }

    for (var f = 0, y = q.length; f < y; f++) {
      if (typeof q[f] === "string") {
        if (/^{@[^}]+}/.test(q[f])) {
          var u = q[f].substr(2, q[f].length - 3);
          o += this.Wa(u, w);
        } else {
          o += new this.vA(q[f]).apply(w);
        }
      } else {
        if (q[f] instanceof this.vA) {
          return q[f].apply(w);
        }
      }
    }

    return new this.rua(o).apply(w);
  }
});