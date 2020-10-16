Ext.define(E.f.Tb.qE, {
  extend: "Ext.view.View",
  itemSelector: "div.invitation",
  store: m,
  tpl: new Ext.XTemplate('<tpl for="."><div class="invitation"><p>{[values.body.userMsg || values.body.message]}</p><p>{[this.showBtns(values)]}</p><p>{[values.status]}</p></div></tpl>', {
    showBtns: function (c) {
      var f = "";
      c.status != "rejected" && (f += '<a href="#" class="' + c.body.buttons[0].params.status + '-invitation">' + c.body.buttons[0].label + "</a> ");
      c.status == "waiting" && (f += ' | <a href="#" class="' + c.body.buttons[1].params.status + '-invitation">' + c.body.buttons[1].label + "</a>");
      c.status == "rejected" && (f += " brak akcji - rejected");
      return f;
    },
    compiled: !0
  }),
  constructor: function () {
    this.store = Ext.data.StoreManager.lookup("InvitationsTheirsStore");
    this.callParent(arguments);
  },
  initComponent: function () {
    this.on("afterrender", this.na, this);
    this.store.on("statuschanged", this.H0, this);
    C.k().og.on("invitations/list", this.refresh, this);
    this.callParent(arguments);
  },
  na: function () {
    this.on("itemclick", this.Sr, this);
  },
  destroy: function () {
    this.un("itemclick", this.Sr, this);
    this.un("afterrender", this.na, this);
    this.store.un("statuschanged", this.H0, this);
    C.k().og.un("invitations/list", this.refresh, this);
  },
  Sr: function (c, p, o, n, f) {
    f.preventDefault();
    f.getTarget(".accepted-invitation") !== m ? E.api.Ob.Nm({
      Im: "user",
      Hm: C.k().fa.get("uin"),
      Ch: p,
      status: "accepted"
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: E.oa.jba,
          timeout: 2000
        });
      },
      scope: this
    }, {
      fn: function (e) {
        C.k().qa.sa(E.api.Ob.tf(e) || {
          msg: E.oa.kba
        });
      },
      scope: this
    }) : f.getTarget(".hidden-invitation") !== m && E.api.Ob.Nm({
      Im: "user",
      Hm: C.k().fa.get("uin"),
      Ch: p,
      status: "hidden"
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: {
            id: 1,
            text: E.lang.dY,
            type: C.f.ua.wa.INFO
          },
          timeout: 2000
        });
      },
      scope: this
    }, {
      fn: function () {
        C.k().qa.sa({
          msg: {
            id: 1,
            text: E.lang.eY,
            type: C.f.ua.wa.ERROR
          }
        });
      },
      scope: this
    });
  },
  H0: function () {
    this.refresh();
  }
});