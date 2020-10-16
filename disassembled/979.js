Ext.define("ggpl.gui.layout.widgets.contactspicker.ContactsPickerSummary", {
  extend: C.f.Jb,
  container: m,
  Cm: m,
  Roa: m,
  kDa: m,
  initComponent: function () {
    this.callParent();
    this.on("afterrender", this.na, this);
  },
  na: function () {
    this.Cm = [];
    this.Roa = {};
    this.container = Ext.get(document.createElement("ul"));
    this.container.appendTo(this.getEl());
    this.getEl().addCls("contacts-picker-summary");
  },
  setData: function (c) {
    c.sort(function (g, h) {
      if (g == E.lang.Se) {
        return -1;
      }

      if (h == E.lang.Se) {
        return 1;
      }

      if (g == E.lang.Se && h == E.lang.Se) {
        return 0;
      }

      return C.ca.xa.du(g, h);
    });
    this.Ui && (this.Ui.destroy(), delete this.Ui);
    Ext.each(this.Cm, function (g, h) {
      g.destroy();
      delete this.Cm[h];
    }, this);
    this.Cm = [];
    var f = c.length;
    Ext.each(c, function (e, o) {
      if (this.Ui) {
        return !1;
      }

      var g = Ext.get(document.createElement("li"));
      g.dom.innerHTML = Ext.String.htmlEncode(e).replace(/\s+/g, "&nbsp;") + (o != f - 1 ? ", " : "");
      this.container.appendChild(g);
      this.Cm.push(g);
      var u = Ext.fly(this.getEl()).getRegion().bottom;

      if (!this.Ui && g.getRegion().bottom > u) {
        this.Ui = Ext.get(document.createElement("li"));
        this.Ui.dom.innerHTML = "... ";

        do {
          this.Ui.insertBefore(g);
          this.Cm.splice(o, 1);
          g.destroy();
          var g = this.Cm[--o],
              q = this.Ui.getRegion().bottom,
              q = this.Ui.getSize().width == 0 || q == 0 || q > u;
        } while (o > 0 && q);
      }
    }, this);
  },
  destroy: function () {
    this.un("afterrender", this.na, this);
    this.callParent();
  }
});