E.api.bb = function () {
  function L(e) {
    Ext.Object.each(e, function (h, b) {
      Ext.isArray(b) && b.length === 0 ? delete e[h] : !Ext.isArray(b) && Ext.String.trim(b) === "" && delete e[h];
    });
  }

  function G(h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    h = {
      cid: h.cid,
      aids: B(h).join(",")
    };
    Ext.Ajax.request({
      url: "/api/contacter/conference?listVersion=" + f + "&cid=" + h.cid + "&aids=" + h.aids,
      method: C.ca.Da.methods.qd,
      params: {
        _method: "DELETE"
      },
      success: function (e, u) {
        var q = m;

        try {
          e.responseText && (q = Ext.decode(e.responseText));
        } catch (p) {}

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, u) {
        var q = m;

        try {
          g.responseText && (q = Ext.decode(g.responseText));
        } catch (p) {}

        l.fn.call(l.scope, q, g, u);
      },
      scope: this
    });
    return !0;
  }

  function D(l, q, p) {
    var n = l.cid,
        q = q || {
      fn: t(),
      scope: this
    },
        p = p || {
      fn: t(),
      scope: this
    };
    l._method = "PUT";
    l = Ext.Object.toQueryString(l, !0);
    Ext.Ajax.request({
      url: "/api/contacter/contact?listVersion=" + f + "&cid=" + n,
      method: "POST",
      params: l,
      success: function (e, z) {
        var w = m;

        if (e.status === 200) {
          try {
            e.responseText && (w = Ext.decode(e.responseText));
          } catch (u) {}
        }

        q.fn.call(q.scope, w, e, z);
      },
      failure: function (g, z) {
        var w = m;

        try {
          g.responseText && (w = Ext.decode(g.responseText));
        } catch (u) {}

        p.fn.call(p.scope, w, g, z);
      },
      scope: this
    });
    return !0;
  }

  function B(h) {
    var n = [],
        l;

    for (l in h) {
      h[l].value && n.push(h[l].aid);
    }

    return n;
  }

  function y(h) {
    var n = {},
        l;

    for (l in h) {
      if (h[l].value && h[l].aid) {
        n[l] = n[l] || {}, n[l].value = h[l].value, h[l].aid && (n[l].aid = h[l].aid);
      }
    }

    return n;
  }

  var o = {},
      f = 0,
      c = m,
      Q = [],
      N = [],
      I = ["ShowName", "ConferenceID"];

  o.mi = function (e) {
    f = e == m ? 0 : e;
  };

  o.Ee = function () {
    return +f;
  };

  o.Fe = function (l, q, p) {
    q = q || {
      fn: t(),
      scope: this
    };
    Q.push(q);
    p = p || {
      fn: t(),
      scope: this
    };
    N.push(p);
    var n = {
      cids: l.Va,
      gids: l.gids,
      confCids: l.Rga
    };
    c && clearTimeout(c);
    c = setTimeout(function () {
      Ext.Ajax.request({
        url: "/api/contacter/contactList?listVersion=" + l.version + "&changedFromVersion=" + f,
        method: C.ca.Da.methods.qd,
        params: n,
        success: function (u, T) {
          var S = m;

          try {
            u.responseText && (S = Ext.decode(u.responseText), o.mi(+S.result.version));
          } catch (z) {}

          for (var w = 0; w < Q.length; w++) {
            Q[w].fn.call(Q[w].scope, S, u, T);
          }

          Q = [];
        },
        failure: function (u, T) {
          var S = m;

          try {
            u.responseText && (S = Ext.decode(u.responseText));
          } catch (z) {}

          for (var w = 0; w < N.length; w++) {
            N[w].fn.call(N[w].scope, S, u, T);
          }

          N = [];
        },
        scope: this
      });
      c = m;
    }, 500);
  };

  o.qH = function (q, p, n) {
    var p = p || {
      fn: t(),
      scope: this
    },
        n = n || {
      fn: t(),
      scope: this
    },
        b = q.uin ? q.uin : q.GGNumber == "" || !q.GGNumber ? "" : q.GGNumber;
    q.gid = q.gid || 2;
    b = {
      GGNumber: b,
      ShowName: q.ShowName || "",
      Email: q.Email || "",
      MobilePhone: q.MobilePhone || "",
      WwwAddress: q.WwwAddress || "",
      type: q.type || "",
      FlagFriend: q.FlagFriend || ""
    };
    L(b);
    Ext.Ajax.request({
      url: "/api/contacter/groupContacts?listVersion=" + f + "&gid=" + q.gid + "&newContact=1",
      method: C.ca.Da.methods.qd,
      params: b,
      success: function (g, z) {
        var w = m;

        try {
          g.responseText && (w = Ext.decode(g.responseText));
        } catch (u) {}

        p.fn.call(p.scope, w, g, z);
      },
      failure: function (h, z) {
        var w = m;

        try {
          h.responseText && (w = Ext.decode(h.responseText));
        } catch (u) {}

        n.fn.call(n.scope, w, h, z);
      },
      scope: this
    });
  };

  o.Lj = function (h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/contacter/contact?listVersion=" + f + "&cid=" + h.cid + "&aids=" + h.aids,
      method: C.ca.Da.methods.qd,
      params: {
        _method: "DELETE"
      },
      success: function (e, u) {
        var q = m;

        try {
          e.responseText && (q = Ext.decode(e.responseText));
        } catch (p) {}

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, u) {
        var q = m;

        try {
          g.responseText && (q = Ext.decode(g.responseText));
        } catch (p) {}

        l.fn.call(l.scope, q, g, u);
      },
      scope: this
    });
    return !0;
  };

  o.yd = function (h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/contacter/contact?listVersion=" + f + "&cid=" + h.cid + "&uin=" + h.uin,
      method: C.ca.Da.methods.kh,
      success: function (e, u) {
        var q = m;

        try {
          e.responseText && (q = Ext.decode(e.responseText));
        } catch (p) {}

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, u) {
        var q = m;

        try {
          g.responseText && (q = Ext.decode(g.responseText));
        } catch (p) {}

        l.fn.call(l.scope, q, g, u);
      },
      scope: this
    });
    return !0;
  };

  o.$Aa = function (h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/contacter/contact?listVersion=" + f + "&cid=" + h.cid,
      method: C.ca.Da.methods.kh,
      success: function (e, u) {
        var q = m;

        try {
          e.responseText && (q = Ext.decode(e.responseText));
        } catch (p) {}

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, p) {
        l.fn.call(l.scope, m, g, p);
      },
      scope: this
    });
    return !0;
  };

  o.WAa = function (h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/contacter/contactList?listVersion=" + f + "&changedFromVersion=" + f,
      method: C.ca.Da.methods.kh,
      success: function (e, u) {
        var q = m;

        try {
          e.responseText && (q = Ext.decode(e.responseText));
        } catch (p) {}

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, u) {
        var q = m;

        try {
          g.responseText && (q = Ext.decode(g.responseText));
        } catch (p) {}

        l.fn.call(l.scope, q, g, u);
      },
      scope: this
    });
    return !0;
  };

  o.eea = function (l, q, p) {
    l.Va = l.Va || [];
    l.gg = l.gg || [];
    var q = q || {
      fn: t(),
      scope: this
    },
        p = p || {
      fn: t(),
      scope: this
    },
        n = {
      name: l.name,
      expanded: l.expanded || 1
    };
    l.Va.length && (n.cids = l.Va.join(","));
    l.gg.length && (n.confCids = l.gg.join(","));
    Ext.Ajax.request({
      url: "/api/contacter/groups?listVersion=" + f,
      params: n,
      method: C.ca.Da.methods.qd,
      success: function (e, z) {
        var w = m;

        try {
          e.responseText && (w = Ext.decode(e.responseText));
        } catch (u) {}

        q.fn.call(q.scope, w, e, z);
      },
      failure: function (g, z) {
        var w = m;

        try {
          g.responseText && (w = Ext.decode(g.responseText));
        } catch (u) {}

        p.fn.call(p.scope, w, g, z);
      },
      scope: this
    });
  };

  o.lka = function (l, q, p) {
    var q = q || {
      fn: t(),
      scope: this
    },
        p = p || {
      fn: t(),
      scope: this
    },
        n = {
      name: l.name,
      expanded: l.expanded || 1,
      cids: l.Va && l.Va.join(",") || "",
      confCids: l.gg && l.gg.join(",") || "",
      oldCids: l.g6 && l.g6.join(",") || "",
      oldConfCids: l.h6 && l.h6.join(",") || "",
      _method: "PUT"
    };
    Ext.Ajax.request({
      url: "/api/contacter/groups?listVersion=" + f + "&gid=" + l.gid,
      params: n,
      method: C.ca.Da.methods.qd,
      success: function (e, z) {
        var w = m;

        try {
          e.responseText && (w = Ext.decode(e.responseText));
        } catch (u) {}

        q.fn.call(q.scope, w, e, z);
      },
      failure: function (g, z) {
        var w = m;

        try {
          g.responseText && (w = Ext.decode(g.responseText));
        } catch (u) {}

        p.fn.call(p.scope, w, g, z);
      },
      scope: this
    });
  };

  o.Dja = function (l, q, p) {
    var q = q || {
      fn: t(),
      scope: this
    },
        p = p || {
      fn: t(),
      scope: this
    },
        n = {
      cids: l.Va && l.Va.join(",") || "",
      confCids: l.gg && l.gg.join(",") || "",
      newGid: l.Spa || "",
      _method: "DELETE"
    };
    Ext.Ajax.request({
      url: "/api/contacter/groups?listVersion=" + f + "&gid=" + l.gid,
      params: n,
      method: C.ca.Da.methods.qd,
      success: function (e, z) {
        var w = m;

        try {
          e.responseText && (w = Ext.decode(e.responseText));
        } catch (u) {}

        q.fn.call(q.scope, w, e, z);
      },
      failure: function (g, z) {
        var w = m;

        try {
          g.responseText && (w = Ext.decode(g.responseText));
        } catch (u) {}

        p.fn.call(p.scope, w, g, z);
      },
      scope: this
    });
  };

  o.FA = D;

  o.Wsa = function (h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    h._method = "DELETE";
    Ext.Ajax.request({
      url: "/api/contacter/contact?listVersion=" + f + "&cid=" + h.cid + "&aids=" + h.aids,
      params: {
        _method: h._method
      },
      method: "POST",
      success: function (e, u) {
        var q = m;

        if (e.status === 200) {
          try {
            e.responseText && (q = Ext.decode(e.responseText));
          } catch (p) {}
        }

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, u) {
        var q = m;

        if (!g.responseXML) {
          try {
            g.responseText && (q = Ext.decode(g.responseText));
          } catch (p) {}
        }

        l.fn.call(l.scope, q, g, u);
      },
      scope: this
    });
  };

  o.ql = function (h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/contacter/conference?listVersion=" + f,
      params: {
        ConferenceID: h.conferenceID,
        ShowName: h.name
      },
      method: C.ca.Da.methods.qd,
      success: function (e, u) {
        var q = m;

        try {
          e.responseText && (q = Ext.decode(e.responseText));
        } catch (p) {}

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, u) {
        var q = m;

        try {
          g.responseText && (q = Ext.decode(g.responseText));
        } catch (p) {}

        l.fn.call(l.scope, q, g, u);
      },
      scope: this
    });
    return !0;
  };

  o.Yo = function (l, u, q) {
    u = u || {
      fn: t(),
      scope: this
    };
    q = q || {
      fn: t(),
      scope: this
    };
    l.cid = l.cid || "";
    var p = y(l);
    Ext.Object.each(p, function (e) {
      Ext.Array.indexOf(I, e) === -1 && delete p[e];
    });
    var w = Ext.Object.toQueryString({
      _method: "PUT",
      attr: p
    }, !0);
    Ext.Ajax.request({
      url: "/api/contacter/conference?listVersion=" + f + "&cid=" + l.cid,
      params: w,
      method: C.ca.Da.methods.oca,
      success: function (e, S) {
        var z = m;

        try {
          e.responseText && (z = Ext.decode(e.responseText));
        } catch (n) {}

        u.fn.call(u.scope, z, e, S);
      },
      failure: function (g, S) {
        var z = m;

        try {
          g.responseText && (z = Ext.decode(g.responseText));
        } catch (n) {}

        q.fn.call(q.scope, z, g, S);
      },
      scope: this
    });
    return !0;
  };

  o.oy = function (h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    h.cid = h.cid || "";
    h.conferenceId = h.conferenceId || "";
    Ext.Ajax.request({
      url: "/api/contacter/conference?listVersion=" + f + "&cid=" + h.cid + "&ConferenceID=" + h.conferenceId,
      method: C.ca.Da.methods.kh,
      success: function (e, u) {
        var q = m;

        try {
          e.responseText && (q = Ext.decode(e.responseText).result.conferences[0]);
        } catch (p) {}

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, u) {
        var q = m;

        try {
          g.responseText && (q = Ext.decode(g.responseText));
        } catch (p) {}

        l.fn.call(l.scope, q, g, u);
      },
      scope: this
    });
  };

  o.Cr = function (h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/contacter/groupContacts?listVersion=" + f + "&gid=3",
      method: C.ca.Da.methods.qd,
      params: {
        type: h.type,
        cids: h.cids.join(","),
        confCids: h.confCids.join(",")
      },
      success: function (e, u) {
        var q = m;

        try {
          e.responseText && (q = Ext.decode(e.responseText));
        } catch (p) {}

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, u) {
        var q = m;

        try {
          g.responseText && (q = Ext.decode(g.responseText));
        } catch (p) {}

        l.fn.call(l.scope, q, g, u);
      },
      scope: this
    });
    return !0;
  };

  o.vra = function (h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/contacter/groupContacts?listVersion=" + f + "&gid=3",
      method: C.ca.Da.methods.qd,
      params: {
        _method: "DELETE",
        type: h.type,
        cids: h.cids.join(","),
        confCids: h.confCids.join(",")
      },
      success: function (e, u) {
        var q = m;

        try {
          e.responseText && (q = Ext.decode(e.responseText));
        } catch (p) {}

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, u) {
        var q = m;

        try {
          g.responseText && (q = Ext.decode(g.responseText));
        } catch (p) {}

        l.fn.call(l.scope, q, g, u);
      },
      scope: this
    });
  };

  o.hs = G;

  o.Cja = function (e) {
    var n, l;
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    e && E.api.bb.oy({
      conferenceId: e.uin,
      cid: e.cid
    }, {
      fn: function (g) {
        G(g, {
          fn: function (p, w) {
            var u = m;

            try {
              p.responseText && (u = Ext.decode(p.responseText));
            } catch (q) {}

            n.fn.call(n.scope, u, p, w);
          },
          scope: this
        }, {
          fn: function (h, u) {
            var q = m;

            try {
              h.responseText && (q = Ext.decode(h.responseText));
            } catch (p) {}

            l.fn.call(l.scope, q, h, u);
          },
          scope: this
        });
      },
      scope: this
    }, {
      fn: this.v3,
      scope: this
    });
  };

  o.$m = function (g, q, p) {
    var q = q || {
      fn: t(),
      scope: this
    },
        p = p || {
      fn: t(),
      scope: this
    },
        n = {
      value: g.NoArchive == !0 ? "1" : "0"
    };

    if (g.oT) {
      n.aid = g.oT;
    }

    D({
      cid: g.cid,
      attr: {
        NoArchive: n
      }
    }, q, p);
  };

  o.gta = function (h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/contacter/ignored?listVersion=" + f,
      method: "POST",
      params: {
        uin: h
      },
      success: function (e, u) {
        var q = m;

        try {
          e.responseText && (q = Ext.decode(e.responseText));
        } catch (p) {}

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, u) {
        var q = m;

        try {
          g.responseText && (q = Ext.decode(g.responseText));
        } catch (p) {}

        l.fn.call(l.scope, q, g, u);
      },
      scope: this
    });
  };

  o.xta = function (h, n, l) {
    n = n || {
      fn: t(),
      scope: this
    };
    l = l || {
      fn: t(),
      scope: this
    };
    Ext.Ajax.request({
      url: "/api/contacter/ignored?listVersion=" + f,
      method: "POST",
      params: {
        uin: h,
        _method: "DELETE"
      },
      success: function (e, u) {
        var q = m;

        try {
          e.responseText && (q = Ext.decode(e.responseText));
        } catch (p) {}

        n.fn.call(n.scope, q, e, u);
      },
      failure: function (g, u) {
        var q = m;

        try {
          g.responseText && (q = Ext.decode(g.responseText));
        } catch (p) {}

        l.fn.call(l.scope, q, g, u);
      },
      scope: this
    });
  };

  return o;
}();