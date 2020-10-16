Ext.define(E.f.sb.cH, {
  extend: "Ext.Component",
  id: "main-wosp-banner",
  html: "",
  constructor: function (c) {
    c = c || c;
    this.start = c.I9.start;
    this.end = c.I9.end;
    this.g8 = !1;
    var f = parseInt(Ext.Date.now() / 1000);

    if (f > this.start && f < this.end) {
      this.g8 = !0;
    }

    this.callParent(arguments);
  },
  initComponent: function () {
    if (this.g8) {
      this.html = '<a target="_blank" href="https://www.gg.pl/wosp"><img src="' + C.ca.Da.yh("/images/wosp_banner.png") + '" /></a>';
    }

    this.callParent(arguments);
  }
});