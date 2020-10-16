Ext.define(E.f.Ma.xE, {
  event: m,
  wJ: {
    status: E.f.Ma.BE,
    photo: E.f.Ma.AE,
    video: E.f.Ma.CE,
    link: E.f.Ma.zE,
    generic: E.f.Ma.yE
  },
  constructor: function () {
    this.callParent(arguments);
  },
  createEvent: function (c) {
    if (typeof c.Gi != "undefined") {
      if (c.$b = c.Gi[0], c.Gi.length == 1) {
        var f = c.$b.get("family"),
            f = this.J3(f);
      }
    } else {
      f = c.$b.get("family"), f = this.J3(f);
    }

    c.dN = typeof c.dN !== "undefined" ? c.dN : m;
    return Ext.create(f, c);
  },
  J3: function (c) {
    return this.wJ[c] ? this.wJ[c] : this.wJ.generic;
  }
});