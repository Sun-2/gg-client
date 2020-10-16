Ext.define(E.f.layout.va.hb.LQ, {
  extend: E.f.layout.va.hb.Tk,
  cls: "sr-app-window contacts-picker-window contacts-picker-share-links-window",
  hu: m,
  Cp: !1,
  Ef: !0,
  constructor: function (c) {
    c = c || {};
    c.Fd = ["contact"];
    c.hu = c.hu || c.viewLink || this.hu;
    this.callParent([c]);
  },
  HJ: function (c) {
    var f = "";
    c.title && c.hu && (f += '<div class="title"><div><i class="header-icon"></i>' + Ext.htmlEncode(c.title) + '</div><input class="link" value=' + c.hu + "/></div>");
    c.subtitle && (f += '<div class="subtitle">' + Ext.htmlEncode(c.subtitle) + "</div>");
    f += '<div class="contents"></div>';
    f += '<div class="conference"><i id="select-conference" class=""><i class="sr-form-checkbox"></i></i>Wklej do konferencji</div>';
    return f;
  },
  initComponent: function () {
    this.on("click", this.e0, this);
    this.callParent();
  },
  na: function () {
    this.callParent();
    this.Sga = this.el.select(".conference").first();
    this.Sga.on("click", this.e0, this);
  },
  e0: function () {
    var c = Ext.get("select-conference");
    c.hasCls("sr-form-checkbox-checked") ? (c.removeCls("sr-form-checkbox-checked"), this.Cp = !1) : (c.addCls("sr-form-checkbox-checked"), this.Cp = !0);
  },
  Ko: function (c, n) {
    n.disable();

    if (c == "cancel") {
      this.fireEvent(this.events.gj, {
        action: c
      }), this.destroy();
    } else {
      var l = [],
          f = this.pc.getSelectedRecords();

      if (f.length > 0) {
        Ext.each(f, function (g) {
          var h = {};
          Ext.each(this.fields, function (b) {
            h[b] = g.get(b);
          }, this);
          l.push(h);
        }, this);

        if (typeof c === "function") {
          if (c(l) === !1) {
            n.enable();
            return;
          }
        } else {
          this.fireEvent(this.events.gj, {
            action: c,
            data: l,
            conference: this.Cp
          });
        }

        this.destroy();
      } else {
        n.enable();
      }
    }
  }
});