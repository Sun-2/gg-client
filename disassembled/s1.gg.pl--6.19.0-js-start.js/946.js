Ext.define(E.ea.nR, {
  extend: E.ea.pf,
  name: "SetHeightAppBehavior",
  initEvents: function () {
    this.callParent(arguments);
    this.owner.events.setheight || this.owner.addEvents("setheight");
  },
  onAdd: function () {
    this.callParent(arguments);
    this.eoa();
  },
  eoa: function () {
    try {
      var c = this;

      this.Ic.SET_HEIGHT = function (g) {
        try {
          return c.gka(g), {
            success: !0
          };
        } catch (b) {
          j(b);
        }
      };

      this.owner.bind("SET_HEIGHT", this.Ic.SET_HEIGHT);
    } catch (f) {}
  },
  gka: function (c) {
    c > 0 && this.owner.view.setHeight(c);
  }
});