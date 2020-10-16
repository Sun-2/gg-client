E.api.Ob = function () {
  function c(h, p, o) {
    p = p || {
      fn: t(),
      scope: this
    };
    o = o || {
      fn: t(),
      scope: this
    };
    h = {
      status: h.status,
      owner: h.qqa + "," + h.Aa,
      Lb: "id," + h.Bh,
      additionalStatus: h.additionalStatus || ""
    };
    Ext.Ajax.request({
      url: "/api/invitations/invitations/" + h.owner + "/" + h.Lb,
      method: C.ca.Da.methods.qd,
      params: {
        _method: "PUT",
        status: h.status,
        additionalStatus: h.additionalStatus
      },
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

  function n(g) {
    if (g.result && g.result.invitations && g.result.invitations.length) {
      for (var g = g.result.invitations, h = 0; h < g.length; h++) {
        typeof g[h].subtype === "undefined" && (g[h].subtype = g[h]["class"]);
      }
    }
  }

  function l() {
    l = {
      1: {
        msg: E.oa.iaa
      },
      2: {
        msg: E.oa.pD
      },
      3: {
        msg: E.oa.laa
      },
      4: {
        msg: E.oa.maa
      },
      5: {
        msg: E.oa.naa
      },
      20: {
        msg: E.oa.jaa
      },
      21: {
        msg: E.oa.oaa,
        timeout: 2000
      },
      22: {
        msg: E.oa.kaa
      }
    };
  }

  var f = {
    tf: function (e) {
      if (!e.result || !e.result.errorData) {
        return m;
      }

      e = e.result.errorData.systemCode;
      typeof l === "function" && l();
      return l[e] ? l[e] : m;
    },
    Ym: function (h, p, o) {
      p = p || {
        fn: t(),
        scope: this
      };
      o = o || {
        fn: t(),
        scope: this
      };
      h = {
        context: h.type + "," + h.id,
        recipient: h.recipient,
        userMsg: h.iO || "",
        noActions: h.XCa || 0
      };
      Ext.Ajax.request({
        url: "/api/invitations/invitations",
        method: C.ca.Da.methods.qd,
        params: h,
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
    Nm: function (o, u, q) {
      var u = u || {
        fn: t(),
        scope: this
      },
          q = q || {
        fn: t(),
        scope: this
      },
          p = {
        owner: o.Im + "," + o.Hm,
        invitation: "id," + (o.Bh || o.Ch.get("id")),
        status: o.status
      };
      typeof o.additionalStatus !== "undefined" && o.additionalStatus !== m && (p.additionalStatus = o.additionalStatus || m);
      o.Ch && o.Ch.get("body") && Ext.Array.each(o.Ch.get("body").buttons, function (e) {
        if (e.params.status == p.status && e.params.additionalStatus) {
          p.additionalStatus = e.params.additionalStatus;
        }
      }, this);
      Ext.Ajax.request({
        url: "/api/invitations/invitations/" + p.owner + "/" + p.invitation,
        method: C.ca.Da.methods.qd,
        params: {
          _method: "PUT",
          status: p.status,
          additionalStatus: p.additionalStatus
        },
        success: function (e, z) {
          var y = m;

          try {
            y = Ext.decode(e.responseText);
          } catch (w) {
            y = m;
          }

          u.fn.call(u.scope, y, e, z);
        },
        failure: function (g, z) {
          var y = m;

          try {
            y = Ext.decode(g.responseText);
          } catch (w) {}

          q.fn.call(q.scope, y, g, z);
        },
        scope: this
      });
    },
    SJ: function (e, w, p) {
      var w = w || {
        fn: t(),
        scope: this
      },
          p = p || {
        fn: t(),
        scope: this
      },
          e = {
        uin: e.uin,
        limit: e.limit || 20,
        type: e.type
      },
          y = "";

      if (typeof e.type === "String") {
        y = "type=" + e.type;
      } else {
        var o = [];
        Ext.Array.each(e.type, function (g) {
          o.push("type[]=" + g);
        });
        y = o.join("&");
      }

      Ext.Ajax.request({
        url: "/api/invitations/invitations/user," + e.uin + "?" + y + "&limit=" + e.limit,
        method: C.ca.Da.methods.kh,
        success: function (g, u) {
          var q = m;

          try {
            q = Ext.decode(g.responseText), n(q);
          } catch (z) {
            q = m;
          }

          w.fn.call(w.scope, q, g, u);
        },
        failure: function (h, z) {
          var u = m;

          try {
            u = Ext.decode(h.responseText);
          } catch (q) {}

          p.fn.call(p.scope, u, h, z);
        },
        scope: this
      });
      return !0;
    },
    Xla: function (e, p, o) {
      p = p || {
        fn: t(),
        scope: this
      };
      o = o || {
        fn: t(),
        scope: this
      };
      e = {
        uin: e.uin,
        type: e.qqa || "user",
        invitationId: e.Bh
      };
      Ext.Ajax.request({
        url: "/api/invitations/invitations/" + e.type + "," + e.uin + "/id," + e.invitationId,
        method: C.ca.Da.methods.kh,
        success: function (g, u) {
          var q = m;

          try {
            q = Ext.decode(g.responseText), n(q);
          } catch (w) {
            q = m;
          }

          p.fn.call(p.scope, q, g, u);
        },
        failure: function (h, w) {
          var u = m;

          try {
            u = Ext.decode(h.responseText);
          } catch (q) {}

          o.fn.call(o.scope, u, h, w);
        },
        scope: this
      });
    },
    Cya: function (p, o, b) {
      p.status = "accepted";
      return c(p, o, b);
    },
    EDa: function (p, o, b) {
      p.status = "rejected";
      return c(p, o, b);
    },
    eza: function (p, o, b) {
      p.status = "cancelled";
      return c(p, o, b);
    },
    Xfa: function (h, p, o) {
      p = p || {
        fn: t(),
        scope: this
      };
      o = o || {
        fn: t(),
        scope: this
      };
      Ext.Ajax.request({
        url: "/api/invitations/foreignInvitations/user," + h.uin + "/id," + h.Bh,
        method: C.ca.Da.methods.qd,
        params: {
          _method: "PUT",
          email: h.data.fm,
          action: h.data.action,
          token: h.data.token
        },
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
    }
  };
  return f;
}();