Ext.define(E.ea.jR, {
  extend: E.ea.pf,
  name: "CloseEnglandMigration",
  la: m,
  eventName: "CLOSE_ENGLAND_MIGRATION_WINDOW",
  initEvents: function () {
    this.callParent(arguments);
    this.owner.events.closeenglandmigration || this.owner.addEvents("closeenglandmigration");
  },
  onAdd: function () {
    this.callParent(arguments);
    this.Hna();
  },
  Hna: function () {
    try {
      var c = this;

      this.Ic[this.eventName] = function (g) {
        try {
          return c.bka(g), {
            success: !0
          };
        } catch (b) {
          j(b);
        }
      };

      this.owner.bind(this.eventName, this.Ic[this.eventName]);
    } catch (f) {}
  },
  bka: function () {
    this.owner.Xa();
  }
});