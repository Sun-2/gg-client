Ext.define(E.ea.lv, {
  extend: E.ea.pf,
  name: "NavigateAppBehavior",
  constructor: function () {
    this.callParent(arguments);
  },
  onAdd: function () {
    this.callParent(arguments);
  },
  onRemove: function () {
    this.owner.un("doaction", this.U5, this);
    this.callParent(arguments);
  },
  init: function () {
    this.callParent(arguments);
  },
  initEvents: function () {
    this.callParent(arguments);
    this.owner.events.navigateapp || this.owner.addEvents("navigateapp");
    this.owner.events.navigateto || this.owner.addEvents("navigateto");
    this.Wna();
    this.Vna();
  },
  Wna: function () {
    try {
      var c = this;

      this.Ic.NAVIGATE_TO = function (n) {
        try {
          var g = n.path,
              g = /^\//.test(g) ? g.substr(1) : c.owner.name + "/" + g;
          C.Ca(g);
          c.owner.fireEvent("navigateto");
        } catch (b) {
          j(b);
        }
      };

      this.owner.bind("NAVIGATE_TO", this.Ic.NAVIGATE_TO);
    } catch (f) {}
  },
  U5: function (c, f) {
    this.owner.post("NAVIGATE_TO", {
      success: !0,
      path: f
    });
    this.owner.fireEvent("navigateapp", f);
  },
  Vna: function () {
    this.owner.on("doaction", this.U5, this);
  }
});