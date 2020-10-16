Ext.define(E.services.fB, {
  mixins: {
    observable: Ext.util.Observable
  },
  tZ: m,
  Mg: m,
  gua: 6000,
  z8: m,
  kc: m,
  constructor: function (c) {
    c = c || {};
    this.callParent([c]);
    this.tZ = E.api.eB;
    c.Mg || j(Error("Event bus required!"));
    this.Mg = c.Mg;
    this.kc = c.kc;
    this.goa();
  },
  goa: function () {
    var c = this.kc.get(E.stores.Qc.PW, "2000-01-01"),
        f = Ext.Date.format(new Date(), "Y-m-d");

    if (c != f) {
      this.z8 = new Ext.util.DelayedTask(function () {
        this.tZ.Ima({
          fn: function (e) {
            e.ad && e.ad.ggAdActive && (Ext.create(E.f.windows.HY, {
              ol: e.ad
            }), this.kc.set(E.stores.Qc.PW, f));
          },
          scope: this
        }, {
          fn: t(),
          scope: this
        });
      }, this), this.z8.delay(this.gua);
    }
  }
});