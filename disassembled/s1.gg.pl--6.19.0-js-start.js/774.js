E.api.hl = {
  xma: function (c, h, f) {
    h = h || {
      fn: t(),
      scope: this
    };
    f = f || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/katpub/persons.json",
      method: "GET",
      params: c.data,
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