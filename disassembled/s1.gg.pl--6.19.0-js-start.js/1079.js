Ext.define(E.f.profile.contact.qC, {
  extend: E.f.profile.wn,
  tpl: "profile-header",
  Tp: !0,
  Kb: m,
  constructor: function () {
    this.callParent(arguments);
    this.ro({
      ".user-ignored-holder": function (c) {
        this.kqa(c);
      },
      ".user-restricted-holder": function (c) {
        this.E6(c);
      }
    });
  },
  hc: function (c, h, f) {
    this.callParent(arguments);
    this.data.ZH = !1;
    this.Bd = f;
    this.Od = h;
    this.ona = c.km(c.oe.rH);

    if (this.Tp) {
      if (!this.Kb) {
        this.Kb = this.createComponent(".user-data-btns", E.f.profile.contact.lj, {});
      }

      this.Kb.Pg(c, h, f);
    }

    this.refresh();
  },
  refresh: function () {
    this.callParent();

    if (Ext.isIE) {
      this.Kb && this.Kb.destroy(), this.Kb = this.createComponent(".user-data-btns", E.f.profile.contact.lj, {});
    }

    this.Kb && this.Kb.Pg(this.record, this.Od, this.Bd);
    this.fireEvent("afterrefresh", this);
  },
  Zg: function () {
    this.refresh();
    this.callParent();
  },
  destroy: function () {
    this.Kb && this.Kb.destroy();
    this.callParent();
  },
  wt: function () {
    var c = this,
        h = [],
        f = !this.ek() && this.record.get("uin") != 0 ? !0 : !1;
    this.Bd ? h = [{
      text: (f ? '<div><span class="sr-menu-popup-no-checkbox">' : "<div><span>") + E.lang.SB + "</span></div>",
      click: {
        fn: function () {
          C.Ca("user-profile/" + c.record.get("cid") + "/edit");
        },
        scope: this
      }
    }] : this.ona && (h = [{
      text: (f ? '<div><span class="sr-menu-popup-no-checkbox">' : "<div><span>") + E.lang.Uu + "</span></div>",
      click: {
        fn: function () {
          C.Ca("user-profile/" + c.record.get("uin") + "/add");
        }
      }
    }]);
    !this.ek() && this.record.get("uin") != 0 && (this.data.Og || h.push({
      text: (f ? '<div><span class="sr-menu-popup-no-checkbox">' : "<div><span>") + E.lang.jQ + "</span></div>",
      click: {
        fn: this.Ts,
        scope: this
      }
    }));
    this.Bd && h.push({
      text: (f ? '<div><span class="sr-menu-popup-no-checkbox">' : "<div><span>") + E.lang.Vu + "</span></div>",
      click: {
        fn: this.$w,
        scope: this
      }
    });
    !this.ek() && this.record.f5() && Ext.StoreManager.get("ContactsStore").Ba(this.record.get("uin")) && h.push({
      text: '<div class="sr-contact-view-more">' + (this.record.$K() ? '<i class="sr-form-checkbox-checked">' : "<i>") + '<i class="sr-form-checkbox"></i></i><span>' + E.lang.hQ + "</span></div>",
      click: {
        fn: this.record.$K() ? this.Aqa : this.Vea,
        scope: this
      }
    });
    return h;
  },
  kqa: function (c) {
    this.zK ? this.zK.destroy() : this.zK = Ext.create(C.f.uu, {
      event: c,
      anchor: c.getTarget(".user-ignored"),
      items: [{
        text: E.lang.mQ,
        click: {
          fn: this.Yt,
          scope: this
        }
      }, {
        text: E.lang.Vu,
        click: {
          fn: this.$w,
          scope: this
        }
      }],
      position: "bc",
      listeners: {
        destroy: function () {
          delete this.zK;
        }.bind(this)
      }
    });
  },
  Ts: function () {
    Ext.create(E.f.windows.iw, {
      Sb: !0,
      user: Ext.getStore("UsersStore").xb(this.record.get("uin"))
    });
  },
  Yt: function () {
    C.k().hq.mn(Ext.getStore("UsersStore").xb(this.record.get("uin")));
  },
  $w: function () {
    var c = this.record.get("uin"),
        p = this.record.get("cid"),
        o = C.k().fa.get("uin"),
        n = Ext.getStore("ContactsStore");
    c == o && n.Ba(o) && (p = n.Ba(o).get("cid"));
    var f = Ext.create(E.f.windows.jq, {
      tpl: C.k().da.Wa("delete-contact-window"),
      buttons: [{
        selector: "div.cancel-no",
        fn: function () {
          f.Xa();
        },
        scope: this,
        Ib: !1
      }, {
        selector: "div.cancel-yes",
        fn: function () {
          f.Xa();

          try {
            this.Lj({
              uin: c,
              cid: p
            });
          } catch (b) {}
        },
        scope: this,
        Ib: !1
      }]
    });
  },
  Lj: function (c) {
    function h(e) {
      f.Lj({
        uin: e.uin,
        cid: e.cid,
        aids: e.aids
      }, {
        Ea: function () {
          C.Ca("");
          C.k().qa.sa({
            msg: E.oa.tQ,
            timeout: 2000
          });
        },
        ya: function () {
          C.k().qa.sa({
            msg: E.oa.sQ
          });
        },
        scope: this
      });
    }

    var c = c || {
      uin: m,
      cid: m,
      aids: m
    },
        f = Ext.getStore("ContactsStore");

    if (c.uin && c.cid) {
      c.aids ? (Ext.isObject(c.aids) && (c.aids = Ext.Object.getValues(c.aids).join(",")), h(c)) : E.api.bb.yd({
        uin: c.uin,
        cid: c.cid
      }, {
        fn: function (e, b) {
          var o = {};
          Ext.Object.each(Ext.JSON.decode(b.responseText).result.contacts[0], function (g, l) {
            Ext.isArray(l) && Ext.Array.each(l, function (p, n) {
              p.aid && (o[g + n] = p.aid);
            });
            l.aid && (o[g] = l.aid);
          }, this);
          c.aids = Ext.Object.getValues(o).join(",");
          h(c);
        },
        scope: this
      }, {
        fn: t(),
        scope: this
      });
    }
  },
  Vea: function () {
    var c = this.record.get("uin");
    this.record.get("cid");
    var n = C.k().fa.get("uin"),
        l = Ext.getStore("ContactsStore");
    c == n && l.Ba(n) && l.Ba(n).get("cid");
    var f = C.k().da.ma("forbid-access-window").apply({
      ShowName: this.record.get("ShowName")
    });
    this.vga({
      fn: function (g) {
        if (g) {
          this.j3();
        } else {
          var h = Ext.create(E.f.windows.jq, {
            tpl: f,
            buttons: [{
              selector: "div.cancel-no",
              fn: function () {
                h.Xa();
              },
              scope: this,
              Ib: !1
            }, {
              selector: "div.cancel-yes",
              fn: function () {
                h.Xa();

                try {
                  this.j3();
                } catch (e) {}
              },
              scope: this,
              Ib: !1
            }]
          });
        }
      },
      scope: this
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.Nca
        });
      },
      scope: this
    });
  },
  vga: function (c, f) {
    E.api.Pb.Tj({
      uin: this.uin
    }, {
      fn: function (g) {
        var g = E.api.Pb.N6(g.result[E.api.Pb.lh].settings),
            b = !1;
        "undefined" !== typeof g[E.api.Pb.Mu] && E.api.Pb.ZG === g[E.api.Pb.Mu][E.api.Pb.Nu] && (b = !0);
        c.fn.call(c.scope, b);
      },
      scope: this
    }, {
      fn: function (e) {
        f.fn.call(f.scope, e);
      },
      scope: this
    });
  },
  j3: function () {
    C.k().hq.restrict(Ext.getStore("UsersStore").xb(this.record.get("uin")));
  },
  Aqa: function () {
    C.k().hq.Zt(Ext.getStore("UsersStore").xb(this.record.get("uin")));
  },
  NJ: function () {
    return {
      cid: this.record.get("cid")
    };
  }
});