Ext.define(E.f.windows.xq, {
  extend: C.f.windows.cc,
  da: m,
  constructor: function (c) {
    c = c || {};
    this.da = c.da || C.k().da;
    this.X4 = (this.W5 = c.W5 || !1) ? this.da.ma("add-contact-invite-wnd-noinvite") : this.da.ma("add-contact-invite-wnd");
    this.la = Ext.getStore("ContactsStore");
    this.callParent([{
      Gb: c.record.data ? this.X4.apply(c.record.data) : this.X4.apply(c.record),
      Ab: !0,
      cls: "add-contact-invite-wnd",
      buttons: c.buttons,
      Sb: c.Sb
    }]);
  },
  Aza: function (c, h, f) {
    C.k().qa.sa({
      msg: E.oa.uq,
      mc: {
        text: E.lang.Pc,
        fn: function () {
          this.zx(c, h, f);
        },
        scope: this
      }
    });
  },
  zx: function (c, w, q, o, f, y) {
    var o = q.data.ShowName && q.data.ShowName.length > 0 ? fht(q.data.ShowName) : fht(q.data.name),
        o = {
      uin: q.data.uin,
      ShowName: o,
      type: q.data.type == 4 ? "conference" : "contact",
      FlagFriend: "1"
    },
        u = q.data.extdata;

    if (u) {
      o.Email = typeof u.Email !== "undefined" ? u.Email : "", o.MobilePhone = typeof u.MobilePhone !== "undefined" ? u.MobilePhone : "", o.WwwAddress = typeof u.WwwAddress !== "undefined" ? u.WwwAddress : "";
    }

    C.k().le(o, {
      Ea: function () {
        C.k().qa.sa({
          msg: E.oa.En,
          timeout: 2000
        });
        f && f.fn.call(f.scope);
        c.fireEvent("contactaddonsuccess", this);
        this.Xa();
      },
      ya: function () {
        C.k().qa.sa({
          msg: E.oa.uq,
          mc: {
            text: E.lang.Pc,
            fn: function () {
              this.zx(c, w, q);
            },
            scope: this
          }
        });
        y && y.fn.call(y.scope);
        c.fireEvent("contactaddonfailure", this);
      },
      scope: this
    });
  },
  Ex: function (D, B, z, y, w, o) {
    var f,
        c,
        G = z.data.ShowName && z.data.ShowName.length > 0 ? fht(z.data.ShowName) : fht(z.data.name);
    f = {
      uin: z.data.uin,
      ShowName: G,
      type: z.data.type == 4 ? "conference" : "contact"
    };

    if (G = z.data.extdata) {
      f.Email = typeof G.Email !== "undefined" ? G.Email : "", f.MobilePhone = typeof G.MobilePhone !== "undefined" ? G.MobilePhone : "", f.WwwAddress = typeof G.WwwAddress !== "undefined" ? G.WwwAddress : "";
    }

    c = function () {
      E.api.Ob.Ym({
        type: "contacts",
        id: C.k().fa.data.uin,
        recipient: "user," + f.uin,
        iO: y
      }, {
        fn: function () {
          D.fireEvent("contactinviteonsuccess", this);
          C.k().qa.sa({
            msg: E.oa.vq,
            timeout: 1500
          });
          w && w.fn.call(w.scope);
          this.Xa();
        },
        scope: this
      }, {
        fn: function (b) {
          b.result && b.result.errorData ? (b.result.errorData.systemCode === 6 && C.k().qa.sa(E.api.Ob.tf(b) || {
            msg: E.oa.vS
          }), this.Xa()) : C.k().qa.sa(E.api.Ob.tf(b) || {
            msg: E.oa.Nq
          });
          o && o.fn.call(o.scope, b);
          D.fireEvent("contactinviteonfailure", this);
        },
        scope: this
      });
    };

    this.la.Ba(z.data.uin) ? c.call(this) : C.k().le(f, {
      Ea: function () {
        Ext.Function.defer(function () {
          c.call(this);
        }, 1000, this);
      },
      ya: function () {
        D.fireEvent("contactinviteonfailure", this);
        C.k().qa.sa({
          msg: E.oa.K$,
          mc: {
            text: E.lang.Pc,
            fn: function () {
              this.Ex(D, B, z, y);
            },
            scope: this
          }
        });
      },
      scope: this
    });
  },
  Fza: function (c, z, u, o, f, B) {
    var y, w;
    y = {
      GGNumber: "",
      ShowName: u.name,
      Email: u.Email,
      MobilePhone: u.MobilePhone,
      WwwAddress: u.WwwAddress,
      type: u.type
    };

    w = function () {
      E.api.Ob.Ym({
        type: "contacts",
        id: C.k().fa.data.uin,
        recipient: "user,email:" + y.Email,
        iO: o
      }, {
        fn: function () {
          c.fireEvent("contactinviteonsuccess", this);
          C.k().qa.sa({
            msg: E.oa.vq,
            timeout: 1500
          });
          f && f.fn.call(f.scope);
          this.Xa();
        },
        scope: this
      }, {
        fn: function (b) {
          c.fireEvent("contactinviteonfailure", this);
          C.k().qa.sa(E.api.Ob.tf(b) || {
            msg: E.oa.Nq
          });
          b.result && b.result.errorData && b.result.errorData.systemCode === 21 && this.Xa();
          B && B.fn.call(B.scope);
        },
        scope: this
      });
    };

    this.Ze.lZ(y, {
      Ea: function () {
        C.k().qa.sa({
          msg: E.oa.En,
          timeout: 2000
        });
        w.call(this);
        f.fn.call(f.scope);
      },
      ya: function () {
        B.fn.call(B.scope);
      },
      scope: this
    });
  }
});