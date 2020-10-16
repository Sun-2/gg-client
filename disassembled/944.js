Ext.define(E.ea.ZC, {
  extend: E.ea.pf,
  name: "UserStatusAppBehavior",
  la: m,
  constructor: function () {
    this.callParent(arguments);
    this.la = Ext.data.StoreManager.lookup("ContactsStore");
  },
  onAdd: function () {
    this.callParent(arguments);
    this.coa();
  },
  coa: function () {
    try {
      var c = this;

      this.Ic.GET_USER_STATUS = function (b) {
        if (b == C.k().fa.get("uin")) {
          return C.k().fa.get("status");
        }

        if (b = c.la.findRecord("uin", "" + b, 0, !1, !1, !0)) {
          return b.get("protoInfo").status || "stranger";
        }

        return "stranger";
      };

      this.owner.bind("GET_USER_STATUS", this.Ic.GET_USER_STATUS);
    } catch (f) {}
  }
});