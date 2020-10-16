Ext.define(E.stores.yG, {
  extend: "Ext.data.Store",
  model: E.models.xc,
  sorters: [{
    property: "sorter",
    direction: "ASC"
  }],
  Aa: m,
  type: m,
  members: m,
  qt: m,
  te: m,
  Uf: m,
  constructor: function (c) {
    c.id = "SentencesStore" + (c.Aa || "");
    this.callParent([c]);
    this.on("add", this.yf, this);
    this.addEvents("messageread");
    this.te = c.te || C.k().fa;
    this.members = {};
    this.qt = {};
    this.Rw({
      yb: this.te.get("uin")
    });
    this.Uf = [];
  },
  destroy: function () {
    this.un("add", this.yf, this);
    this.callParent(arguments);
  },
  yf: function (c, f) {
    Ext.each(f, function (g) {
      if (g.get("uin") !== this.te.get("uin")) {
        var h = g.get("messageId"),
            g = g.get("read");
        h && !g && this.Uf.push(h);
      }
    }, this);
  },
  add: function (c) {
    var c = Ext.isArray(c) ? c.slice(0) : Array.prototype.slice.apply(arguments),
        f = Ext.Array.filter(c, function (g) {
      var h = m;

      if (g instanceof E.models.xc) {
        h = g.get("messageId");
      } else {
        if (g.extraData && g.extraData.mid !== m && typeof g.extraData.mid !== "undefined") {
          h = g.extraData.mid;
        } else {
          if (g.i4) {
            h = g.i4;
          } else {
            return !1;
          }
        }
      }

      if (h !== 0 && this.findRecord("messageId", h) !== m) {
        return !1;
      }

      return !0;
    }, this);

    if (!f.length) {
      return f;
    }

    return this.callParent(f);
  },
  uCa: function () {
    return this.Uf.length == 0;
  },
  nn: function () {
    return this.Uf.length;
  },
  sL: function (c, n) {
    function l(e) {
      parseInt(e.get("messageId")) === 0 && parseInt(e.get("uin")) !== 10 && bugsnagClient.notify(Error("Message read messageId equals 0"), {
        metaData: {
          number: e.get("uin"),
          extra: JSON.stringify(e.get("extraData"))
        }
      });
      e.get("conferenceId") ? C.k().ta.Lp(e.get("messageId"), 2, e.get("conferenceId")) : C.k().ta.Lp(e.get("messageId"), 1, e.get("uin"));
    }

    for (n = typeof n === "undefined" ? !0 : n; this.Uf.indexOf(c) > -1;) {
      var f = this.findRecord("messageId", this.Uf[0], 0, !1, !0, !0);
      this.Uf.splice(0, 1);
      this.fireEvent("messageread", {
        messageId: f.get("messageId"),
        nn: this.Uf.length
      });
      n && l(f);
      f.gpa();
    }
  },
  z5: function (c) {
    for (var f = this.Uf.length - 1; f >= 0; f--) {
      this.sL(this.Uf[f], c);
    }
  },
  Rw: function (c) {
    c.yb && (this.members[c.yb] = !0, this.fireEvent("memberadded", this, c));
  },
  tea: function (c) {
    for (var h = 0, f = c.length; h < f; h++) {
      this.Rw(c[h]);
    }
  },
  removeAll: function () {
    this.Uf = [];
    this.callParent();
  },
  zra: function (c) {
    this.members[c.yb] = !1;
    this.fireEvent("memberremoved", this, c);
  },
  ema: function () {
    return this.members || {};
  },
  Jya: function (c) {
    this.qt[c.seqNumber] = c.message;
  },
  zBa: function (c) {
    return this.qt[c] || m;
  },
  Xza: function (c) {
    if (this.qt[c]) {
      return delete this.qt[c], !0;
    }

    return !1;
  }
});