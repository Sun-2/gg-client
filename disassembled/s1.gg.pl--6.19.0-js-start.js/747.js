Ext.define(C.core.mixins.hw, {
  nd: {
    ck: [],
    qg: {}
  },
  constructor: function (c) {
    this.nd = {
      ck: [],
      qg: {}
    };
    this.callParent([c]);
  },
  destroy: function () {
    this.nd = m;
  },
  Yl: function () {
    j("This method need to be overridden");
  },
  addRef: function (c) {
    var h = this.Yl(c);

    if (typeof this.nd.qg[h] === "undefined") {
      var f = this.nd.ck.length;
      this.nd.ck.push(h);
      this.nd.qg[h] = {
        Ly: f,
        item: c
      };
      return !0;
    }

    return !1;
  },
  getRef: function (c) {
    var f = "";

    if (typeof c !== "undefined") {
      return f = typeof c !== "string" ? this.Yl(c) : c, this.nd.qg[f];
    }
  },
  yBa: function (c) {
    var c = this.Yl(c),
        f = "",
        f = "";

    if (typeof this.nd.qg[c] !== "undefined") {
      return f = this.nd.qg[c].Ly, f = this.nd.ck[f + 1], this.getRef(f);
    }
  },
  ABa: function (c) {
    var c = this.Yl(c),
        f = "",
        f = "";

    if (typeof this.nd.qg[c] !== "undefined") {
      return f = this.nd.qg[c].Ly, f = this.nd.ck[f - 1], this.getRef(f);
    }
  },
  n7: function (c) {
    var n = "",
        l = 0,
        f = "",
        n = typeof c !== "string" ? this.Yl(c) : c;

    if (typeof this.nd.qg[n] === "undefined") {
      return !1;
    }

    l = this.nd.qg[n].Ly;
    f = this.nd.ck.splice(l, 1).pop();

    if (typeof f !== "undefined") {
      delete this.nd.qg[n];
      c = l;

      for (l = this.nd.ck.length; c < l; c++) {
        n = this.nd.ck[c], this.nd.qg[n].Ly = c;
      }

      return !0;
    }

    return !1;
  }
});