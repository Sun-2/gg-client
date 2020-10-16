Ext.define(E.stores.UG, {
  extend: C.stores.Store,
  sca: 1000,
  rca: 50,
  model: E.models.Ya,
  ta: m,
  id: "UnknownContactsStore",
  refs: m,
  gq: m,
  constructor: function () {
    this.refs = {};
    this.gq = [];
    this.Um = m;
    this.callParent(arguments);
    this.addEvents("silentupdate");
    this.ta = C.k().ta;
    this.on("remove", this.i0, this);
  },
  destroy: function () {
    this.Um && (clearTimeout(this.Um), delete this.Um);
    this.un("remove", this.i0, this);
    this.callParent();
  },
  Ba: function (c, h) {
    if (!this.refs[c]) {
      var f = "";
      h === E.models.Ue.prototype.sh.Cy ? (f = E.lang.NB, h = E.models.Ya.prototype.types.conference) : (f = c, h = E.models.Ya.prototype.types.contact);
      this.add({
        uin: {
          value: c
        },
        ShowName: {
          value: f
        },
        type: h
      });
      h === E.models.Ya.prototype.types.contact && this.ta.If() && C.k().aea(c);
      h !== E.models.Ya.prototype.types.conference && this.Nra(c);
    }

    return this.refs[c];
  },
  add: function () {
    for (var c = this.callParent(arguments), h = 0, f = c.length; h < f; h++) {
      this.refs[c[h].get("uin")] = c[h];
    }

    return c;
  },
  processData: function (c) {
    if (c && c.result && c.result.users) {
      for (var q = [], c = c.result.users, p = 0, o = c.length; p < o; p++) {
        var f = c[p];

        if (f.id && this.refs[f.id]) {
          var u = f.id;
          this.refs[u].set({
            type: f.type,
            ShowName: f.label && f.label._content ? f.label._content : f.id,
            duplicated: !1,
            visible: !0
          });
          q.push(this.refs[u].data);
        }
      }

      q.length > 0 && this.fireEvent("silentupdate", this, q);
    }
  },
  Nra: function (c) {
    this.Um && (clearTimeout(this.Um), delete this.Um);
    this.gq.indexOf(c) === -1 && this.gq.push(c);

    c = function () {
      do {
        var e = this.gq.splice(0, this.rca);
        E.api.dl.tla(e, {
          fn: this.processData,
          scope: this
        });
      } while (this.gq.length > 0);

      this.gq = [];
    }.bind(this);

    this.Um = setTimeout(c, this.sca);
  },
  i0: function (c, h) {
    var f = h.get("uin");
    this.refs[f] && delete this.refs[f];
  },
  Ek: function (c) {
    this.suspendEvents();

    for (var n = 0, l = c.length; n < l; n++) {
      var f = this.refs[c[n].uin];
      f && f.set(c[n]);
    }

    this.resumeEvents();
    this.fireEvent("silentupdate", this, c);
  },
  pra: function (c) {
    if (this.refs[c]) {
      var f = this.refs[c];
      this.remove(this.refs[c]);
      delete this.refs[c];
      return f;
    }

    return !1;
  },
  Ns: function (c) {
    var f = [];
    Ext.iterate(c, function (e, g) {
      this.refs[e] ? (f.push(e), this.ZN(e, g)) : this.$N(g, e);
      f = f.concat(g);
    }, this);
  },
  ZN: function (c, f) {
    Ext.each(f, function (b) {
      this.refs[b] = this.refs[c];
      this.refs[c].Mw(b);
    }, this);
  },
  $N: function (c, h) {
    var f = m;
    Ext.each(c, function (e) {
      if (this.refs[e]) {
        return f = this.refs[e], !1;
      }
    }, this);
    f != m && (f.set("uin", h), this.refs[h] = f, Ext.each(c, function (e) {
      f.Mw(e);
      this.refs[e] = f;
      f.Mw(e);
    }, this));
  }
});