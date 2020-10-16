Ext.define(E.ea.mv, {
  extend: E.ea.pf,
  name: "OpenChatAppBehavior",
  la: m,
  eventName: "CONTACT_OPEN_CHAT",
  constructor: function () {
    this.callParent(arguments);
    this.Ha = Ext.data.StoreManager.lookup("UsersStore");
  },
  initEvents: function () {
    this.callParent(arguments);
    this.owner.events.openchat || this.owner.addEvents("openchat");
  },
  onAdd: function () {
    this.callParent(arguments);
    this.Xna();
  },
  Xna: function () {
    try {
      var c = this;

      this.Ic[this.eventName] = function (g) {
        try {
          return c.N2(g), {
            success: !0
          };
        } catch (b) {
          j(b);
        }
      };

      this.owner.bind(this.eventName, this.Ic[this.eventName]);
    } catch (f) {}
  },
  N2: function (c) {
    var h = c.uin,
        c = c.type;

    if (this.Ha.fwa(h, c)) {
      var f = m,
          f = c === 2 ? this.Ha.De(h).qe() : this.Ha.xb(h).Hb();
      C.k().fc(f);
    } else {
      C.k().qa.sa({
        msg: E.oa.E$
      });
    }
  }
});