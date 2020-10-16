Ext.define(E.stores.gv, {
  extend: C.stores.Store,
  model: E.models.Ya,
  sortOnLoad: !1,
  RI: !1,
  $L: 0,
  ih: m,
  ta: m,
  api: m,
  id: "ContactsStore",
  proxy: {
    type: "ajax",
    reader: {
      type: "ggpl.contacts.json"
    }
  },
  sortBy: m,
  Ty: !0,
  constructor: function (c) {
    c = c || {};
    E.api.bb.mi(c.d2);
    this.callParent(arguments);
    this.addEvents("silentupdate", "beforecontactslistchanged", "contactslistchanged", "contactslistloaded");
    this.on("load", this.Ii, this);
    this.on("datachanged", this.Ii, this);
    this.on("add", this.k9, this);
    this.on("datachanged", this.k9, this);
    this.on("remove", this.pM, this);
    this.on("clear", this.pM, this);
    this.on("beforeload", this.pM, this);
    this.on("add", this.yf, this);
    this.on("datachanged", this.Hd, this);
    this.on("remove", this.Qo, this);
    this.sortInfo = {};
    this.refs = {};
    this.Va = {};
    this.ih = {};
    this.ta = C.k().ta;
    this.api = E.api.bb;
    this.ta.on("conferenceclosed", function (e, l) {
      try {
        this.hs(this.Ba(l.conferenceID), {}, !1);
      } catch (f) {}
    }, this);
  },
  Ee: function () {
    return E.api.bb.Ee();
  },
  ak: function (c) {
    if (this.rk(c.result.version)) {
      return !1;
    }

    this.fireEvent("beforecontactslistchanged", this);
    c = c.result;
    this.fna(c.groups.deleted);
    this.cna(c.groups.changed);
    this.proxy.reader.kn();
    this.r4(c.contacts.deleted);
    this.q4(c.contacts.changed);
    this.r4(c.conferences.deleted);
    this.q4(c.conferences.changed);
    this.ee(this.sortBy, !0);
    this.fireEvent("contactslistchanged", this);
  },
  fna: function (c) {
    c.length && Ext.Array.each(c, function (e) {
      this.proxy.reader.Eja(e);
    }, this);
  },
  cna: function (c) {
    var f = this.proxy.reader.groups;
    c.length && (this.suspendEvents(), Ext.Array.each(c, function (e) {
      typeof f[e.gid] === "undefined" ? this.proxy.reader.Br(e) : this.proxy.reader.Yfa(e);
    }, this), this.resumeEvents());
  },
  r4: function (c) {
    c && Ext.each(c, function (e) {
      this.Va[e] && Ext.each(this.Va[e], function (f) {
        if (f) {
          f.get("uin"), f.get("type"), this.remove(f);
        } else {
          return !1;
        }
      }, this);
    }, this);
  },
  q4: function (c) {
    var n = Ext.create("Ext.util.MixedCollection"),
        l = m,
        f = m;
    c && Ext.each(c, function (e) {
      this.Va[e.cid] ? this.Lva(e.cid, e) : (l = this.proxy.reader.extractData([e]), Ext.each(l, function (h) {
        f = Ext.create(this.model, h);

        if (f.get("cid") > 0 && this.Va[f.get("cid")]) {
          f.set("protoInfo", this.Va[f.get("cid")][0].get("protoInfo")), n.add(f.get("cid"), f), f = m;
        } else {
          if (f.get("uin") > 0 && this.Ba(h.uin.value)) {
            var p = this.Ba(h.uin.value);
            this.remove(p);
            h.protoInfo = p.get("protoInfo");
            var o = p.get("extdata");
            p.h9(h);
            p.set("extdata", o);
            p.set("visible", !0);
            n.add(p.get("cid"), p);
          } else {
            f.get("uin") > 0 && Ext.StoreManager.lookup("UnknownContactsStore").Ba(f.get("uin")) && (h = Ext.StoreManager.lookup("UnknownContactsStore").Ba(f.get("uin")).get("protoInfo"), f.set("protoInfo", h));

            if (f.Rg()) {
              h = f.get("protoInfo"), h.status = "avail", f.set("protoInfo", h);
            }

            if (f.rm()) {
              h = f.get("protoInfo"), h.status = "ignored", f.set("protoInfo", h);
            }

            n.add(f);
            f = m;
          }
        }
      }, this), l = m);
    }, this);
    this.S4(n);
  },
  ima: function (c) {
    return {
      rl: [],
      cm: [],
      Xt: c
    };
  },
  Lva: function (G, D) {
    var B = Ext.create("Ext.util.MixedCollection"),
        z = m,
        y = G && this.Va[G] ? this.Va[G][0].Nla(D.gids) : this.ima(D.gids),
        o = this.proxy.reader.extractData([D]),
        f = y.cm.slice(0),
        c = y.rl.slice(0),
        L = y.Xt.slice(0),
        I = this.ly(G) ? this.ly(G).get("protoInfo") : m;
    Ext.Array.each(f, function (b) {
      this.sra(G, this.proxy.reader.Es(b));
    }, this);
    Ext.each(o, function (g) {
      var h = this.proxy.reader.Fs(g.gid, 1);

      if (c.indexOf(h) !== -1) {
        z = Ext.create(this.model, g);
        this.ly(z.get("cid")) ? (g = this.Va[z.get("cid")][0], z.set("protoInfo", g.get("protoInfo")), z.set("extdata", g.get("extdata")), g.Rg() && z.set("type", E.models.Ya.prototype.types.hugga)) : this.Ba(z.get("uin")) ? (z.set("protoInfo", this.Ba(z.get("uin")).get("protoInfo")), z.set("extdata", this.Ba(z.get("uin")).get("extdata")), z.set("visible", !0)) : I && z.set("protoInfo", I);

        if (z.get("extdata").gids.indexOf(1) !== -1 && z.get("protoInfo").status !== "ignored") {
          z.get("protoInfo").status = "ignored";
        }

        B.add(z.get("cid"), z);
        this.S4(B);
        this.fireEvent("silentupdate", this, [{
          uin: z.get("uin"),
          protoInfo: {
            status: z.get("protoInfo").status
          }
        }]);
        z = m;
      } else {
        L.indexOf(h) !== -1 && this.Kva(g);
      }
    }, this);
  },
  sra: function (c, h) {
    var f = this.Va[c].slice();
    Ext.each(f, function (e) {
      if (h === e.get("gid")) {
        var l = e.get("extdata");
        Ext.Array.remove(l.gids, this.proxy.reader.Fs(h));
        e.set("extdata", l);
        this.remove(e);
      }
    }, this);
  },
  Kva: function (c) {
    var f = c.cid && this.Va[c.cid] ? this.Va[c.cid] : this.Ba(c.ConferenceID);
    f[0] && f[0].get("uin") != 0 && c.protoInfo && delete c.protoInfo;
    Ext.each(f, function (g) {
      var b = !1;

      if (c.gid === g.get("gid")) {
        if ((g.get("type") == E.models.Ya.prototype.types.dummycontact || g.get("type") == E.models.Ya.prototype.types.hugga) && g.get("uin") != c.uin) {
          b = !0;
        }

        if (1 === g.get("protoInfo").anonymous) {
          c.type = E.models.Ya.prototype.types.anonymous;
        }

        g.h9(c);
        b && (this.Ba(g.get("uin")) ? this.refs[g.get("uin")].push(g) : this.refs[g.get("uin")] = [g]);

        if (g.Rg()) {
          b = g.get("protoInfo"), b.status = "avail", g.set("protoInfo", b);
        }
      }
    }, this);
  },
  S4: function (c) {
    if (c && c.getCount()) {
      var z = [];
      c.sortBy(function (g, h) {
        return C.ca.xa.du(g.Uj(this.sortBy), h.Uj(this.sortBy));
      });

      for (var u = 0, o = c.getCount(), f = m, B = 0; u < o; u += 1) {
        for (var f = c.getAt(u), y = this.getCount(), w = m; B < y; B += 1) {
          if (w = this.getAt(B), C.ca.xa.du(f.Uj(this.sortBy), w.Uj(this.sortBy)) < 0) {
            z[u] = B;
            break;
          }
        }

        typeof z[u] === "undefined" && u < o && (z[u] = this.getCount());
      }

      u = z.length - 1;

      for (f = o = m; u >= 0; u -= 1) {
        o = z[u], f = c.getAt(u), Ext.StoreManager.lookup("UnknownContactsStore").pra(f.get("uin")), this.insert(o, f);
      }
    }
  },
  Fe: function (c, f) {
    f = f || {};
    f.Ea = f.Ea || Ext.emptyFn;
    f.ya = f.ya || Ext.emptyFn;
    f.scope = f.scope || this;

    if (c <= this.Ee()) {
      return !1;
    }

    E.api.bb.Fe({
      Va: C.ca.Da.y5(this.data.items, function (e) {
        return e.get("type") === 1 || e.get("type") === 2 || e.get("type") === 8 || e.get("type") === 16 ? e.get("cid") : m;
      }, this).join(","),
      gids: Ext.Object.getKeys(this.getGroups()).join(","),
      Rga: C.ca.Da.y5(this.data.items, function (e) {
        return e.get("type") === 4 && e.get("cid") !== 0 ? e.get("cid") : m;
      }, this).join(","),
      version: c
    }, {
      fn: function (e) {
        this.ak(e);
        this.ta.fireEvent("conferencemembershipchangeready");

        try {
          f.Ea.call(f.scope);
        } catch (g) {}
      },
      scope: this
    }, {
      fn: function () {
        try {
          f.ya.call(f.scope);
        } catch (e) {}
      },
      scope: this
    });
    return !0;
  },
  Soa: function (c, h, f) {
    h && this.proxy.reader.eta(h);
    this.loadData(this.proxy.reader.extractData(c, f));
  },
  Ii: function (c, p) {
    p = c.getRange();
    p = Ext.isObject(p) && Ext.Object.getSize(p) == 0 ? c.getRange() : p;
    p = Ext.isArray(p) ? p : [p];
    this.Om = {};

    for (var o = 0, n = p.length, f = p[o]; o < n; o++, f = p[o]) {
      this.Om[f.get("uin")] = f.data;
    }
  },
  vM: function () {
    this.sortInfo = {
      j2: 0,
      h2: 0,
      ON: 0,
      NN: 0,
      mz: [],
      lz: [],
      QN: {},
      PN: {}
    };
  },
  fI: x("Ty"),
  doSort: function (c) {
    if (this.fI()) {
      if (this.remoteSort) {
        this.load();
      } else {
        this.data.sortBy(c);

        if (!this.buffered) {
          this.vM();

          for (var c = this.getRange(), h = c.length, f = 0; f < h; f++) {
            c[f].index > f ? (this.sortInfo.mz[c[f].index] = f - c[f].index, this.sortInfo.lz[c[f].index] = 0, this.sortInfo.j2++, this.sortInfo.QN[c[f].data.uin] ? this.sortInfo.QN[c[f].data.uin]++ : (this.sortInfo.QN[c[f].data.uin] = 1, this.sortInfo.ON++)) : c[f].index < f ? (this.sortInfo.lz[c[f].index] = f - c[f].index, this.sortInfo.mz[c[f].index] = 0, this.sortInfo.h2++, this.sortInfo.PN[c[f].data.uin] ? this.sortInfo.PN[c[f].data.uin]++ : (this.sortInfo.PN[c[f].data.uin] = 1, this.sortInfo.NN++)) : (this.sortInfo.mz[c[f].index] = 0, this.sortInfo.lz[c[f].index] = 0), c[f].index = f;
          }
        }

        this.fireEvent("datachanged", this);
      }
    }
  },
  aA: function (c) {
    this.sorters = c;
    this.mixins.sortable.initSortable.call(this);
  },
  ee: function (c, f) {
    c = c || this.sortBy;

    if ("stars" === c) {
      this.sortBy = c, this.aA([{
        fn: function (g, h) {
          return C.ca.xa.du(g.Uj("stars"), h.Uj("stars"));
        },
        direction: "ASC"
      }]);
    } else {
      if ("groups" === c) {
        this.sortBy = c, this.aA([{
          fn: function (g, h) {
            return C.ca.xa.du(g.Uj("groups"), h.Uj("groups"));
          },
          direction: "ASC"
        }]);
      }
    }

    f && this.sort();
  },
  Ba: function (c) {
    if (!this.refs[c] || !this.refs[c][0]) {
      return m;
    }

    try {
      return this.refs[c][0];
    } catch (f) {
      return m;
    }
  },
  wh: function (c) {
    if (!this.refs[c]) {
      return !1;
    }

    try {
      return this.refs[c];
    } catch (f) {
      return m;
    }
  },
  ly: function (c) {
    if (!this.Va[c]) {
      return !1;
    }

    try {
      return this.Va[c][0];
    } catch (f) {
      return m;
    }
  },
  k9: function (c, f) {
    if (!Ext.isArray(f) && typeof f === "object" && Ext.Object.getSize(f) === 0) {
      return !0;
    }

    f = Ext.isArray(f) ? f : [f];
    Ext.each(f, function (e) {
      this.refs[e.data.uin] = this.refs[e.data.uin] || [];
      this.refs[e.data.uin].unshift(e);
      this.Va[e.data.cid] = this.Va[e.data.cid] || [];
      this.Va[e.data.cid].unshift(e);
    }, this);
    return !0;
  },
  nk: function (c) {
    if (C.k().Co("playOnAvailable")) {
      for (var f in c) {
        c[f].protoInfo && c[f].protoInfo.status !== "not_avail" && c[f].protoInfo.status !== "invisible" && c[f].uin != C.k().fa.get("uin").toString() && C.k().zz();
      }
    }
  },
  pM: function (c, f) {
    if (!Ext.isArray(f) && typeof f === "object" && Ext.Object.getSize(f) === 0) {
      return delete this.refs, this.refs = {}, delete this.Va, this.Va = {}, !0;
    }

    f = Ext.isArray(f) ? f : [f];
    Ext.each(f, function (e) {
      this.refs[e.data.uin] && Ext.each(this.refs[e.data.uin], function (g, b) {
        e === g && this.refs[g.data.uin].splice(b, 1);
      }, this);
      this.Va[e.data.cid] && Ext.each(this.Va[e.data.cid], function (g, b) {
        e === g && this.Va[g.data.cid].splice(b, 1);
      }, this);
    }, this);
    return !0;
  },
  Ek: function (c, h) {
    h = h || !1;
    this.suspendEvents();
    var f = [];
    Ext.each(c, function (g) {
      var l = this.wh(g.uin),
          o = g.uin;
      Ext.each(l, function (b) {
        g.uin = b.get("uin") || g.uin;
        b.set(g);
        f.push(b);
      }, this);
      g.uin = o;
    }, this);
    this.resumeEvents();
    h && this.sort();
    this.fireEvent("silentupdate", this, c);
    return c;
  },
  getGroups: function () {
    return this.proxy.reader.groups;
  },
  h4: function (c) {
    return this.queryBy(function (b) {
      if (b.get("gid") === +c.gid && b.get("visible")) {
        return !0;
      }

      return !1;
    });
  },
  Qma: function (c) {
    var f = [];
    return this.queryBy(function (e) {
      var b = e.get("extdata").gids;

      if (b && Ext.Array.indexOf(b, c) != -1 && Ext.Array.indexOf(f, e.get("cid")) == -1) {
        return f.push(e.get("cid")), !0;
      }

      return !1;
    });
  },
  f9: function (c, h) {
    var f = this.wh(c);
    f && Ext.each(f, function (e) {
      e.set(h);

      if (e.get("type") == 4) {
        for (var l = e.get("extdata").members, q = 0, o = l.length; q < o; q++) {
          if (this.Ba(l[q].yb) && this.Ba(l[q].yb).get("protoInfo").status != "not_avail") {
            e.set("protoInfo", {
              status: "conference",
              friend: 0
            });
            break;
          }
        }

        this.fireEvent("silentupdate", this, [{
          uin: e.get("uin"),
          ShowName: e.get("ShowName")
        }]);
      }
    }, this);
    this.ee(this.sortBy, !0);
  },
  ZAa: function () {
    return this.queryBy(function (c) {
      if (c.get("type") === c.types.conference) {
        return !0;
      }

      return !1;
    }, this);
  },
  yf: function (c, h) {
    Ext.isArray(h) || (h = [h]);
    var f = m;
    Ext.each(h, function (e) {
      f = this.proxy.reader.Fs(e.data);
      e.kpa();
      this.ih[f] = this.ih[f] || [];
      this.ih[f].push(e.get("uin"));
    }, this);
  },
  Qo: function (c, n) {
    var l = this.proxy.reader.Fs(n.data),
        f = Ext.Array.indexOf(this.ih[l], n.get("uin"));
    f > -1 && this.ih[l].splice(f, 1);
  },
  Hd: function (c) {
    var f = m;
    this.ih = {};
    Ext.each(c.getRange(), function (e) {
      f = this.proxy.reader.Fs(e.data);
      this.ih[f] = this.ih[f] || [];
      this.ih[f].push(e.get("uin"));
    }, this);
  },
  le: function (c, h) {
    if (!c || !c.uin) {
      return !1;
    }

    h = h || {};
    h.Ea = h.Ea || Ext.emptyFn;
    h.ya = h.ya || Ext.emptyFn;
    h.scope = h.scope || this;
    var f = this;
    E.api.bb.qH(c, {
      fn: function (e, g, o) {
        f.Fe(f.Ee() + 1, {
          Ea: function () {
            try {
              h.Ea.call(h.scope, e, g, o);
            } catch (b) {}
          },
          ya: function () {
            h.ya.call(h.scope);
          },
          scope: f
        });
      },
      scope: h.scope
    }, {
      fn: function () {
        try {
          h.ya.call(h.scope);
        } catch (e) {}
      },
      scope: h.scope
    });
    return !0;
  },
  jea: function (c, h) {
    if (!c || !c.uin) {
      return !1;
    }

    h = h || {};
    h.Ea = h.Ea || Ext.emptyFn;
    h.ya = h.ya || Ext.emptyFn;
    h.scope = h.scope || this;
    var f = this;
    E.api.bb.qH(c, {
      fn: function () {
        f.Fe(f.Ee() + 1, {
          Ea: function () {
            try {
              h.Ea.call(h.scope);
            } catch (e) {}
          },
          ya: function () {
            h.ya.call(h.scope);
          },
          scope: f
        });
      },
      scope: h.scope
    }, {
      fn: function () {
        try {
          h.ya.call(h.scope);
        } catch (e) {}
      },
      scope: h.scope
    });
    return !0;
  },
  Jva: function (c, n, l) {
    if (!c || !c.cid) {
      return !1;
    }

    l = l || {};
    l.Ea = l.Ea || Ext.emptyFn;
    l.ya = l.ya || Ext.emptyFn;
    l.scope = l.scope || this;
    var f = this;
    E.api.bb.FA(c, {
      fn: function () {
        f.Fe(f.Ee() + 1, {
          Ea: function () {
            try {
              l.Ea.call(l.scope), f.fireEvent("updateindicator", this, c.cid, n);
            } catch (b) {}
          },
          ya: function () {
            l.ya.call(l.scope);
          },
          scope: f
        });
      },
      scope: l.scope
    }, {
      fn: function () {
        try {
          l.ya.call(l.scope);
        } catch (e) {}
      },
      scope: l.scope
    });
    return !0;
  },
  Lj: function (c, h) {
    if (!c || !c.cid || !c.uin || !c.aids) {
      return !1;
    }

    h = h || {};
    h.Ea = h.Ea || Ext.emptyFn;
    h.ya = h.ya || Ext.emptyFn;
    h.scope = h.scope || this;
    var f = this;
    E.api.bb.Lj(c, {
      fn: function () {
        f.Fe(f.Ee() + 1, {
          Ea: function () {
            try {
              h.Ea.call(h.scope);
            } catch (e) {}
          },
          ya: function () {
            h.ya.call(h.scope);
          },
          scope: f
        });
      },
      scope: h.scope
    }, {
      fn: function () {
        try {
          h.ya.call(h.scope);
        } catch (e) {}
      },
      scope: h.scope
    });
    return !0;
  },
  lZ: function (c, h) {
    if (!c || c.GGNumber) {
      return !1;
    }

    c.ShowName = c.name;
    h.Ea = h.Ea || Ext.emptyFn;
    h.ya = h.ya || Ext.emptyFn;
    h.scope = h.scope || this;
    var f = this;
    E.api.bb.qH(c, {
      fn: function () {
        f.Fe(f.Ee() + 1, {
          Ea: function () {
            try {
              h.Ea.call(h.scope);
            } catch (e) {}
          },
          ya: function () {
            h.ya.call(h.scope);
          },
          scope: f
        });
      },
      scope: h.scope
    }, {
      fn: function () {
        try {
          h.ya.call(h.scope);
        } catch (e) {}
      },
      scope: h.scope
    });
    return !0;
  },
  TEa: function (c, h) {
    if (!c || !c.cid) {
      return !1;
    }

    h.Ea = h.Ea || Ext.emptyFn;
    h.ya = h.ya || Ext.emptyFn;
    h.scope = h.scope || this;
    var f = this;
    E.api.bb.FA(c, {
      fn: function () {
        f.Fe(f.Ee() + 1, {
          Ea: function () {
            try {
              h.Ea.call(h.scope);
            } catch (e) {}
          },
          ya: function () {
            h.ya.call(h.scope);
          },
          scope: f
        });
      },
      scope: h.scope
    }, {
      fn: function () {
        try {
          h.ya.call(h.scope);
        } catch (e) {}
      },
      scope: h.scope
    });
    return !0;
  },
  Wza: function (c, h) {
    if (!c || !c.cid) {
      return !1;
    }

    h.Ea = h.Ea || Ext.emptyFn;
    h.ya = h.ya || Ext.emptyFn;
    h.scope = h.scope || this;
    var f = this;
    E.api.bb.Wsa(c, {
      fn: function () {
        f.Fe(f.Ee() + 1, {
          Ea: function () {
            try {
              h.Ea.call(h.scope);
            } catch (e) {}
          },
          ya: function () {
            h.ya.call(h.scope);
          },
          scope: f
        });
      },
      scope: h.scope
    }, {
      fn: function () {
        try {
          h.ya.call(h.scope);
        } catch (e) {}
      },
      scope: h.scope
    });
    return !0;
  },
  ql: function (c, h) {
    if (!c || !c.members) {
      return !1;
    }

    h.Ea = h.Ea || Ext.emptyFn;
    h.ya = h.ya || Ext.emptyFn;
    h.scope = h.scope || this;
    var f = this;
    this.ta.Io(c, {
      success: function (e) {
        var b = e.conferenceID;
        E.api.bb.ql({
          conferenceID: b,
          name: c.name !== "" ? c.name : ""
        }, {
          fn: function () {
            f.Fe(f.Ee() + 1, {
              Ea: function () {
                h.Ea && h.scope && h.Ea.call(h.scope, b);
              },
              ya: function () {
                h.ya && h.ya.call(h.scope);
              },
              scope: f
            });
            h.Ea && h.Ea.call(h.scope);
          },
          scope: h.scope
        }, {
          fn: function () {
            h.ya && h.ya.call(h.scope);
          },
          scope: h.scope
        });
      },
      failure: function () {
        h.ya && h.ya.call(h.scope);
      },
      scope: h.scope
    });
    return !0;
  },
  hs: function (c, n, l) {
    if (!c || !c.get("uin") || !c.get("cid")) {
      return !1;
    }

    l = typeof l != "undefined" ? l : !0;
    n.Ea = n.Ea || Ext.emptyFn;
    n.ya = n.ya || Ext.emptyFn;
    n.scope = n.scope || this;
    var f = this;
    this.api.oy({
      conferenceId: c.get("uin"),
      cid: c.get("cid")
    }, {
      fn: function (b) {
        f.api.hs(b, {
          fn: function () {
            f.Fe(f.Ee() + 1, {
              Ea: function () {
                try {
                  l && V.Jo(c.get("uin")), n.Ea && n.Ea.call(n.scope);
                } catch (e) {}
              },
              ya: function () {
                n.ya && n.ya.call(n.scope);
              },
              scope: this
            });
          },
          scope: n.scope
        }, {
          fn: function () {
            n.ya && n.ya.call(n.scope);
          },
          scope: n.scope
        });
      },
      scope: n.scope
    }, {
      fn: function () {
        n.ya && n.ya.call(n.scope);
      },
      scope: n.scope
    });
    return !0;
  },
  rp: function (c, n) {
    if (!c || !c.id) {
      return !1;
    }

    n.Ea = n.Ea || Ext.emptyFn;
    n.ya = n.ya || Ext.emptyFn;
    n.scope = n.scope || this;

    try {
      try {
        V.Jo(c.id);
      } catch (l) {}

      this.remove(this.Ba(c.id) ? this.Ba(c.id) : m);
      n.Ea.call(n.scope);
    } catch (f) {
      n.ya.call(n.scope);
    }

    return !0;
  },
  rZ: function (c, h) {
    if (!c || !c.conferenceID) {
      return !1;
    }

    h.Ea = h.Ea || Ext.emptyFn;
    h.ya = h.ya || Ext.emptyFn;
    h.scope = h.scope || this;
    var f = this;
    E.api.bb.ql({
      conferenceID: c.conferenceID,
      name: c.name !== "" ? c.name : ""
    }, {
      fn: function () {
        f.Fe(f.Ee() + 1, {
          Ea: function () {
            h.Ea && h.scope && h.Ea.call(h.scope);
          },
          ya: function () {
            h.ya && h.ya.call(h.scope);
          },
          scope: f
        });
        h.Ea && h.Ea.call(h.scope);
      },
      scope: this
    }, {
      fn: function () {
        h.ya && h.ya.call(h.scope);
      },
      scope: h.scope
    });
    return !0;
  },
  Br: function (c, h) {
    h.Ea = h.Ea || Ext.emptyFn;
    h.ya = h.ya || Ext.emptyFn;
    h.scope = h.scope || this;
    var f = this;
    E.api.bb.eea(c, {
      fn: function () {
        f.Fe(f.Ee() + 1, {
          Ea: function () {
            try {
              h.Ea.call(h.scope);
            } catch (e) {}
          },
          ya: function () {
            h.ya.call(h.scope);
          },
          scope: f
        });
      },
      scope: h.scope
    }, {
      fn: function () {
        try {
          h.ya.call(h.scope);
        } catch (e) {}
      },
      scope: h.scope
    });
    return !0;
  },
  Yo: function (c, h) {
    h = h || {};
    h.Ea = h.Ea || Ext.emptyFn;
    h.ya = h.ya || Ext.emptyFn;
    h.scope = h.scope || this;
    var f = this;
    E.api.bb.Yo(c, {
      fn: function () {
        f.Fe(f.Ee() + 1, {
          Ea: function () {
            try {
              h.Ea.call(h.scope);
            } catch (e) {}
          },
          ya: function () {
            h.ya.call(h.scope);
          },
          scope: f
        });
      },
      scope: h.scope
    }, {
      fn: function () {
        try {
          h.ya.call(h.scope);
        } catch (e) {}
      },
      scope: h.scope
    });
    return !0;
  },
  lBa: function () {
    return [];
  },
  rk: function (c) {
    if (c === "0") {
      return !1;
    }

    if (this.$L >= c) {
      return !0;
    }

    this.d2 = this.$L = c;
    return !1;
  },
  dO: function (c, n, l, f) {
    this.callParent(arguments);
    n === "ShowName" && l !== f && this.fireEvent("silentupdate", this, [{
      uin: c.get("uin"),
      ShowName: c.get("ShowName")
    }]);
  },
  KM: function (c) {
    this.RI = c;
    this.fireEvent("contactslistloaded", this, this.RI);
  },
  aBa: x("RI"),
  Ns: function (c) {
    var f = [];
    Ext.iterate(c, function (e, g) {
      this.refs[e] ? (f.push(e), this.ZN(e, g)) : this.$N(g, e);
      f = f.concat(g);
    }, this);
    this.ee(this.sortBy, !0);
    this.fireEvent("aliasesupdated", this, f);
  },
  ZN: function (c, h) {
    var f = this.Ba(c);
    f && Ext.each(h, function (g) {
      if (this.refs[g] && this.refs[g] !== this.refs[c]) {
        var b = this.refs[g];
        this.refs[g] = this.refs[c] || [];
        Ext.each(b, function (l) {
          this.refs[c].push(l);
        }, this);
      }

      f !== this.refs[g][0] && this.refs[g].unshift(f);
      f.Mw(g);
      Ext.each(this.refs[g], function (e) {
        g === e.get("uin") && (e.set("visible", !1), e.set("visStatus", !1), e.set("primaryUin", f.get("uin")), e.set("dublicated", !0));
      }, this);
    }, this);
  },
  $N: function (c, f) {
    Ext.each(c, function (e) {
      var g = this.Ba(e);
      g && !this.refs[f] && (this.refs[f] = []);
      g && (Ext.each(this.refs[e], function (h) {
        this.refs[f].push(h);
      }, this), this.refs[e] = this.refs[f], g.mta(f));
    }, this);
  }
});