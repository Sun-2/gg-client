Ext.define(E.controllers.profile.vn, {
  extend: E.controllers.profile.ou,
  rs: function (c, h) {
    if (this.la.Ba(c)) {
      h(this.la.Ba(c), !0);
    } else {
      var f = Ext.getStore("UnknownContactsStore");
      h(f.Ba(c), !1);
    }
  }
});