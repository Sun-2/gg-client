Ext.define(E.f.profile.contact.RQ, {
  extend: E.f.profile.wn,
  tpl: "profile-header",
  Tp: !0,
  Kb: m,
  hc: function (c, n, l) {
    this.callParent(arguments);

    if (c.Js(1)) {
      this.data.Og = !0;
    }

    this.data.ZH = !1;
    this.Bd = l;
    this.Od = n;
    var f = this.record.Ff() ? this.record.Ff() : m;

    if (this.Tp && (f || c.Rg())) {
      if (!this.Kb) {
        this.Kb = this.createComponent(".user-data-btns", E.f.profile.contact.kv, {});
      }

      this.Kb.Pg(c, n, l);
    }

    this.refresh();
  },
  $t: function (c, n, l, f) {
    c.Rg() && f === "protoInfo" && this.hc(c, n, l, f);
  },
  refresh: function () {
    this.callParent();

    if (Ext.isIE) {
      this.Kb && this.Kb.destroy(), this.Kb = this.createComponent(".user-data-btns", E.f.profile.contact.kv, {});
    }

    this.Kb && (this.Kb.Pg(this.record, this.Od, this.Bd), this.record.get("extdata") && this.record.get("extdata"));
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
    var c = this;
    return [{
      text: "<div>" + E.lang.SB + "</div>",
      click: {
        fn: function () {
          C.Ca("user-profile/" + c.record.get("cid") + "/edit");
        },
        scope: this
      }
    }, {
      text: "<div>" + E.lang.Vu + "</div>",
      click: {
        fn: this.$w,
        scope: this
      }
    }];
  },
  $w: function () {
    var c = this.record.get("uin"),
        h = this.record.get("cid"),
        f = Ext.create(E.f.windows.jq, {
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
              cid: h
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
  NJ: function () {
    return {
      cid: this.record.get("cid")
    };
  }
});