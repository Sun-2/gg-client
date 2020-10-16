Ext.define("ggpl.gui.layout.widgets.contactspicker.ContactsPickerLimitMessage", {
  extend: C.f.Jb,
  cls: "contacts-picker-limit-message",
  P6: m,
  constructor: function (c) {
    Ext.apply(this, c);
    this.callParent([c]);
  },
  N7: function (c) {
    Ext.each(this.P6, function (f) {
      var b = f.aM || f.range;

      if (c >= b[0] && (typeof b[1] === "undefined" || c <= b[1])) {
        return this.el.dom.innerHTML = C.ca.xa.Z6(f.pattern || f.pattern, c), !1;
      }
    }, this);
  }
});