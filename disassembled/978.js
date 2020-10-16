Ext.define(E.f.layout.va.hb.uC, {
  extend: "Ext.view.View",
  jc: 0,
  dm: m,
  tpl: m,
  itemSelector: "li.list-item",
  multiSelect: !0,
  simpleSelect: !0,
  gh: [],
  mg: [],
  initComponent: function () {
    this.callParent(arguments);
    this.tpl = this.ma();
    this.dm = {};
    this.$j = {};
    this.Rs = {};
    this.store.each(function (c) {
      this.$j[c.get("gid")] || (this.$j[c.get("gid")] = 0);
      this.$j[c.get("gid")] += 1;
    }, this);
    this.getSelectionModel().deselectOnContainerClick = !1;
    this.on("containerclick", this.Dj, this);
    this.on("itemclick", this.mb, this);
    this.on("beforeselect", this.Il, this);
    this.on("selectionchange", this.hg, this);
  },
  ma: function () {
    return Ext.create("Ext.XTemplate", '<ul class="contacts-picker">', "{[this.getUsers(values)]}", "</ul>", {
      getUsers: function (c) {
        for (var q = {}, p = 0, o = c.length; p < o; p++) {
          var f = c[p];
          q[f.gid] ? q[f.gid].push(f) : q[f.gid] = [f];
        }

        var c = Ext.create("Ext.XTemplate", '<li class="group group-{gid}">', '<tpl if="gid &gt; 0">', '<div class="group-name sr-contacts-group-title" rel="{gid}">', '<span class="group-title-arrow"><span class="sr-contacts-group-title-arrow"></span></span>', "{[this.chbox()]}", "{[eht(values.name)]}", "</div>", "</tpl>", '<ul class="group-body">', '<tpl for="contacts">', '<li class="list-item cid-{cid}{[this.friend(values, " friend", " disabled")]}">', "{[this.chbox()]}", '<div class="sr-status status-{protoInfo.status} {[this.customStatus(values)]}"></div>', '<div class="contact-name">', "<tpl if=\"gid == 0 && name == ''\">" + E.lang.Se + "</tpl>", "<tpl if=\"gid != 0 || name != ''\">{[eht(values.ShowName)]}</tpl>", '{[this.friend(values, "<span class=not-friend-info>' + E.lang.OB + '</span>", "", true)]}', "</div>", "</li>", "</tpl>", "</ul>", "</li>", {
          friend: function (l, y, w, n) {
            l = l.protoInfo.friend || l.type == 4 || l.protoInfo.bot;
            return n ? !l ? y : w : l ? y : w;
          },
          chbox: A('<i class="chbox"><i class="sr-form-checkbox"></i></i>'),
          customStatus: function (e) {
            return C.k().Wi(e.protoInfo.status);
          }
        }),
            p = '<li class="d-none no-results"></li>',
            u;

        for (u in q) {
          u != 1 && q[u].length > 0 && (p += c.apply({
            gid: u,
            contacts: q[u],
            name: q[u][0].Gf
          }));
        }

        return p;
      }
    });
  },
  Dj: function (c, q) {
    if (!(this.jc > 0)) {
      var p = q.getTarget(".group-title-arrow");

      if (p) {
        p = Ext.fly(p), Ext.fly(p.findParent(".sr-contacts-group-title")).toggleCls("collapsed"), Ext.fly(p.findParent(".group")).toggleCls("collapsed");
      } else {
        if (p = q.getTarget(".group-name")) {
          var o = p.getAttribute("rel"),
              f = [],
              u = [];
          this.store.each(function (e) {
            e.get("gid") == o && (this.getSelectionModel().isSelected(e) ? this.UH(e) && (u.push(e), u = Ext.Array.union(u, this.gy(e))) : this.VH(e) && (f.push(e), f = Ext.Array.union(f, this.gy(e))));
          }, this);
          u.length ? this.getSelectionModel().deselect(u) : f.length && this.getSelectionModel().select(f, !0);
        }
      }
    }
  },
  Il: function (c, n) {
    if (this.jc > 0) {
      n instanceof Ext.data.Model && (n = [n]);
      var l = this.lK(),
          f = !1;
      Ext.each(n, function (b) {
        l.indexOf(b.get("cid")) == -1 && l.push(b.get("cid"));
        l.length > this.jc && (c.deselect(b), f = !0);
      }, this);

      if (f) {
        return !1;
      }
    }
  },
  mb: function (c, f) {
    c.getSelectionModel().isSelected(f) ? c.getSelectionModel().select(this.gy(f), !0) : c.getSelectionModel().deselect(this.gy(f));
  },
  VH: function () {
    var c = !0;

    if (this.gh) {
      for (var h = 0, f = this.gh.length; h < f; h++) {
        this.gh[h].apply(this, arguments) || (c = !1);
      }
    }

    return c;
  },
  UH: function () {
    var c = !0;

    if (this.mg) {
      for (var h = 0, f = this.mg.length; h < f; h++) {
        this.mg[h].apply(this, arguments) || (c = !1);
      }
    }

    return c;
  },
  hg: function (c, h) {
    var f = {};
    Ext.each(h, function (e) {
      e = e.get("gid");
      f[e] || (f[e] = 0);
      f[e] += 1;
      typeof this.$j[e] !== "undefined" && (f[e] == this.$j[e] ? this.ipa(e) : f[e] > 0 && f[e] < this.$j[e] ? this.jpa(e) : this.A5(e));
    }, this);
    Ext.iterate(this.$j, function (e) {
      typeof f[e] == "undefined" && this.A5(e);
    }, this);
  },
  lK: function () {
    var c = [];
    Ext.each(this.getSelectionModel().getSelection(), function (b) {
      c.indexOf(b.get("cid")) == -1 && c.push(b.get("cid"));
    });
    return c;
  },
  ipa: function (c) {
    (c = this.el.select(".group-" + c + " .group-name")) && c.each(function (e) {
      e.replaceCls("partchecked", "checked");
    }, this);
  },
  jpa: function (c) {
    (c = this.el.select(".group-" + c + " .group-name")) && c.each(function (e) {
      e.replaceCls("checked", "partchecked");
    }, this);
  },
  A5: function (c) {
    (c = this.el.select(".group-" + c + " .group-name")) && c.each(function (e) {
      e.removeCls(["checked", "partchecked"]);
    }, this);
  },
  gy: function (c) {
    var h = [],
        f = c.get("cid");
    this.dm[f] && this.dm[f].length > 1 && Ext.each(this.dm[f], function (b) {
      b !== c && h.push(b);
    });
    return h;
  },
  nta: function (c, n) {
    var l = this.getNode(c),
        f = c.get("gid");
    this.Rs[f] || (this.Rs[f] = 0);
    l && (l = Ext.fly(l), n ? l.hasCls("d-none") && (l.removeCls("d-none"), this.Rs[f]--) : l.hasCls("d-none") || (l.addCls("d-none"), this.Rs[f]++), this.Rs[f] == this.$j[f] ? this.getEl().select("li.group-" + f).addCls("d-none") : this.getEl().select("li.group-" + f).removeCls("d-none"));
  },
  collectData: function (c, w) {
    for (var q = [], o = 0, f = c.length, y, u; o < f; o++) {
      y = c[o], u = this.prepareData(y[y.xz], w + o, y), q[q.length] = u, u = y.get("cid"), this.dm[u] ? this.dm[u].push(y) : this.dm[u] = [y];
    }

    return q;
  },
  prepareData: function (c, n, l) {
    n = Ext.getStore("ContactsStore").getGroups();

    if (l) {
      Ext.apply(c, l.getAssociatedData());

      for (var f in n) {
        if (l = n[f], l.gid == c.gid) {
          c.Gf = l.name;
          break;
        }
      }
    }

    return c;
  },
  destroy: function () {
    this.un("containerclick", this.Dj, this);
    this.un("itemclick", this.mb, this);
    this.un("beforeselect", this.Il, this);
    this.un("selectionchange", this.hg, this);
    this.callParent();
  },
  onUpdate: function (c, f) {
    ("" + f.get("uin").indexOf(this.ownerCt.Sg) === 0 || "" + f.get("ShowName").toLowerCase().indexOf(this.ownerCt.Sg.toLowerCase()) > -1) && this.callParent(arguments);
  },
  onItemClick: function (c) {
    return this.getSelectionModel().isSelected(c) ? this.UH(c) ? (this.callParent(arguments), !0) : !1 : this.VH(c) ? (this.callParent(arguments), !0) : !1;
  },
  onBeforeItemMouseEnter: function (c, n) {
    var l = this.getSelectionModel().isSelected(c),
        f = Ext.fly(n).select(".contact-name").first();
    f && (l ? !this.UH(c) && !f.select(".can-not-deselect").first() && f.insertHtml("beforeEnd", '<span class="can-not-deselect">...nie mo\u017cesz odznaczy\u0107 kontaktu</span>') : !this.VH(c) && !f.select(".can-not-select").first() && f.insertHtml("beforeEnd", '<span class="can-not-select">...nie mo\u017cesz zaznaczy\u0107 kontaktu</span>'));
  }
});