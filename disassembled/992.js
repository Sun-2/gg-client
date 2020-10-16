Ext.define(E.f.layout.gd.tC, {
  extend: C.f.Rk,
  cls: "sr-contacts sr-contact-list",
  autoHeight: !1,
  DAa: !1,
  store: m,
  simpleSelect: !0,
  multiSelect: !1,
  fJ: [],
  disableSelection: !0,
  Wd: m,
  n4: m,
  itemSelector: "div.sr-contact",
  pK: "div.sr-contacts-group",
  k4: "collapsed",
  j4: "d-none",
  oK: "d-none",
  Qx: "d-none",
  r5: "af-contact-list-unlocked",
  blockRefresh: !0,
  em: -1,
  Lka: 3,
  ypa: 1,
  UB: "uin",
  TB: "cid",
  rwa: {
    groups: !0,
    stars: !0
  },
  showSynced: !1,
  dfa: {
    "no-avatars": !0,
    "avatars-left": !0,
    "avatars-right": !0
  },
  fj: "groups",
  gx: "avatars-left",
  Rd: m,
  mixins: {
    ea: C.core.mixins.kb,
    ssa: C.core.mixins.sG
  },
  ea: m,
  Hj: m,
  wz: m,
  view: "groups",
  we: "avatars-left",
  ka: {
    ".sr-star": function (c, h, f) {
      this.Cr(h, f);
    },
    ".sr-contact": function (c, p, o, n, f) {
      this.Lga(c, p, o, n, f);
    }
  },
  constructor: function (c) {
    c = c || {};
    this.view = c.view || "stars";
    this.we = c.we || "avatars-right";
    this.showSynced = typeof c.showSynced === "undefined" ? c.showSynced : this.showSynced;
    this.Xo = c.Xo == "0" || c.Xo == 0 ? "descript-hide" : "descript-show";
    this.ea = [[C.core.ea.oj, {}], [C.core.ea.Yc, {
      uc: C.k().sd
    }]];
    this.tpls = c.tpls || {
      groups: C.k().da.ma("contactsListGroups"),
      stars: C.k().da.ma("contactsListStars")
    };
    this.tpl = this.tpls[this.fj];
    this.ta = C.k().ta;
    this.cls = this.cls + " " + this.Xo;
    this.callParent(arguments);
    this.mixins.ea.constructor.call(this, c);
    this.HK();
    this.Wd = {
      val: m,
      by: m
    };
    this.getSelectionModel().deselectOnContainerClick = !1;
  },
  initComponent: function () {
    try {
      this.showSynced || this.x4(), this.xf(this.we), this.ee(this.view, !0), this.callParent(arguments), this.store.on("load", this.P1, this), this.store.on("aliasesupdated", this.L1, this), this.on("afterrender", this.na, this), this.on("beforerefresh", this.U_, this), this.on("refresh", this.Kg, this), this.on("itemclick", this.ed, this), this.on("itemdblclick", this.Zha, this), this.on("containerclick", this.Dj, this), this.on("itemtypeselectiondenied", this.bia, this), this.Rd.on("add", this.G_, this), this.Rd.on("remove", this.o1, this), this.store.on("contactslistchanged", this.Aha, this), this.store.on("silentupdate", this.Xr, this), this.store.on("fieldupdate", this.u0, this), this.rsa = new Ext.util.DelayedTask(m, this, m), this.zb = {}, this.Sg = "", this.Pka = 0, this.isFiltered = !1, this.em = -1, this.mixins.ea.constructor.call(this);
    } catch (c) {}
  },
  destroy: function () {
    this.store.un("fieldupdate", this.u0, this);
    this.store.un("silentupdate", this.Xr, this);
    this.Rd.un("add", this.G_, this);
    this.Rd.un("remove", this.o1, this);
    this.store.un("aliasesupdated", this.L1, this);
    this.store.un("load", this.P1, this);
    this.store.un("datachanged", this.M1, this);
    this.store.un("update", this.S1, this);
    this.store.un("recordupdateview", this.nia, this);
    this.jva();
    this.un("afterrender", this.na, this);
    this.un("itemclick", this.ed, this);
    this.un("containerclick", this.Dj, this);
    this.un("beforerefresh", this.U_, this);
    this.un("refresh", this.Kg, this);
    this.callParent(arguments);
  },
  HK: function () {
    if (!this.store.getCount()) {
      var c = '<div class="clear"></div><div id="sr-contact-list-group-edit" class="d-none"><div id="sr-contact-list-group-opts" class="sr-contact-list-group-opts"><ul id="sr-contact-list-group-opts-list" class="menu"><li><a href="#" id="sr-contact-list-group-edit-link">' + E.lang.Wu + '</a></li><li><a href="#" id="sr-contact-list-group-delete-link">' + E.lang.RB + '</a></li></ul><i class="menu-arrow popup-arrow-down"></i></div></div><div id="sr-contact-list-container">',
          f = this.store.proxy.reader.Ah;
      this.da = C.k().da;
      Ext.Object.each(f, function (g, b) {
        b.gid !== 1 && (c += this.da.Wa("contactsGroup", {
          group: b.name
        }));
      }, this);
      this.deferEmptyText = !1;
      this.fj == "groups" ? this.R7(c + "</div>") : this.R7("");
    }
  },
  R7: function (c) {
    var f = new Ext.Template(c);
    this.el ? (this.emptyText = "", this.deferEmptyText = !0, f.overwrite(this.el), this.dM()) : this.emptyText = c;
  },
  u0: function (c, n) {
    if (c.Rg() && n == "protoInfo") {
      var l = this.getNode(Ext.Array.indexOf(Ext.StoreManager.get("ContactsStore").data.items, c));

      if (l) {
        var f = C.k().da.ma("contact");
        l.innerHTML = f.apply(c.data);
      }
    }
  },
  Xr: function (c, h) {
    if (this.fj == "groups" && h.length === 1 && c.Ba(h[0].uin)) {
      var f = c.Ba(h[0].uin).get("extdata").gids;
      f && this.Wh(c, f, h[0]);
    }
  },
  Aha: function () {
    this.refresh();
    this.HK();
    this.dM();
  },
  Eza: function (c, f) {
    return f.length ? !0 : !1;
  },
  Dza: function (c, f) {
    return f.length ? !0 : !1;
  },
  Hza: function (c, f) {
    Ext.Array.each(f, function (b) {
      c.add(b);
    }, this);
  },
  nia: function (c, p) {
    var o = m,
        n = [],
        f = C.k().da.ma("contact");
    p.length && Ext.Array.each(p, function (b) {
      n = this.store.wh(b.uin || b.ConferenceID);
      Ext.Array.each(n, function (g) {
        o = this.getNode(Ext.Array.indexOf(c.data.items, g));

        if (typeof o !== "undefined") {
          o.innerHTML = f.apply(g.data);
        }
      }, this);
    }, this);
  },
  Iza: function (c, h) {
    var f = m;
    Ext.Array.each(h, function (e) {
      for (f = this.store.findRecord("cid", e); f;) {
        this.store.remove(f), f = this.store.findRecord("cid", e);
      }
    }, this);
  },
  Wh: function (c, z) {
    for (var u = {}, o = 0, f = z.length; o < f; o += 1) {
      var B = c.ih[z[o]];
      u[z[o]] = [0, 0];

      for (var y = 0, w = B.length; y < w; y += 1) {
        u[z[o]][1] += 1, c.Ba(B[y]).Aoa() && (u[z[o]][0] += 1);
      }
    }

    Ext.Object.each(u, function (g, h) {
      if (this.wz[g]) {
        this.wz[g].innerHTML = h.join("/");
      }
    }, this);
  },
  ed: function (c, q, p, o, f) {
    for (var u in this.ka) {
      if (m !== f.getTarget(u)) {
        this.ka[u].call(this, c, q, p, o, f);
        break;
      }
    }
  },
  Lga: function (c, q, p, o, f) {
    if (this.disableSelection && f.getTarget("a.sr-anchor") !== m) {
      return f.stopEvent(), C.k().sg(f.getTarget("a.sr-anchor").href, this), !0;
    } else {
      f.preventDefault();
    }

    if (this.multiSelect) {
      if (this.Rd.findExact("cid", q.get("cid")) === -1) {
        var c = Ext.Object.getKeys(q.types),
            c = Ext.Array.intersect(this.fJ, c),
            u = m;
        Ext.each(c, function (e) {
          if (q.get("type") === q.types[e]) {
            return u = e, !1;
          }
        }, this);
        u ? this.fireEvent("itemtypeselectiondenied", q, u) : q.get("type") === 1 && q.get("protoInfo").friend === 0 && this.em === -1 ? this.fireEvent("itemtypeselectiondenied", q, "nomutualcontact") : this.Rd.add(q);
      } else {
        this.Rd.removeAt(this.Rd.find("cid", q.get("cid")));
      }
    } else {
      if (!this.Hj) {
        this.Hj = this.Hj || new Ext.util.DelayedTask(this.Pia, this), this.Hj.delay(250, m, m, [q, p]);
      }
    }
  },
  Zha: function (c, h, f) {
    this.multiSelect || this.Qia(h, f);
  },
  E9: function () {
    if (Ext.getDom("sr-contact-list-group-edit")) {
      this.Ms = this.Ms || Ext.get(Ext.getDom("sr-contact-list-group-edit"));

      if (!this.Ms) {
        this.Ms = Ext.get(Ext.getDom("sr-contact-list-group-edit"));
      }

      this.Ms.hasCls("d-none") || this.Ms.addCls("d-none");
    }
  },
  Dj: function (c, p) {
    var o = p.getTarget(this.pK),
        n,
        f;

    if (p.getTarget(".sr-contacts-group-edit")) {
      if (f = Ext.getBody().hasCls("a421c") ? p.getY() + Ext.getDom("sr-contact-list-group-edit").parentNode.scrollTop - 97 : p.getY() + Ext.getDom("sr-contact-list-group-edit").parentNode.scrollTop - 160, n = Ext.get("sr-contact-list-group-edit"), this.em = o = this.store.proxy.reader.Ah[Ext.get(o).child(".sr-contacts-group-title").dom.viewIndex].gid, f < 0 ? n.select(".sr-contact-list-group-arr").removeCls("popup-arr-down").addCls("popup-arr-up") : n.select(".sr-contact-list-group-arr").removeCls("popup-arr-up").addCls("popup-arr-down"), n.setStyle("top", f - 13 + "px"), this.l4 = Ext.get(Ext.getDom("sr-contact-list-group-delete-link")), o == 1 || o == 2 || o == 3 || o == 4 || o == 5 ? (this.l4.replaceCls("sr-link", "sr-link-disabled"), this.m4 = !0) : (this.l4.replaceCls("sr-link-disabled", "sr-link"), this.m4 = !1), this.n4 == p.getTarget(m, m, !0) && !n.hasCls("d-none")) {
        n.addCls("d-none");
      } else {
        if (o === this.em) {
          n.removeCls("d-none"), this.n4 = p.getTarget(m, m, !0), this.fireEvent("show", {
            event: p,
            target: p.target
          });
        }
      }
    } else {
      if (p.getTarget("#sr-contact-list-group-edit-link")) {
        p.preventDefault(), C.k().B6(this.em);
      } else {
        if (p.getTarget("#sr-contact-list-group-delete-link")) {
          if (p.preventDefault(), !this.m4) {
            this.win = Ext.create(E.f.windows.EC, {
              gid: this.em,
              buttons: []
            });
          }
        } else {
          m !== o && (n = Ext.get(o).child(".sr-contacts-group-title"), o = Ext.get(o.children[1]), n.toggleCls(this.k4), o.toggleCls(this.j4), o.parent(this.pK).toggleCls(this.k4), o.hasCls(this.j4) || this.jk());
        }
      }
    }
  },
  na: function () {
    this.store.on("datachanged", this.M1, this);
    this.store.on("update", this.S1, this);
    this.LZ();
    this.ea.push([C.core.ea.sf, {
      fe: [this.getEl()],
      um: function () {
        var c = Ext.get("sr-contact-list-group-edit");

        if (c) {
          return c = c.hasCls("d-none") ? !1 : !0;
        }

        return !1;
      },
      Ge: function () {
        var c = Ext.get("sr-contact-list-group-edit");
        c && c.addCls("d-none");
      },
      ug: [0]
    }]);
    this.mixins.ea.constructor.call(this);
    this.mixins.ssa.constructor.call(this, {
      selector: "#sr-contact-list-container",
      refresh: !0
    });
  },
  U_: function () {
    this.sta(this.vk);
  },
  Kg: function () {
    this.Zua();
    this.ara();
  },
  LZ: function () {
    var c = this.el.child("#sr-contact-list-container");

    if (c && (c.on("scroll", this.jk, this), c.on("resize", this.jk, this), this.fj == "groups")) {
      c.on("scroll", this.E9, this);
    }
  },
  jva: function () {
    var c = this.el.child("#sr-contact-list-container");
    c && (c.un("scroll", this.jk, this), c.un("resize", this.jk, this), this.fj == "groups" && c.un("scroll", this.E9, this));
  },
  P1: function (c) {
    c.sort();
    this.blockRefresh = !0;
  },
  G_: function (c, p) {
    if (this.multiSelect) {
      for (var o = 0, n = p.length, f = p[o]; o < n; o++, f = p[o]) {
        this.wsa(f);
      }
    }
  },
  o1: function (c, p) {
    Ext.isArray(p) || (p = [p]);

    if (this.multiSelect) {
      for (var o = 0, n = p.length, f = p[o]; o < n; o++, f = p[o]) {
        this.Lja(f);
      }
    }
  },
  wsa: function (c) {
    c.get("visible") && this.store.Va[c.get("cid")] && this.getSelectionModel().select(this.store.Va[c.get("cid")], !0, !0);
  },
  Lja: function (c) {
    this.store.Va[c.get("cid")] && this.getSelectionModel().deselect(this.store.Va[c.get("cid")], !0);
  },
  M1: function (c, h) {
    if (m !== Ext.get("sr-contact-list-container")) {
      if (Ext.Object.getSize(h) > 0 && typeof h !== "undefined") {
        var f = this.blockRefresh;
        this.blockRefresh = !1;
        c.suspendEvents();
        c.sort();
        c.resumeEvents();
        this.refresh();
        this.blockRefresh = f;
      } else {
        this.blockRefresh ? (this.Epa(c.sortInfo), this.sortInfo = c.sortInfo, c.sortInfo = m) : this.hJ();
      }

      this.dM();
    }
  },
  dM: function () {
    var c = Ext.get("sr-contact-list-container");

    if (c) {
      var n = c.select(".sr-contacts-group-title").elements,
          c = c.select(".sr-contacts-group-counter").elements,
          l = this.store.proxy.reader.Ah;
      this.wz = {};

      try {
        Ext.Array.each(c, function (e, g) {
          this.wz[l[g].gid] = e;
          n[g].viewIndex = g;
        }, this);
      } catch (f) {}
    }
  },
  Mc: A(m),
  vd: t(),
  S1: function (c) {
    this.isFiltered || c.sort();
  },
  Epa: function (c) {
    if (c) {
      if (c.ON > 1 && c.NN > 1) {
        this.blockRefresh = !1, this.refresh(), this.blockRefresh = !0;
      } else {
        if (c.ON + c.NN > 0) {
          this.all.elements = this.el.select(this.itemSelector);

          for (var c = c.j2 <= c.h2 ? c.mz : c.lz, p = 0, o = 0, n = c.length; o < n; o++) {
            try {
              p = c[o] || 0, p != 0 && (p < 0 ? this.Dpa(o, p) : p > 0 && this.Cpa(o, p));
            } catch (f) {}
          }
        }
      }

      this.all = this.el.select(this.itemSelector);
      this.updateIndexes();
      this.jk();
    }
  },
  Dpa: function (c, n) {
    var l = this.all.elements.elements[c],
        f = this.all.elements.elements[c + n];
    ("stars" !== this.view || l) && f && l && f.parentNode.insertBefore(l.parentNode.removeChild(l), f);
  },
  Cpa: function (c, n) {
    var l = this.all.elements.elements[c],
        f = this.all.elements.elements[c + n];
    "stars" === this.view && (!l || !f) || (f.nextSibling ? f.nextSibling.parentNode.insertBefore(l.parentNode.removeChild(l), f.nextSibling) : f.parentNode.appendChild(l.parentNode.removeChild(l)));
  },
  refresh: function () {
    this.callParent(arguments);
    this.Rd.getCount() && this.Rd.each(function (c) {
      this.lx(c.get("uin"), c.get("cid"));
    }, this);
    this.LZ();
    this.jk();
  },
  doAdd: function (c, h, f) {
    h = this.all.elements;
    f !== 0 && this.all.item(f - 1) ? (this.all.item(f - 1).insertSibling(c, "after", !0), h.splice.apply(h, [f - 1, 0].concat(c))) : (this.all.first().insertSibling(c, "before", !0), h.push.apply(h, c));
  },
  onUpdate: function (c, h) {
    if (this.blockRefresh && typeof h !== "undefined" && (typeof h.modified.ShowName !== "undefined" || typeof h.modified.status !== "undefined")) {
      try {
        this.all = this.el.select(this.itemSelector), this.all.elements[this.store.indexOf(h)].innerHTML = this.tpl.Rx.apply(h.data);
      } catch (f) {}
    }
  },
  jk: function () {
    this.rsa.delay(200, function () {
      var D = 0,
          B = this.el.getScroll().top,
          z = B + this.el.getViewSize().height,
          y = this.getEl().child("#sr-contact-list-container"),
          w = [],
          o = 0;

      if (Ext.get("sr-main").hasCls("sr-template-1") && m !== y) {
        if (y.hasCls(this.oK)) {
          return !0;
        }

        if (Ext.get(y.dom.children[0]) && Ext.get(y.dom.children[0]).hasCls("sr-contact")) {
          var f = {},
              c = {};
          o || Ext.each(this.all.elements, function (e) {
            var g = Ext.get(e),
                e = this.getRecord(e),
                p,
                l,
                n,
                h;
            n = g.getHeight();

            if (!B && g.getOffsetsTo(y)[1] < B - n) {
              return !0;
            }

            if (g.getOffsetsTo(y)[1] > z + n) {
              return o = 1, !1;
            }

            (p = g.child(".sr-user-avatar")) && (p = p.dom);
            (l = g.child(".sr-status")) && (l = l.dom);
            (h = g.select(".sr-comment").first()) && (h = h.dom);
            f = {
              uin: e.get("uin"),
              zb: []
            };
            c.avatar = p || m;
            c.status = l || m;
            c.Xx = h || m;
            c.size = 50;
            f.zb.push(c);
            w.push(f);
            f = {};
            c = {};
          }, this);
        } else {
          var G = y.query(".sr-contacts-group:not(.collapsed)");
          Ext.each(G, function (g) {
            g = Ext.get(g);
            D += g.first().getHeight() || 20;
            var e = {},
                b = {};
            Ext.each(y.dom.children, function (h) {
              Ext.each(h.children[1].children, function (l) {
                var u = this.getRecord(l),
                    l = Ext.get(l),
                    n,
                    q,
                    I;

                if (l.hasCls(this.Qx) || l.parent(".sr-contacts-group-list").hasCls(this.Qx)) {
                  return !0;
                }

                n = l.getHeight();

                if (!B && l.getOffsetsTo(y)[1] < B - n) {
                  return !0;
                }

                if (l.getOffsetsTo(y)[1] > z + n) {
                  return o = 1, !1;
                }

                n = l.child(".sr-user-avatar").dom;
                q = l.child(".sr-status").dom;
                e = {
                  uin: u.get("uin"),
                  zb: []
                };

                if (u.get("type") !== E.models.Ya.prototype.types.dummycontact) {
                  I = l.select(".sr-comment").first().dom;
                }

                b.avatar = n || m;
                b.status = q || m;
                b.Xx = I || m;
                b.size = 50;
                e.zb.push(b);
                w.push(e);
                e = {};
                b = {};
              }, this);

              if (o) {
                return !1;
              }
            }, this);

            if (o) {
              return !1;
            }
          }, this);
        }

        this.fireEvent("addedavatars", {
          object: w
        });
      }
    });
  },
  z3: function (c) {
    var f = c.Ff() ? c.Ff() : "";
    return [c.get("ShowName"), c.get("uin"), f].join("|").toLowerCase();
  },
  c2: function (c, f) {
    f = f || "";
    f.length < this.ypa && (f = "");

    if (!this.el) {
      return !0;
    }

    f = f.toLowerCase();

    if (f == this.Sg) {
      return !0;
    }

    this.Cua(c, f);
    return !0;
  },
  Cua: function (c, w) {
    try {
      this.Pka = 0;

      if (this.Mka == m) {
        this.Mka = c;
      }

      var q = this.el.select(this.pK).elements,
          o = this.all.elements;

      if (this.Sg = w) {
        this.isFiltered = !0;
        this.fireEvent("showpreloader");
        Ext.each(q, function (e) {
          e.Bc = !1;
        }, this);
        var f = C.ca.xa.Dka(this.Sg.toLowerCase()),
            y = C.ca.xa.f2(f);
        Ext.each(o, function (e) {
          e.usa.search(y) > -1 ? this.hN(e) : this.rK(e);
        }, this);
        Ext.each(q, function (e) {
          e.Bc == !1 ? this.sK(e) : this.jN(e);
        }, this);
        this.fireEvent("hidepreloader", this);
        this.jk();
      } else {
        this.blockRefresh = !1, this.refresh(), this.blockRefresh = !0, this.isFiltered = !1;
      }
    } catch (u) {}

    return !0;
  },
  updateIndexes: function (c, p) {
    for (var o = this.all.elements, n = this.store.getRange(), p = p || (p === 0 ? 0 : o.length - 1), f = c || 0; f <= p; f++) {
      o[f].viewIndex = f;
      o[f].viewRecordId = n[f].internalId;

      if (!o[f].boundView) {
        o[f].boundView = this.id;
      }

      o[f].usa = this.z3(n[f]);
    }
  },
  b8: function (c) {
    this.store.Ty = typeof c != "undefined" ? c : !0;
  },
  Lza: function () {
    if (!this.el) {
      return !1;
    }

    this.hJ();
    this.Cva();
    this.el.addCls(this.r5);
    this.Rd.removeAll();
    this.b8(!1);
    return !0;
  },
  Kza: function () {
    if (!this.el) {
      return !1;
    }

    this.el.removeCls(this.r5);
    this.hJ();
    this.$oa();
    this.b8(!0);
    return !0;
  },
  lx: function (c, n) {
    var l = [];

    if (c !== "0") {
      if (l = this.store.wh(c) || [], l.length) {
        this.Wd.val = c, this.Wd.type = this.UB;
      }
    } else {
      if (l = this.store.Va[n] || [], l.length) {
        this.Wd.val = n, this.Wd.type = this.TB;
      }
    }

    var f = m;
    Ext.each(l, function (e) {
      f = this.getNode(e);
      f !== m && Ext.get(f).addCls("x-item-selected");
    }, this);
  },
  eva: function (c, n) {
    var l = [],
        l = c !== "0" ? this.store.wh(c) || [] : this.store.Va[n] || [],
        f = m;
    Ext.each(l, function (e) {
      f = this.getNode(e);
      f !== m && Ext.get(this.getNode(e)).removeCls("x-item-selected");
    }, this);
    this.Wd.val = m;
    this.Wd.type = m;
  },
  ara: function () {
    var c = m,
        f = [];
    this.UB === this.Wd.type ? f = this.store.wh(this.Wd.val) || [] : this.TB === this.Wd.type && (f = this.store.Va[this.Wd.val] || []);
    Ext.each(f, function (b) {
      c = this.getNode(b);
      c !== m && Ext.get(c).addCls("x-item-selected");
    }, this);
  },
  W8: function () {
    var c = m,
        f = [];
    this.UB === this.Wd.type ? f = this.store.wh(this.Wd.val) || [] : this.TB === this.Wd.type && (f = this.store.Va[this.Wd.val] || []);
    Ext.each(f, function (b) {
      c = this.getNode(b);
      c !== m && Ext.get(c).removeCls("x-item-selected");
    }, this);
    this.Wd.val = m;
    this.Wd.type = m;
  },
  MCa: function (c) {
    var f = c.get ? c.get("uin") : c,
        c = c.get ? c.get("cid") : c;
    this.W8();
    this.lx(f, c);
  },
  hJ: function () {
    this.Pt = !0;
    this.getSelectionModel().deselectAll(!0);
    this.Pt = !1;
  },
  hN: function (c) {
    Ext.get(c).removeCls(this.Qx);
    c.parentNode.parentNode.Bc = !0;
    c.Bc = !0;
  },
  rK: function (c) {
    Ext.get(c).addCls(this.Qx);
    c.Bc = !1;
  },
  jN: function (c) {
    Ext.get(c).removeCls(this.oK);
    c.Bc = !0;
  },
  sK: function (c) {
    Ext.get(c).addCls(this.oK);
    c.Bc = !1;
  },
  zZ: function (c, f) {
    if (c && this.cls.indexOf(c) === -1) {
      if (this.cls === (this.cls = this.cls.replace(this.fj, c))) {
        this.cls += " " + c;
      }

      this.fj = c;
    }

    if (f && this.cls.indexOf(f) === -1) {
      if (this.cls === (this.cls = this.cls.replace(this.gx, f))) {
        this.cls += " " + f;
      }

      this.gx = f;
    }

    return !0;
  },
  AZ: function (c, f) {
    if (c) {
      this.el.removeCls(this.fj), this.el.addCls(c), this.fj = c;
    }

    if (f) {
      this.el.removeCls(this.gx), this.el.addCls(f), this.gx = f;
    }
  },
  xf: function (c) {
    if (this.rwa[c]) {
      this.el ? this.AZ(c) : this.zZ(c), this.view = c, this.tpl = this.tpls[c];
    }

    if (this.dfa[c]) {
      this.el ? this.AZ(m, c) : this.zZ(m, c), this.we = c;
    }

    this.HK();
  },
  ee: function (c, f) {
    "stars" === c ? this.xf(c) : "groups" === c && this.xf(c);
    this.store.ee(c, f);
  },
  Cva: function () {
    this.multiSelect = !0;
    this.disableSelection = !1;
    this.getSelectionModel().setLocked(!1);
  },
  $oa: function () {
    this.getSelectionModel().setLocked(!0);
    this.disableSelection = !0;
    this.multiSelect = !1;
  },
  Pia: function (c) {
    var h = C.k().fa.get("uin").toString(),
        f = c.data.uin;
    this.W8();
    f !== h && this.lx(c.get("uin"), c.get("cid"));
    this.Hj = m;
    this.fireEvent("contactclicked", this, c);
  },
  Qia: function (c, f) {
    this.xva();

    if (this.Hj) {
      this.Hj.cancel(), this.Hj = m;
    }

    Ext.get(f).focus();
    this.fireEvent("contactdblclicked", this, c);
  },
  xva: function () {
    var c = Ext.select(".sr-contact.x-item-selected").elements;
    c[0] && Ext.get(c[0]).removeCls("x-item-selected");
  },
  collectData: function (Q, I) {
    var G = [],
        D = 0,
        B = Q.length,
        o,
        f,
        c,
        T;

    try {
      if (this.view === "groups") {
        var G = {},
            S = this.store.proxy.reader.groups;
        Ext.Object.each(this.store.proxy.reader.Ah, function (g, h) {
          if (h.gid !== 1) {
            T = "key" + S[h.gid].gid, G[T] = {}, G[T].contacts = [], G[T].Gf = h.name, G[T].as = [0, 0], G[T].Yh = {
              visible: 0,
              QK: 0
            }, G[T].UK = this.Sg !== "" ? !0 : !1;
          }
        }, this);
      }

      for (; D < B; D++) {
        if (o = Q[D], o.get("visible")) {
          f = this.prepareData(o[o.xz], I + D, o), f.Bc = this.z3(o).indexOf(this.Sg) > -1 ? !0 : !1, this.view === "stars" ? G.push(f) : this.view === "groups" && (c = "key" + f.gid, typeof G[c] !== "undefined" && (G[c].contacts.push(f), f.protoInfo.status !== "not_avail" && (G[c].as[0] += 1), G[c].as[1] += 1, typeof f.Bc == "undefined" || f.Bc ? G[c].Yh.visible += 1 : G[c].Yh.QK += 1));
        } else {
          break;
        }
      }

      if (this.view === "groups") {
        var L = "key" + this.store.proxy.reader.Es(E.models.Ya.groups.yA);
        G[L] && G[L].contacts.length === 0 && delete G[L];
      }
    } catch (N) {}

    return G;
  },
  Cr: function (c, p) {
    var o = c.get("extdata").gids,
        n = c.get("cid"),
        f = c.get("type") == 4 ? "conference" : "contact";
    Ext.Array.indexOf(o, this.Lka) != -1 ? C.k().i7({
      cid: n,
      type: f
    }, {
      fn: function () {
        this.xra(c, p);
      },
      scope: this
    }, {
      fn: function () {
        this.wra(c, p);
      },
      scope: this
    }) : C.k().kZ({
      cid: n,
      type: f
    }, {
      fn: function () {
        this.Eea(c, p);
      },
      scope: this
    }, {
      fn: function () {
        this.Dea(c, p);
      },
      scope: this
    });
  },
  Eea: function (c) {
    C.k().qa.sa({
      msg: E.oa.qQ,
      Yi: eha(c.get("ShowName")),
      timeout: 2000
    });
  },
  Dea: function (c, f) {
    C.k().qa.sa({
      msg: E.oa.pQ,
      Yi: eha(c.get("ShowName")),
      mc: {
        text: E.lang.Pc,
        fn: function () {
          this.Cr(c, f);
        },
        scope: this
      }
    });
  },
  xra: function (c) {
    C.k().qa.sa({
      msg: E.oa.wQ,
      Yi: eha(c.get("ShowName")),
      timeout: 2000
    });
  },
  wra: function (c, f) {
    C.k().qa.sa({
      msg: E.oa.vQ,
      Yi: eha(c.get("ShowName")),
      mc: {
        text: E.lang.Pc,
        fn: function () {
          this.Cr(c, f);
        },
        scope: this
      }
    });
  },
  onItemSelect: function (c) {
    if (!this.Rd.Doa(c) && ("groups" === this.view || "stars" === this.view && c.get("duplicated") !== !0)) {
      try {
        this.callParent(arguments);
      } catch (f) {}
    }
  },
  onItemDeselect: function (c) {
    if (!this.Rd.YK(c) && c.get("visible") && ("groups" === this.view || "stars" === this.view && c.get("duplicated") !== !0)) {
      try {
        this.callParent(arguments);
      } catch (f) {}
    }
  },
  bia: function (c, h) {
    var f = "";

    switch (h) {
      case "conference":
        f = E.oa.G$;
        break;

      case "contact":
        f = E.oa.M$;
        break;

      case "dummycontact":
        f = E.oa.X$;
        break;

      case "nomutualcontact":
        f = E.oa.N$;
    }

    C.k().qa.sa({
      msg: f,
      timeout: 2000
    });
    this.onItemDeselect(c);
  },
  gEa: v("em"),
  L1: function () {
    this.refresh();
  },
  Xta: function () {
    this.store.clearFilter(!0);
    this.ee(this.view, !0);
    this.refresh();
    this.showSynced = !0;
  },
  x4: function () {
    var c = this.blockRefresh;
    this.blockRefresh = !1;
    this.store.filter([new Ext.util.Filter({
      filterFn: function (e) {
        return !e.Eoa();
      }
    })]);
    this.showSynced = !1;
    this.blockRefresh = c;
  },
  HBa: x("showSynced")
});