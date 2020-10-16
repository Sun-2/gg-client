Ext.define(E.f.layout.va.GG, {
  extend: C.f.mq,
  name: "share-links-resultlist",
  cls: "share-links-resultlist sr-scrollbars",
  itemSelector: "li.share-links-resultlist-item",
  autoEl: {
    tag: "ul"
  },
  Pt: !0,
  overItemCls: "active",
  ea: m,
  store: m,
  QCa: 20,
  la: m,
  pc: m,
  am: m,
  md: m,
  jDa: m,
  lAa: 2,
  Ey: !1,
  mixins: {
    ea: C.core.mixins.kb
  },
  Jm: m,
  rqa: m,
  disableSelection: !0,
  xja: 1000,
  vja: 500,
  yja: 200,
  wja: 200,
  constructor: function (c) {
    this.store = c.store;
    this.bu = this.bu || [];
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd
    }], [C.core.ea.oj, {}]];
    this.callParent(arguments);
    this.addEvents("itemlinkclick", "dataloaded");
    this.Jm = c.Jm;
  },
  initComponent: function () {
    this.tpl = C.k().da.ma("share-links-resultlist");
    this.emptyText = C.k().da.Wa("share-links-no-results");
    this.la = Ext.getStore("ContactsStore");
    this.store.on("dataloaded", this.Dha, this);
    this.callParent(arguments);
    this.on("itemclick", this.mb, this);
    this.on("afterrender", this.na, this);
    this.mixins.ea.constructor.call(this);
  },
  destroy: function () {
    this.el.un("mouseover", this.X0, this);
    this.el.un("mouseout", this.W0, this);
    this.el.un("mouseenter", this.rh, this);
    this.el.un("mouseleave", this.Gj, this);
    this.store.un("dataloaded", this.Hd, this);
    this.un("itemclick", this.mb, this);
    this.un("afterrender", this.na, this);
    this.callParent(arguments);
  },
  ka: {
    ".share-links-item-content": t()
  },
  bu: m,
  bL: !1,
  $y: !1,
  kk: {
    ".share-links-resultlist-item": function (c, h) {
      var f = Ext.fly(h);

      if (c.type === "mouseover") {
        if (this.store.suspendEvents(!0), this.sua(!0), this.era(), f && (f.dom.N5 && clearTimeout(f.dom.N5), !f.hasCls("hover"))) {
          this.O5 = this.xja;

          if (this.Ey) {
            this.O5 = this.yja;
          }

          f.dom.P5 = Ext.defer(function (b) {
            b.addCls("hover");

            if (c.getTarget(this.itemSelector) && (b = this.store.groups[this.getRecord(c.getTarget(this.itemSelector)).xh()], !this.md)) {
              this.md = Ext.create(E.f.popups.EG, {
                anchor: h,
                Gi: b,
                position: "lt",
                offset: {
                  x: 4,
                  y: -27
                },
                listeners: {
                  destroy: function () {
                    delete this.md;
                  }.bind(this)
                }
              });
            }
          }, this.O5, this, [f]);
        }
      } else {
        if (c.type === "mouseout") {
          this.store.resumeEvents();
          this.Xra();
          this.M5 = this.vja;

          if (this.Ey) {
            this.M5 = this.wja;
          }

          if (f) {
            f.dom.P5 && clearTimeout(f.dom.P5), f.dom.N5 = Ext.defer(function (e) {
              this.md && !this.md.wL && this.md.destroy();
              e.removeCls("hover");
            }, this.M5, this, [f]);
          }
        }
      }
    }
  },
  na: function () {
    this.el.on("mouseover", this.X0, this);
    this.el.on("mouseout", this.W0, this);
    this.el.on("mouseenter", this.rh, this);
    this.el.on("mouseleave", this.Gj, this);
    this.rqa = this.el.parent(".share-links-resultlist-container").first();
  },
  rh: function () {
    this.el.addCls("over");
    Ext.defer(function () {
      this.Ey = !0;
    }, 200, this);
  },
  Gj: function () {
    this.el.removeCls("over");
    Ext.defer(function () {
      this.Ey = !1;
    }, 200, this);
  },
  U0: function (c, f) {
    Ext.iterate(this.kk, function (n, e) {
      var b = c.getTarget(n);
      b && e.call(this, c, b, f);
    }, this);
  },
  X0: function () {
    this.U0.apply(this, arguments);
  },
  W0: function () {
    this.U0.apply(this, arguments);
  },
  mb: function (c, q, p, o, f) {
    for (var u in this.ka) {
      if (m !== f.getTarget(u)) {
        this.ka[u].call(this, f, q);
        break;
      }
    }
  },
  collectData: function (ae, aa) {
    aa = aa || 0;

    try {
      for (var Y = [], T = this.store.bf, S, Q, N, f, ai, ag, ac, ad, c = C.k().fa, o = c.get("uin"), ah = aa; ah < T.length; ah++) {
        S = T[ah];
        Q = this.store.groups[S];
        N = [];
        f = [];
        Q.length > 0 && (ac = Q[0].get("dataSourceType"));
        Ext.each(Q, function (h) {
          ai = h.get("sender").id;
          ag = h.get("owner").id;

          if (ai) {
            var n = this.la.Ba(ai);
            n || o == ai && (n = c);
            var l = "",
                l = ai == o ? E.lang.Se : n ? n.get("ShowName") || n.get("nick") : ai;
            N.push({
              name: l,
              id: ai
            });
          }

          ag && f.push(ag);
          ad = h.get("id");
        }, this);
        var af = {
          link: S,
          senders: N,
          hCa: f,
          dataSourceType: ac,
          id: ad
        };
        Ext.merge(af, this.Gka(Q[0]));
        Q.length && N.length && Y.push(af);
      }

      return {
        links: Y
      };
    } catch (ab) {}
  },
  Dha: function () {
    this.refresh();
  },
  vd: A(m),
  Mc: A(m),
  refresh: function () {
    var c, f;

    if (this.rendered && !this.isDestroyed) {
      this.fireEvent("beforerefresh", this);
      c = this.getTargetEl();
      this.store.kn();
      f = this.store.getRange();
      c.update("");
      f.length < 1 ? (c.update(this.emptyText), this.all.clear()) : (this.tpl.overwrite(c, this.collectData(f, 0), !0), this.all.fill(Ext.query(this.getItemSelector(), c.dom)), this.updateIndexes(0));
      this.selModel.refresh();
      this.hasSkippedEmptyText = !0;
      this.fireEvent("refresh", this);

      if (!this.QA) {
        this.QA = !0, this.fireEvent("viewready", this);
      }

      this.Jm.ez();
    }
  },
  getRecord: function (c) {
    return this.store.groups[this.store.bf[this.indexOf(c)]][0];
  },
  updateIndexes: function (c, n) {
    var l = this.all.elements;
    this.store.getRange();

    for (var n = n || (n === 0 ? 0 : l.length - 1), f = c || 0; f <= n; f++) {
      if (l[f].viewIndex = f, l[f].viewRecordId = this.store.groups[this.store.bf[f]][0].internalId, !l[f].boundView) {
        l[f].boundView = this.id;
      }
    }
  },
  Vsa: function (c, f) {
    if (f) {
      this.am = c;
    }
  },
  era: function () {
    var c = this.getEl();
    this.am && this.am.Je && C.k().cp().name === "default" ? (c.addCls("has-active-item"), c.select(".sender-" + this.am.Aa).addCls("selected"), c.select(":not(.sender-" + this.am.Aa + ")").removeCls("selected")) : (c.removeCls("has-active-item"), this.am ? c.select(".sender-" + this.am.Aa).removeCls("selected") : c.select(".share-links-resultlist-item").removeCls("selected"));
  },
  Gka: function (c) {
    var p = {};

    if (c.data.attachments.length) {
      for (var o = 0, n = c.data.attachments[0].length; o < n; o++) {
        var f = c.data.attachments[0][o];

        if (f.type == E.models.Ma.Event.prototype.xH.NG) {
          p.title = f.title, p.link = f.link, p.content = f.link, p.description = f.body;
        } else {
          if (f.type == E.models.Ma.Event.prototype.xH.iba) {
            p.aj = f.src;
          } else {
            if (f.type == E.models.Ma.Event.prototype.xH.XY) {
              p.aj = f.preview;
            }
          }
        }
      }
    }

    return p;
  },
  onUpdate: function (c, n) {
    var l = this.store.bf.indexOf(n.xh()),
        f;
    this.bL ? this.$y && this.bu.push({
      ika: c,
      record: n
    }) : l > -1 && (f = this.bufferRender([n], l)[0], this.all.replaceElement(l, f, !0), this.updateIndexes(l, l), this.selModel.refresh(), this.fireEvent("itemupdate", n, l, f));
  },
  getNodeByRecord: function (c) {
    var w = this.all.elements,
        q = w.length,
        c = c.xh(),
        o = 0;

    if (this.store.bf.indexOf(c) != -1) {
      for (var f = this.store.groups[c]; o < q; o++) {
        for (var y = 0, u = f.length; y < u; y++) {
          if (c = f[y], w[o].viewRecordId === c.internalId) {
            return w[o];
          }
        }
      }
    }

    return m;
  },
  sua: function (c) {
    this.bL = !0;
    this.$y = typeof c !== "undefined" ? c : !1;
  },
  Xra: function () {
    for (this.bL = !1; this.$y && this.bu.length > 0;) {
      var c = this.bu.shift();
      this.onUpdate(c.ika, c.record);
    }

    this.$y = !1;
  }
});