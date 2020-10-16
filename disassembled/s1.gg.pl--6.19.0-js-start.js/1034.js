Ext.define(E.f.layout.Ga.RY, {
  extend: C.f.pd,
  Wf: m,
  Jr: "sr-form-checkbox-checked",
  Qy: !1,
  la: m,
  kza: m,
  mixins: {
    ka: C.core.mixins.Td
  },
  ka: {
    ".add-contact": function () {
      this.le();
    },
    ".invite-contact": function () {
      this.U1();
    },
    ".report-abuse": function () {
      Ext.create(E.f.windows.iw, {
        Sb: !0,
        user: this.user
      });
    }
  },
  constructor: function (c) {
    this.tpl = c.tpl || C.k().da.ma("chat-infobox-unknown-contact");
    this.Wf = c.Wf;
    this.user = c.user;
    this.data = this.Wf;
    this.la = Ext.getStore("ContactsStore");
    this.callParent([c]);
    this.mixins.ka.constructor.call(this, c);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.callParent(arguments);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.callParent(arguments);
  },
  na: function () {
    this.U1();
  },
  U1: function () {
    var c = this.el.select(".invite-contact i").first();
    this.Qy ? (c.removeCls(this.Jr), this.Qy = !1) : (c.addCls(this.Jr), this.Qy = !0);
  },
  le: function () {
    var c = {
      uin: this.Wf.uin,
      ShowName: this.Wf.name,
      Email: this.Wf.fm,
      MobilePhone: this.Wf.phone,
      WwwAddress: this.Wf.Bwa,
      type: "contact",
      FlagFriend: "1"
    };
    C.k().le(c, {
      Ea: function () {
        C.k().qa.sa({
          msg: E.oa.En,
          timeout: 2000
        });
      },
      ya: function () {
        C.k().qa.sa({
          msg: E.oa.uq,
          mc: {
            text: E.lang.Pc,
            fn: function () {
              this.le(c, successListener, failureListener);
            },
            scope: this
          }
        });
      },
      scope: this
    });
    this.Qy && this.Ym();
    this.destroy();
  },
  Ym: function () {
    E.api.Ob.Ym({
      type: "contacts",
      id: C.k().fa.data.uin,
      recipient: "user," + this.Wf.uin,
      iO: ""
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.vq,
          timeout: 1500
        });
      },
      scope: this
    }, {
      fn: function (c) {
        c.result && c.result.errorData ? c.result.errorData.systemCode === 6 && C.k().qa.sa(E.api.Ob.tf(c) || {
          msg: E.oa.vS
        }) : C.k().qa.sa(E.api.Ob.tf(c) || {
          msg: E.oa.Nq
        });
      },
      scope: this
    });
  }
});