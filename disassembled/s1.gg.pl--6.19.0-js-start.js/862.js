Ext.define(E.f.sb.iR, {
  extend: C.f.windows.cc,
  mixins: {
    ea: C.core.mixins.kb
  },
  iframe: m,
  pm: pm,
  da: m,
  OC: "englandmigration-close-window",
  constructor: function (c) {
    c = {
      name: "authcenter",
      ea: [[E.ea.jR, {}], [E.ea.lv, {}]]
    };
    Ext.apply(this, c);
    this.Ab = c.Ab;
    this.app = C.k();
    this.callParent([{
      Gb: '<iframe  class="default-iframe"  id="england-migration"  src="' + this.Ki() + '" frameborder="0"></iframe>',
      Ab: !1,
      cls: "england-migration-container",
      Sb: c.Sb
    }]);
    this.ea = this.ea || [];
    this.mixins.ea.constructor.call(this, c);
    this.addEvents("post", "bind", "unbind");
  },
  Rla: function () {
    if (this.iframe) {
      return this.iframe;
    }

    return this.iframe = Ext.get("england-migration");
  },
  Ki: function () {
    var c = {
      "%CLIENT_ID%": C.k().config.AUTHCENTER2_CLIENT_ID,
      "%ORIGIN%": window.location.protocol + "//" + window.location.host
    },
        f = C.k().Ela();
    return f = f.replace(/%CLIENT_ID%|%ORIGIN%/gi, function (b) {
      return c[b];
    });
  },
  Xa: function () {
    this.fireEvent(this.OC);
    this.callParent();
  },
  bind: function (c, f) {
    this.pm.bind([this.name, c].join("_"), f, this.jm());
    this.fireEvent.apply(this, ["bind"].concat(arguments));
  },
  unbind: function (c, f) {
    this.pm.unbind([this.name, c].join("_"), f);
    this.fireEvent.apply(this, ["unbind"].concat(arguments));
  },
  jm: function () {
    return (this.address || this.Rla().dom.src).match(/^https?:\/\/[^\?#\/]+/)[0];
  }
});