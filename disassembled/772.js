E.api.Re = {
  eO: function (c, h, f) {
    h = h || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/avatars/avatars/" + c.uin + "/0.json",
      method: "POST",
      params: c.xl ? {
        _method: "PUT",
        defaultAvatarId: c.xl
      } : {
        _method: "PUT",
        fileEncoded: 1,
        mediaFile: c.BK
      },
      success: function (e, l) {
        var q = m;

        try {
          q = Ext.JSON.decode(e.responseText);
        } catch (o) {
          q = m;
        }

        h.fn.call(h.scope, q, e, l);
        return !0;
      },
      failure: function (g, o) {
        var q = m;

        try {
          q = Ext.JSON.decode(g.responseText);
        } catch (l) {}

        f.fn.call(f.scope, q, g, o);
        return !1;
      },
      scope: this
    });
    return !0;
  },
  Wx: function (c, h, f) {
    h = h || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/avatars/avatars/" + c.type + "," + c.id + ".json",
      method: "POST",
      params: {
        _method: "DELETE"
      },
      success: function (e, l) {
        var q = m;

        try {
          q = Ext.JSON.decode(e.responseText);
        } catch (o) {
          q = m;
        }

        h.fn.call(h.scope, q, e, l);
        return !0;
      },
      failure: function (g, o) {
        var q = m;

        try {
          q = Ext.JSON.decode(g.responseText);
        } catch (l) {}

        f.fn.call(f.scope, q, g, o);
        return !1;
      },
      scope: this
    });
    return !0;
  },
  fO: function (c, h, f) {
    h = h || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/avatars/avatars/" + c.type + "," + c.id + "/0.json",
      method: "POST",
      params: c.xl ? {
        _method: "PUT",
        defaultAvatarId: c.xl
      } : {
        _method: "PUT",
        photo: c.BK
      },
      success: function (e, l) {
        var q = m;

        try {
          q = Ext.JSON.decode(e.responseText);
        } catch (o) {
          q = m;
        }

        h.fn.call(h.scope, q, e, l);
        return !0;
      },
      failure: function (g, o) {
        var q = m;

        try {
          q = Ext.JSON.decode(g.responseText);
        } catch (l) {}

        f.fn.call(f.scope, q, g, o);
        return !1;
      },
      scope: this
    });
    return !0;
  },
  B3: function (c, h, f) {
    h = h || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/dictionaries/dictionaries/lang,pl/id,defaultavatars",
      method: "GET",
      disableCaching: !0,
      success: function (e, l) {
        var q = m;

        try {
          q = Ext.JSON.decode(e.responseText);
        } catch (o) {
          q = m;
        }

        h.fn.call(h.scope, q, e, l);
        return !0;
      },
      failure: function (g, o) {
        var q = m;

        try {
          q = Ext.JSON.decode(g.responseText);
        } catch (l) {}

        f.fn.call(f.scope, q, g, o);
        return !1;
      },
      scope: this
    });
    return !0;
  }
};