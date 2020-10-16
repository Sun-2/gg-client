E.api.Pb = function () {
  function c(e) {
    var l = {};
    Ext.Array.each(e, h(l));
    return l;
  }

  function h(b) {
    return function (e) {
      switch (e.type) {
        case "switch":
          b[e.name] = e.value;
          break;

        case "group":
          b[e.name] = {}, b[e.name] = c(e.items);
      }
    };
  }

  var f = {
    cBa: function (l, o, n) {
      o = o || {
        fn: t(),
        scope: this
      };
      n = n || {
        fn: t(),
        scope: this
      };
      Ext.Ajax.request({
        url: "/api/configurator-service?path=iapps/preferences/defaults",
        method: "GET",
        success: function (e, q) {
          var p = m;

          try {
            p = Ext.decode(e.responseText);
          } catch (u) {
            p = m;
          }

          o.fn.call(o.scope, p, e, q);
        },
        failure: function (g, u) {
          var q = m;

          try {
            q = Ext.decode(g.responseText);
          } catch (p) {}

          n.fn.call(n.scope, q, g, u);
        },
        scope: this
      });
      return !0;
    },
    Rz: function (l, o, n) {
      o = o || {
        fn: t(),
        scope: this
      };
      n = n || {
        fn: t(),
        scope: this
      };
      Ext.Ajax.request({
        url: "/api/preferences",
        method: "POST",
        params: l,
        success: function (e, q) {
          var p = m;

          try {
            p = Ext.decode(e.responseText);
          } catch (u) {
            p = m;
          }

          o.fn.call(o.scope, p, e, q);
        },
        failure: function (g, u) {
          var q = m;

          try {
            q = Ext.decode(g.responseText);
          } catch (p) {}

          n.fn.call(n.scope, q, g, u);
        },
        scope: this
      });
      return !0;
    },
    zma: function (l, o, n) {
      o = o || {
        fn: t(),
        scope: this
      };
      n = n || {
        fn: t(),
        scope: this
      };
      Ext.Ajax.request({
        url: "/api/preferences",
        method: "GET",
        params: l,
        success: function (e, q) {
          var p = m;

          try {
            p = Ext.decode(e.responseText).result;
          } catch (u) {
            p = m;
          }

          o.fn.call(o.scope, p, e, q);
        },
        failure: function (g, u) {
          var q = m;

          try {
            q = Ext.decode(g.responseText);
          } catch (p) {}

          n.fn.call(n.scope, q, g, u);
        },
        scope: this
      });
      return !0;
    },
    Yza: function (l, o, n) {
      o = o || {
        fn: t(),
        scope: this
      };
      n = n || {
        fn: t(),
        scope: this
      };
      Ext.Ajax.request({
        url: "/api/preferences?" + l,
        method: "DELETE",
        params: {},
        success: function (e, q) {
          var p = m;

          try {
            p = Ext.decode(e.responseText).result;
          } catch (u) {}

          o.fn.call(o.scope, p, e, q);
        },
        failure: function (g, u) {
          var q = m;

          try {
            q = Ext.decode(g.responseText);
          } catch (p) {}

          n.fn.call(n.scope, q, g, u);
        },
        scope: this
      });
      return !0;
    },
    Tj: function (l, o, n) {
      o = o || {
        fn: t(),
        scope: this
      };
      n = n || {
        fn: t(),
        scope: this
      };
      Ext.Ajax.request({
        url: "/api/user-settings?slots[0]=others&slots[1]=privacy-settings&slots[2]=notifications&slots[3]=england-terms",
        method: "GET",
        success: function (e, q) {
          var p = m;

          try {
            p = Ext.decode(e.responseText);
          } catch (u) {
            p = m;
          }

          o.fn.call(o.scope, p, e, q);
        },
        failure: function (g, u) {
          var q = m;

          try {
            q = Ext.decode(g.responseText);
          } catch (p) {}

          n.fn.call(n.scope, q, g, u);
        },
        scope: this
      });
      return !0;
    },
    Zz: function (l, o, n) {
      o = o || {
        fn: t(),
        scope: this
      };
      n = n || {
        fn: t(),
        scope: this
      };
      Ext.Ajax.request({
        url: "/api/user-settings",
        method: "POST",
        params: l,
        success: function (e, q) {
          var p = m;

          try {
            p = Ext.decode(e.responseText);
          } catch (u) {
            p = m;
          }

          o.fn.call(o.scope, p, e, q);
        },
        failure: function (g, u) {
          var q = m;

          try {
            q = Ext.decode(g.responseText);
          } catch (p) {}

          n.fn.call(n.scope, q, g, u);
        },
        scope: this
      });
      return !0;
    },
    wBa: function (l, o, n) {
      o = o || {
        fn: t(),
        scope: this
      };
      n = n || {
        fn: t(),
        scope: this
      };
      Ext.Ajax.request({
        url: "/api/katpub/persons?" + l.params,
        method: "GET",
        success: function (e, q) {
          var p = m;

          try {
            p = Ext.decode(e.responseText);
          } catch (u) {
            p = m;
          }

          o.fn.call(o.scope, p, e, q);
        },
        failure: function (g, u) {
          var q = m;

          try {
            q = Ext.decode(g.responseText);
          } catch (p) {}

          n.fn.call(n.scope, q, g, u);
        },
        scope: this
      });
      return !0;
    },
    Ega: function (l, o, n) {
      o = o || {
        fn: t(),
        scope: this
      };
      n = n || {
        fn: t(),
        scope: this
      };
      Ext.Ajax.request({
        url: "/api/aol/clearArchive/user," + l.uin,
        params: {
          user: l.user
        },
        method: "POST",
        success: function (e, q) {
          var p = m;

          try {
            p = Ext.decode(e.responseText);
          } catch (u) {
            p = m;
          }

          o.fn.call(o.scope, p, e, q);
        },
        failure: function (g, u) {
          var q = m;

          try {
            q = Ext.decode(g.responseText);
          } catch (p) {}

          n.fn.call(n.scope, q, g, u);
        },
        scope: this
      });
      return !0;
    }
  };
  f.N6 = c;
  f.Uxa = "profile_type";
  f.Vxa = "private";
  f.Wxa = "public";
  f.Mu = "communication_settings_group";
  f.Nu = "im_read_status";
  f.JB = "im_privacy";
  f.ZG = "ON";
  f.kya = "OFF";
  f.lh = "privacy-settings";
  return f;
}();