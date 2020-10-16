Ext.define(E.f.Uc.SC, {
  extend: C.f.windows.cc,
  constructor: function (c) {
    var f = C.k().py(c.uin);
    c.cls = "sr-confirmation sr-confirmation-enable-aol-popup";
    c.Gb = C.k().da.Wa("confirmation-enable-aol-popup", {
      label: f.get("ShowName")
    });
    this.callParent(arguments);
  },
  destroy: function () {
    this.eb();
    this.callParent();
  },
  Lo: function () {
    this.callParent();
    this.fb();
  },
  fb: function () {
    this.getEl().on("click", this.Ia, this);
  },
  eb: function () {
    this.getEl().un("click", this.Ia, this);
  },
  Ia: function (c, n, l) {
    for (var f in this.ka) {
      if (m !== c.getTarget(f)) {
        c.preventDefault();
        this.ka[f].call(this, c, n, l);
        break;
      }
    }
  },
  ka: {
    ".cancel-btn": function (c) {
      c.stopEvent();
      this.destroy();
    },
    ".confirm-btn": function () {
      this.fireEvent("confirmed");
      this.destroy();
    }
  }
});