E.api.nT = {
  Dd: function (c, n, l) {
    var n = n || {
      fn: t(),
      scope: this
    },
        l = l || {
      fn: t(),
      scope: this
    },
        f = {
      version: 1,
      abuser: c.Rda,
      reasons: []
    };
    c.fua && f.reasons.push("SPAM");
    c.vwa && f.reasons.push("CONTENT");
    c.uwa && f.reasons.push("PROFILE");

    if (c.other) {
      f.reasons.push("OTHER"), f.other_reason_description = c.pqa;
    }

    f.ignore_abuser_requested = c.ignore;
    Ext.Ajax.request({
      url: "/api/nemesis/abuse-reports",
      method: "POST",
      params: {
        data: JSON.stringify(f)
      },
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
  }
};