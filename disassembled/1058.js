Ext.define(E.controllers.fC, {
  extend: E.controllers.nc,
  name: "conference-show",
  ta: m,
  Ha: m,
  conferenceId: "",
  gFa: !0,
  fFa: m,
  AI: !1,
  constructor: function (c) {
    this.callParent([c]);
    this.ta = C.k().ta;
    this.Ha = Ext.getStore("UsersStore");
  },
  init: function () {
    this.callParent(arguments);
    this.fd = C.k().be.fd;
  },
  execute: function (c) {
    this.ta.on("disconnected", this.Fj, this);
    this.ta.on("conferencefullinfoloaded", this.f0, this);
    this.callParent(arguments);

    if (c.params[1]) {
      this.conferenceId = c.params[1], this.u3() && this.AI && this.Cp();
    }
  },
  Fj: function () {
    C.Ca("search/unknownuser");
  },
  destroy: function () {
    this.callParent();
  },
  rg: function () {
    this.ta.un("disconnected", this.Fj, this);
    this.callParent(arguments);
  },
  u3: function () {
    var c = this.Ha.De(this.conferenceId).qe();

    if (c) {
      return this.Oa = c, !0;
    }

    return !1;
  },
  f0: function () {
    this.u3() ? (this.ta.un("conferencefullinfoloaded", this.f0, this), this.AI = !0, this.Cp()) : this.AI && C.Ca("search/unknownuser");
  },
  Cp: function () {
    var c = this.Ha.De(this.conferenceId).qe();
    C.k().fc(c);
    Ext.Function.defer(function () {
      var e = C.k().Ja.mk(this.conferenceId),
          l = C.k().Ja.hd(),
          f = l.getItem(this.conferenceId);
      f || (l.qo(e), f = l.getItem(this.conferenceId));
      f.s5();
      f.expand();
      C.Ca("");
    }, 200, this);
  }
});