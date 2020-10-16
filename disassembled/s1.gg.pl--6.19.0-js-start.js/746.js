Ext.define(C.core.mixins.Td, {
  constructor: function (c) {
    this.config = Ext.apply({
      preventDefault: !0
    }, c || {});
    this.on("afterrender", this.b0, this);
    this.on("destroy", this.pha, this, {
      single: !0
    });
  },
  b0: function () {
    this.el.on("click", this.Ia, this);
  },
  pha: function () {
    this.el.un("click", this.Ia, this);
    this.un("afterrender", this.b0, this);
  },
  Ia: function (c, n, l) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        this.ka[f].call(this, c, n, l);
        this.config.preventDefault && c.preventDefault();
        break;
      }
    }
  }
});