E.api.hv = {
  $la: function (c, h, f) {
    h = h || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/conversations/lastConversations",
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
  },
  Gja: function (c, h, f) {
    h = h || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    c._method = "DELETE";
    Ext.Ajax.request({
      url: "/api/conversations/lastConversation",
      method: C.ca.Da.methods.qd,
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