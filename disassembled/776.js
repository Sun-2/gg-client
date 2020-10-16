E.api.Zc = {
  lma: function (c, n, l) {
    var n = n || {
      fn: t(),
      scope: this
    },
        l = l || {
      fn: t(),
      scope: this
    },
        f = c.uin;
    delete c.uin;
    Ext.Ajax.request({
      url: "/api/notifications/notifications/user," + f + ".json",
      method: "GET",
      params: c,
      success: function (e, p) {
        var o = m;

        try {
          o = Ext.decode(e.responseText);
        } catch (u) {
          o = m;
        }

        n.fn.call(n.scope, o, e, p);
      },
      failure: function (g, u) {
        var o = m;

        try {
          o = Ext.decode(g.responseText);
        } catch (p) {}

        l.fn.call(l.scope, o, g, u);
      },
      scope: this
    });
    return !0;
  },
  kma: function (c, p, o) {
    var p = p || {
      fn: t(),
      scope: this
    },
        o = o || {
      fn: t(),
      scope: this
    },
        n = c.uin,
        f = c.c6;
    delete c.uin;
    delete c.c6;
    Ext.Ajax.request({
      url: "/api/notifications/notifications/user," + n + "/id," + f + ".json",
      method: "GET",
      params: c,
      success: function (e, w) {
        var u = m;

        try {
          u = Ext.decode(e.responseText);
        } catch (q) {
          u = m;
        }

        p.fn.call(p.scope, u, e, w);
      },
      failure: function (g, w) {
        var u = m;

        try {
          u = Ext.decode(g.responseText);
        } catch (q) {}

        o.fn.call(o.scope, u, g, w);
      },
      scope: this
    });
    return !0;
  },
  Bk: function (c, n, l) {
    var n = n || {
      fn: t(),
      scope: this
    },
        l = l || {
      fn: t(),
      scope: this
    },
        f = {
      state: c.state
    };
    c.id ? f["id[]"] = c.id : f.subtype = c.subtype;
    Ext.Ajax.request({
      url: "/api/notifications/state/user," + C.k().fa.get("uin"),
      params: f,
      method: "POST",
      success: function (e, p) {
        var o = m;

        try {
          o = Ext.decode(e.responseText);
        } catch (u) {
          o = m;
        }

        n.fn.call(n.scope, o, e, p);
      },
      failure: function (g, u) {
        var o = m;

        try {
          o = Ext.decode(g.responseText);
        } catch (p) {}

        l.fn.call(l.scope, o, g, u);
      },
      scope: this
    });
    return !0;
  },
  $M: function (c, h, f) {
    h = h || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/notifications/stats/user," + C.k().fa.get("uin"),
      params: {
        "id[]": c.id,
        state: c.state
      },
      method: "POST",
      success: function (e, l) {
        var q = m;

        try {
          q = Ext.decode(e.responseText);
        } catch (o) {
          q = m;
        }

        h.fn.call(h.scope, q, e, l);
      },
      failure: function (g, o) {
        var q = m;

        try {
          q = Ext.decode(g.responseText);
        } catch (l) {}

        f.fn.call(f.scope, q, g, o);
      },
      scope: this
    });
    return !0;
  },
  LBa: function (c, f) {
    c = c || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/dict-notifications/templates",
      method: "GET",
      success: function (o, g) {
        var b = m;

        try {
          b = Ext.decode(o.responseText);
        } catch (p) {
          b = m;
        }

        c.fn.call(c.scope, b, o, g);
      },
      failure: function (e, o) {
        var g = m;

        try {
          g = Ext.decode(e.responseText);
        } catch (p) {}

        f.fn.call(f.scope, g, e, o);
      },
      scope: this
    });
    return !0;
  }
};