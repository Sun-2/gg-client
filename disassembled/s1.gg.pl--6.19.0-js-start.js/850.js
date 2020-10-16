Ext.define(E.stores.XG, {
  extend: C.stores.Store,
  model: E.models.Ue,
  ta: m,
  api: m,
  id: "UsersStore",
  la: m,
  Oe: m,
  constructor: function () {
    this.ta = C.k().ta;
    this.la = Ext.getStore("ContactsStore");
    this.Oe = Ext.getStore("UnknownContactsStore");
    this.callParent(arguments);
    this.la.on("aliasesupdated", this.T_, this);
    this.la.on("add", this.k0, this);
  },
  destroy: function () {
    this.la.un("add", this.k0, this);
    this.la.un("aliasesupdated", this.T_, this);
    this.callParent();
  },
  fM: function (c, h, f) {
    h = this.getUserData(h, f);
    c.WM(h);
  },
  getUserData: function (c, h) {
    var f = {};

    if (this.Oe == m) {
      this.Oe = Ext.getStore("UnknownContactsStore");
    }

    m !== this.la.Ba(c) ? f = this.la.refs[c] : m !== this.Oe.Ba(c, h) && (f = [this.Oe.refs[c]]);
    return f;
  },
  De: function (c) {
    return this.xb(c, E.models.Ue.prototype.sh.Cy);
  },
  fwa: function (c, f) {
    return this.findBy(function (b) {
      return b.Qs(c, f);
    }) === -1 ? !1 : !0;
  },
  xb: function (c, p) {
    var p = p || E.models.Ue.prototype.sh.ba,
        o = {};
    o[p] = c;
    var o = {
      ids: o
    },
        n = this.findBy(function (b) {
      return b.Qs(c, p);
    }),
        f = this.findBy(function (b) {
      return b.pna(c, p);
    });
    return n == -1 && f == -1 ? (o.userRefs = this.getUserData(c, p), this.add(Ext.create(E.models.Ue, o))[0]) : n == -1 ? (o = this.getAt(f), this.fM(o, c, p), o) : this.getAt(n);
  },
  T_: function (c, f) {
    Ext.Array.each(f, function (g) {
      var n = this.findBy(function (b) {
        if (b.Qs(g)) {
          return !0;
        }
      });

      if (n > -1) {
        var n = this.getAt(n),
            h = E.models.Ue.prototype.sh.ba,
            h = this.getUserData(n.get("ids")[h], h);
        n.WM(h);
      }
    }, this);
  },
  k0: function (c, n) {
    for (var l = 0, f = n.length; l < f; ++l) {
      this.fM(this.xb(n[l].get("uin"), E.models.Ue.prototype.sh.ba), n[l].get("uin"), E.models.Ue.prototype.sh.ba);
    }
  },
  $ka: function () {
    this.la.each(function (c) {
      c.get("uin") > 0 && this.xb(c.get("uin"));
    }, this);
    this.Oe.each(function (c) {
      c.get("uin") > 0 && this.xb(c.get("uin"));
    }, this);
  },
  WN: function (c, f) {
    this.f9(c, f, E.models.Ue.prototype.sh.Cy);
  },
  f9: function (c, h, f) {
    c = this.xb(c, f);
    (f = c.Gs()) && Ext.each(f, function (e) {
      e.set(h);

      if (e.get("type") == 4) {
        for (var l = e.get("extdata").members, q = 0, o = l.length; q < o; q++) {
          if (this.xb(l[q].yb).Hb().get("protoInfo").status != "not_avail") {
            e.set("protoInfo", {
              status: "conference",
              friend: 0
            });
            break;
          }
        }

        this.fireEvent("silentupdate", this, [{
          uin: e.get("uin"),
          ShowName: e.get("ShowName")
        }]);
      }
    }, this);
    c.qp() || this.la.ee(this.la.sortBy, !0);
  },
  hua: function (c, h) {
    if (!c || !c.members) {
      return !1;
    }

    h.Ea = h.Ea || Ext.emptyFn;
    h.ya = h.ya || Ext.emptyFn;
    h.scope = h.scope || this;
    var f = this;
    this.ta.Io(c, {
      success: function (b) {
        c.members.unshift({
          yb: C.k().fa.get("uin"),
          de: O.Qu | O.Su | O.Tu | O.Ru
        });
        b = f.De(b.conferenceID).qe();
        b.set({
          ShowName: {
            value: c.name !== "" ? c.name : ""
          },
          type: E.models.Ya.prototype.types.conference,
          extdata: c,
          gid: 12,
          protoInfo: {
            status: "conference"
          },
          visible: !1
        });
        h.Ea && h.Ea.call(h.scope, b);
      },
      failure: function () {
        h.ya && h.ya.call(h.scope);
      },
      scope: h.scope
    });
    return !0;
  }
});