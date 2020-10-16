Ext.define(E.f.profile.wn, {
  extend: E.f.profile.$h,
  cls: "profile-header",
  bd: m,
  mixins: {
    ea: C.core.mixins.kb
  },
  constructor: function (c) {
    c = c || {};
    this.bd = {};
    this.callParent(arguments);
    this.ro({
      ".user-data-links": function (e) {
        this.E6(e);
      },
      ".profile-close": function () {
        C.Ca("");
      },
      ".sr-star": function () {
        this.EN();
      },
      "a.sr-anchor": function (e, f) {
        e.stopEvent();
        C.k().sg(f.href, this);
      }
    });
    this.ea = [[C.core.ea.Yc, {
      uc: C.k().sd,
      Fk: !0
    }]];
    this.mixins.ea.constructor.call(this, c);
  },
  destroy: function () {
    for (var c in this.bd) {
      if (this.bd.hasOwnProperty(c)) {
        for (var h = 0, f = this.bd[c].length; h < f; h++) {
          this.bd[c][h].destroy(), delete this.bd[c][h];
        }

        delete this.bd[c];
      }
    }

    this.bd = {};
  },
  createComponent: function (c, h, f) {
    f.renderTo = this.el.select(c).first();
    typeof this.bd[c] === "undefined" && (this.bd[c] = []);
    h = Ext.create(h, f);
    this.bd[c].push(h);
    h.on("destroy", function (l) {
      for (var q in this.bd) {
        if (this.bd.hasOwnProperty(q)) {
          for (var n = 0, o = this.bd[q].length; n < o; n++) {
            if (this.bd[q][n] === l) {
              this.bd[q].splice(n, 1);
              return;
            }
          }
        }
      }
    }, this);
    return h;
  },
  refresh: function () {
    this.callParent();

    for (var c in this.bd) {
      if (this.bd.hasOwnProperty(c)) {
        for (var n = 0, l = this.bd[c].length; n < l; n++) {
          var f = this.el.select(c).first();
          f && this.bd[c][n].getEl().appendTo(f);
        }
      }
    }

    Ext.defer(this.Ssa, 100, this);
  },
  hc: function (c, h, f) {
    this.record = c;
    this.data.Z4 = c.get("protoInfo").bot;
    this.data.favorite = Ext.Array.indexOf(c.get("extdata").gids || [], 3) != -1;
    this.data.uin = c.get("uin");
    this.data.user = c;
    this.data.pub = h;
    this.data.Bd = f;
    this.data.status = c.get("protoInfo").status;
    this.data.type = c.get("type");

    if (c.Js(1)) {
      this.data.Og = !0;
    }

    this.data.hA = !0;
    this.data.S5 = this.ek(c);

    if (!this.data.S5) {
      this.data.x7 = c.$K(), this.data.hugga = c.Rg(), this.data.Y5 = c.f5(), this.data.jka = c.xoa(), this.data.anonymous = c.xm();
    }
  },
  wt: function () {
    j(Error(this.$className + "::prepareToolsetItems() method is abstract. Define your implementation in " + this.$className));
  },
  E6: function (c) {
    this.KN ? this.KN.destroy() : this.KN = Ext.create(C.f.uu, {
      cls: "sr-menu-popup sr-menu-popup-checkbox",
      event: c,
      anchor: c.getTarget(".user-data-links"),
      items: this.wt(),
      position: "bc",
      listeners: {
        destroy: function () {
          delete this.KN;
        }.bind(this)
      }
    });
  },
  EN: function () {
    if (!this.sr) {
      this.sr = !0;
      var c = this.NJ(),
          f = eha(this.record.get("ShowName"));
      this.data.favorite ? C.k().i7(c, {
        fn: function () {
          delete this.sr;
          C.k().qa.sa({
            msg: E.oa.wQ,
            Yi: f,
            timeout: 2000
          });
        },
        scope: this
      }, {
        fn: function () {
          delete this.sr;
          C.k().qa.sa({
            msg: E.oa.vQ,
            Yi: f,
            mc: {
              text: E.lang.Pc,
              fn: function () {
                this.EN();
              },
              scope: this
            }
          });
        },
        scope: this
      }) : C.k().kZ(c, {
        fn: function () {
          delete this.sr;
          C.k().qa.sa({
            msg: E.oa.qQ,
            Yi: f,
            timeout: 2000
          });
        },
        scope: this
      }, {
        fn: function () {
          delete this.sr;
          C.k().qa.sa({
            msg: E.oa.pQ,
            Yi: f,
            mc: {
              text: E.lang.Pc,
              fn: function () {
                this.EN();
              },
              scope: this
            }
          });
        },
        scope: this
      });
    }
  },
  Zg: t(),
  Mc: A(m),
  vd: t(),
  Ssa: function () {
    var c = this.getEl(),
        h = c.query(".sr-user-avatar")[0],
        f = c.query(".profile-user-status")[0],
        c = c.query(".sr-user-gvc-wallet")[0];
    this.fireEvent("addedavatars", {
      object: {
        uin: this.record.get("uin"),
        zb: [{
          user: this.record,
          avatar: h,
          size: 80,
          status: f,
          p4: c
        }]
      }
    });
  }
});