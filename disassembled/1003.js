E.ca.gi = {
  Mj: function (c, f) {
    return this.Dl(c, function (e, g) {
      f && f.attr && f.cid == e && Ext.Object.each(f.attr, function (h) {
        f.attr[h] && Ext.isArray(f.attr[h]) ? Ext.Array.each(f.attr[h], function (b) {
          Ext.Array.each(g[h], function (l) {
            l && b.aid && l.aid === b.aid && (l.value = b.value);
          });
          b.aid || g[h].push({
            value: b.value
          });
        }) : f.attr[h] && g[h] && g[h].aid === f.attr[h].aid && (g[h].value = f.attr[h].value);
      });
      f && f.aidsToClear && Ext.isArray(f.aidsToClear) && f.cid == e && Ext.Object.each(g, function (l, o) {
        if (Ext.isArray(o)) {
          var n = [];
          Ext.Array.each(o, function (h, p) {
            h.aid && Ext.Array.indexOf(f.aidsToClear, h.aid) !== -1 && n.unshift(p);
          });
          Ext.Array.each(n, function (h) {
            o.splice(h, 1);
          });
        } else {
          o.aid && Ext.Array.indexOf(f.aidsToClear, o.aid) !== -1 && (o.value = "");
        }
      });
    });
  },
  Cea: function (c) {
    return this.Dl(c, function (e, f) {
      Ext.Array.indexOf(f.gids, E.models.Ya.groups.tA) === -1 && f.gids.push(E.models.Ya.groups.tA);
    });
  },
  ura: function (c) {
    return this.Dl(c, function (e, f) {
      Ext.Array.indexOf(f.gids, E.models.Ya.groups.tA) !== -1 && f.gids.splice(Ext.Array.indexOf(f.gids, E.models.Ya.groups.tA), 1);
    });
  },
  restrict: function (c) {
    return this.Dl(c, function (e, f) {
      f.FlagFriend.value = 0;
    });
  },
  Zt: function (c) {
    return this.Dl(c, function (e, f) {
      f.FlagFriend.value = 1;
    });
  },
  ignore: function (c) {
    return this.Dl(c, function (e, f) {
      Ext.Array.indexOf(f.gids, E.models.Ya.groups.Og) === -1 && f.gids.push(E.models.Ya.groups.Og);
    });
  },
  mn: function (c) {
    return this.Dl(c, function (e, f) {
      Ext.Array.indexOf(f.gids, E.models.Ya.groups.Og) !== -1 && f.gids.splice(Ext.Array.indexOf(f.gids, E.models.Ya.groups.Og), 1);
    });
  },
  yd: function (c) {
    var n = c.get("extdata"),
        l = c.get("meta"),
        f = n.gids.slice(0);
    return c.zm() ? {
      cid: c.get("cid"),
      gids: f,
      ShowName: this.Ai("ShowName", c.data, l),
      ConferenceID: this.Ai("uin", c.data, l)
    } : {
      cid: c.get("cid"),
      gids: f,
      ShowName: this.Ai("ShowName", c.data, l),
      FirstName: this.Ai("FirstName", n, l),
      LastName: this.Ai("LastName", n, l),
      MobilePhone: this.Sx("MobilePhone", n, l),
      Phone: this.Sx("Phone", n, l),
      HomePhone: this.Sx("HomePhone", n, l),
      Email: this.Sx("Email", n, l),
      uin: this.Ai("uin", c.data, l),
      WwwAddress: this.Ai("WwwAddress", n, l),
      FlagFriend: this.Ai("FlagFriend", n, l),
      NoArchive: this.Ai("NoArchive", n, l)
    };
  },
  iBa: function () {
    return {
      result: {
        groups: {
          changed: [],
          deleted: []
        },
        contacts: {
          changed: [],
          deleted: []
        },
        conferences: {
          changed: [],
          deleted: []
        },
        version: "0"
      }
    };
  },
  Sx: function (c, n, l) {
    if (!Ext.isArray(n[c])) {
      return [];
    }

    var f = l[c] || [];
    return Ext.Array.map(n[c] || [], function (g, h) {
      return f[h] && f[h].aid ? {
        value: g,
        aid: f[h].aid
      } : {
        value: g
      };
    });
  },
  Ai: function (c, h, f) {
    return f[c] && f[c].aid ? {
      value: h[c] || "",
      aid: f[c].aid || ""
    } : {
      value: h[c] || ""
    };
  },
  Dl: function (D, B) {
    for (var z = Ext.getStore("ContactsStore"), y = {
      result: {
        groups: {
          changed: [],
          deleted: []
        },
        contacts: {
          changed: [],
          deleted: []
        },
        conferences: {
          changed: [],
          deleted: []
        },
        version: "0"
      }
    }, w = m, o = m, f = m, c = 0, G = D.length; c < G; c++) {
      if (w = D[c], o = z.Va[w].length > 0 ? z.Va[w][0] : m) {
        f = this.yd(o), B.apply(this, [w, f]), o.zm() ? y.result.conferences.changed.push(f) : y.result.contacts.changed.push(f);
      }
    }

    return y;
  }
};