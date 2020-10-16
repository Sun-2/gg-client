E.api.ZF = {
  create: function (c, p, o) {
    var p = p || {
      fn: t(),
      scope: this
    },
        o = o || {
      fn: t(),
      scope: this
    },
        n = c.uin;
    delete c.uin;
    var f = {};

    if (c.$s != 0 && c.at != 0) {
      f.lat = c.$s, f.lng = c.at;
    }

    if (c.vZ) {
      f["age_ranges[]"] = c.vZ;
    }

    if (c.gender) {
      f.gender = c.gender;
    }

    Ext.Ajax.request({
      url: "/api/roulettes/gg/pl:" + n + ".json",
      method: "POST",
      params: f,
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
  }
};