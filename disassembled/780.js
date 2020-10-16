E.api.ub = {
  ic: {
    Nd: {
      of: 1,
      Hc: 2,
      Rxa: 3
    },
    Eh: {
      NG: 1,
      H$: 2,
      Eca: 3,
      DO: 4,
      EO: 5,
      rR: 6,
      HE: 7,
      Z$: 8,
      aaa: 9,
      $$: 11
    },
    vx: {
      wS: 1,
      Fwa: 2,
      yS: 3
    }
  },
  eCa: function (c, n, l) {
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
      url: "/api/aol/initIndex/user," + f,
      method: "GET",
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
  kd: function (c, n, l) {
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
      url: "/api/aol/initView/user," + f,
      method: "GET",
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
  U3: function (c, n, l) {
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
      url: "/api/aol/lastMessages/user," + f,
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
  lla: function (c, n, l) {
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
      url: "/api/aol/attachments/user," + f,
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
  IAa: function (c, n, l) {
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
      url: "/api/aol/config/user," + f,
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
  Rsa: function (c, n, l) {
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
      url: "/api/aol/config/user," + f,
      method: "POST",
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
  Zla: function (c, h, f) {
    h = h || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/aol/lastAttachments/user," + c.uin + "?maxCount=" + (c.uL || 5),
      method: "GET",
      params: c,
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
  }
};