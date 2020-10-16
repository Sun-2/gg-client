Ext.define(E.controllers.profile.bv, {
  extend: E.controllers.profile.vn,
  Ha: m,
  constructor: function () {
    this.callParent(arguments);
    this.Ha = Ext.getStore("UsersStore");
  },
  kd: function () {
    var c = C.k().cp();
    this.view = Ext.create(E.f.profile.conference.kC, {
      $d: c.params[2] && c.params[2] === "add"
    });
  },
  execute: function (c) {
    "0" == c.params[1] || !this.Ha.De(c.params[1]).qe() ? C.vs("error/404/page") : this.callParent(arguments);
  },
  rg: function () {
    this.xd && this.callParent(arguments);
  }
});