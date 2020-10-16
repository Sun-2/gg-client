Ext.define(E.f.profile.contact.oC, {
  extend: E.f.profile.$h,
  cls: "user-edit-form",
  yp: !1,
  fields: m,
  constructor: function (c) {
    c = c || {};
    c.data = {
      yp: this.yp
    };
    this.fields = {};
    this.store = Ext.getStore("ContactsStore");
    this.callParent([c]);
  },
  initComponent: function () {
    try {
      this.items = [this.wb = Ext.create(E.f.profile.contact.cv, {
        yp: this.yp
      })];
    } catch (c) {}

    this.callParent(arguments);
  },
  destroy: function () {
    this.eb();
    this.callParent();
  },
  fb: function () {
    this.wb.on(this.wb.Bq, this.Yr, this);
    this.wb.on(this.wb.Aq, this.hp, this);
  },
  eb: function () {
    this.wb.un(this.wb.Bq, this.Yr, this);
    this.wb.un(this.wb.Aq, this.hp, this);
  },
  na: function () {
    this.fb();
    this.callParent();
  },
  hc: function (c, f) {
    this.Od = f;

    if (this.record = c) {
      this.Tma = this.record.get("uin") == "0", this.wb.hc(c);
    }
  },
  Zg: t(),
  Yr: function (c) {
    var f = !1;
    this.Tma && (f = this.store.Ba(Ext.String.trim(c.ggnumber[0])));
    f ? C.k().qa.sa({
      msg: E.oa.rQ
    }) : this.record.get("cid") ? this.D7(c) : this.esa(c);
  },
  D7: function (c) {
    var n = [],
        l = this.record.get("meta");
    n.push(this.record.get("cid"));

    if (Ext.Object.getSize(this.fields) === 0) {
      this.fields = {
        ShowName: c.name[0],
        WwwAddress: c.siteUrl[0],
        Phone: typeof c.phone !== "undefined" ? c.phone[0] : [],
        HomePhone: typeof c.homePhone !== "undefined" ? c.homePhone[0] : [],
        Email: c.email,
        MobilePhone: c.mobilePhone
      }, c.ggnumber && c.ggnumber.length && (this.fields.GGNumber = c.ggnumber[0]);
    }

    var f = {
      cid: this.record.get("cid"),
      attr: {},
      aidsToClear: []
    };
    Ext.Object.each(this.fields, function (g, y) {
      var w = l[g];

      if (Ext.isArray(y)) {
        var o = 0;
        Ext.Array.each(y, function (p, b) {
          p = Ext.String.trim(p);
          typeof w === "undefined" || typeof w[b] === "undefined" ? p !== "" && (typeof f.attr[g] === "undefined" && (f.attr[g] = []), f.attr[g][o++] = {
            value: p
          }) : p === "" && w[b] !== "" ? f.aidsToClear.push(w[b].aid) : p !== w[b].value && (typeof f.attr[g] === "undefined" && (f.attr[g] = []), f.attr[g][o++] = {
            value: p,
            aid: w[b].aid
          });
        });
      } else {
        if (typeof y === "undefined") {
          return !0;
        }

        var h = Ext.String.trim(y);

        if (typeof w === "undefined") {
          if (h === "") {
            return !0;
          }

          f.attr[g] = {
            value: h
          };
        } else {
          if (h === w.value && g !== "ShowName") {
            return !0;
          }

          h === "" && w !== "" ? f.aidsToClear.push(w.aid) : f.attr[g] = {
            value: h,
            aid: w.aid
          };
        }
      }
    });
    (c = E.ca.gi.Mj(n, f)) && Ext.getStore("ContactsStore").ak(c);
    this.store.Jva(f, this.record.get("uin") || "", {
      Ea: function () {
        this.z1(E.oa.PY);
      },
      ya: function () {
        this.w1(E.oa.OY);
      },
      scope: this
    });
  },
  z1: function (c) {
    Ext.Object.each(this.fields, function (e) {
      switch (e) {
        case "Email":
        case "WwwAddress":
        case "MobilePhone":
          var f = {};
          f[e] = this.fields[e];
          this.record.set("extdata", f);
          break;

        default:
          this.record.set(e, this.fields[e]);
      }
    }, this);
    this.wb.pe();
    C.k().qa.sa({
      msg: c,
      timeout: 2000
    });
    this.fields = {};
    this.hp();
  },
  w1: function (c) {
    this.wb.pe();
    C.k().qa.sa({
      msg: c,
      mc: {
        text: E.lang.Pc,
        fn: function () {
          this.D7();
        },
        scope: this
      }
    });
  },
  esa: function (c) {
    var h = Ext.String.trim(c.name[0]);
    h && this.record.set("ShowName", h);

    if (this.uoa() || this.ek()) {
      this.js(this.record, {
        fn: function () {
          this.z1(E.oa.PY);
        },
        scope: this
      }, {
        fn: function () {
          this.w1(E.oa.OY);
        },
        scope: this
      });
    } else {
      var f = {
        uin: this.record.get("uin"),
        ShowName: c.name[0],
        Email: this.j7(c.email),
        MobilePhone: this.j7(c.mobilePhone),
        WwwAddress: c.siteUrl[0],
        type: "contact"
      };
      (this.win = Ext.create(E.f.windows.xq, {
        Sb: !0,
        record: this.record,
        l5: m,
        buttons: [{
          selector: ".add-action",
          fn: function () {
            this.win.zx(this, this.el.select(".add-action"), {
              data: f
            }, eha(this.win.el.select("textarea.message").elements[0].value));
            this.win && this.win.Xa();
            this.hp();
            this.wb.pe();
          },
          scope: this,
          Ib: !1
        }, {
          selector: ".invite-action",
          fn: function () {
            var g = this.el.select(".invite-action"),
                l = {
              data: {
                uin: this.record.get("uin"),
                name: this.record.get("ShowName"),
                CH: m,
                XK: !0
              }
            };
            this.win.Ex(this, g, l, eha(this.win.el.select("textarea.message").elements[0].value));
            this.win && this.win.Xa();
            this.hp();
            this.wb.pe();
          },
          scope: this,
          Ib: !1
        }]
      })) && this.win.on("deactivate", this.yi, this);
    }
  },
  js: function (c, n, l) {
    var f = c.data.ShowName && c.data.ShowName.length > 0 ? fht(c.data.ShowName) : fht(c.data.name),
        f = {
      uin: c.data.uin,
      ShowName: f,
      Email: c.data.Email ? c.data.Email : "",
      MobilePhone: c.data.MobilePhone ? c.data.MobilePhone : "",
      WwwAddress: c.data.WwwAddress ? c.data.WwwAddress : "",
      type: c.data.type == 4 ? "conference" : "contact",
      FlagFriend: "1"
    };
    C.k().le(f, {
      Ea: function () {
        C.k().qa.sa({
          msg: E.oa.En,
          timeout: 2000
        });
        n && n.fn.call(n.scope);
        this.fields = {};
      },
      ya: function () {
        C.k().qa.sa({
          msg: E.oa.uq,
          mc: {
            text: E.lang.Pc,
            fn: function () {
              this.js(c, n, l);
            },
            scope: this
          }
        });
        l && l.fn.call(l.scope);
        this.fields = {};
      },
      scope: this
    });
  },
  Mt: function (c) {
    this.yp = c === "add" ? !0 : !1;
    this.wb.Mt(c);
  },
  yi: function () {
    this.wb.pe();
    this.win && this.win.un("deactivate", this.yi, this);
  },
  j7: function (c) {
    if (!Ext.isArray(c)) {
      return [];
    }

    return Ext.Array.filter(c, function (e) {
      return e.length > 0;
    });
  },
  hp: function () {
    C.Ca(parseInt(this.record.get("uin"), 10) ? "profile/" + this.record.get("uin") : "contact/" + this.record.get("cid"));
  }
});